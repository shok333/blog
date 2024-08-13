from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods, require_GET
from django.views.generic.edit import CreateView
from .forms import PostForm
import json

class PostCreateView(CreateView):
  template_name = 'create_post.html' 
  form_class = PostForm 
  success_url = '/posts/'

  def get_initial(self):
    initial = super().get_initial()
    initial['title'] = 'Заголовок 1'    
    initial['content'] = '{"a":"cms"}'

    return initial

  def form_valid(self, form):
    form.instance.author = self.request.user

    return super().form_valid(form)

  def form_invalid(self, form):
    # print(form.errors.as_json())
    
    return super().form_invalid(form)

@require_GET
def index (request):
  return HttpResponse('index')

@require_GET
def show (request):
  return HttpResponse('show')

# @require_http_methods(['GET', "POST"])
# def add (request):
#   return HttpResponse('add')

@require_http_methods(['GET', "PUT"])
def update (request):
  return HttpResponse('update')

@require_http_methods(["DELETE"])
def delete (request):
  return HttpResponse('delete')