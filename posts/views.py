from django.http import HttpResponse, JsonResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.decorators.http import require_http_methods, require_GET
import json
import datetime
from .models import Post
from django.contrib.auth.models import User
from django.utils.text import slugify

@require_GET
def index (request):
  page = request.GET.get('page')
  limit = request.GET.get('limit')

  post_list = Post.objects.all()
  
  paginator = Paginator(post_list, limit)

  try:
      paginated_posts = paginator.page(page)
      data = list(paginated_posts.object_list.values('title', 'author', 'slug'))

  except PageNotAnInteger:
      data = []
      print('PageNotAnInteger')
  except EmptyPage:
      data = []
      print('EmptyPage')

  return JsonResponse({
    'data': data,
    'pagination': {
      'page': page,
      'limit': limit,
      'total': paginator.count,
      'pages': paginator.num_pages
    }
  })

@require_GET
def show (request):
  return HttpResponse('show')

@require_http_methods(["POST"])
def add (request):
  data = json.loads(request.body)
  author = data['author']

  print(author)
  # TODO Заменить name на id пользователя
  user = User.objects.get(username=author)

  print(user)

  post = Post.objects.create(
    title = data['title'],
    content = json.dumps(data['body']),
    created_at = datetime.date.today(),
    author = user,
  )

  return JsonResponse({
    'id': post.id,
    'title': post.title,
    'content': post.content,
    'created_at': post.created_at.isoformat(),
    'author': user.username
  }, status=201)

@require_http_methods(['GET', "PUT"])
def update (request):
  return HttpResponse('update')

@require_http_methods(["DELETE"])
def delete (request):
  return HttpResponse('delete')