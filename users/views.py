from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def index (request):
  return JsonResponse({
    'name': 'John Doe 2',
    'age': 30,
    'city': 'New York'
  })

def add (request):
  return HttpResponse('Users Add')
