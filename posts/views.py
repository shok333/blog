from django.http import HttpResponse
from django.views.decorators.http import require_http_methods, require_GET

@require_GET
def index (request):
  return HttpResponse('index')

@require_GET
def show (request):
  return HttpResponse('show')

@require_http_methods(["POST"])
def add (request):
  print(222)
  return HttpResponse('add')

@require_http_methods(['GET', "PUT"])
def update (request):
  return HttpResponse('update')

@require_http_methods(["DELETE"])
def delete (request):
  return HttpResponse('delete')