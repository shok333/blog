from django.shortcuts import render
from django.http import HttpResponse

def index (request):
  return HttpResponse('index')

def show (request):
  return HttpResponse('show')

def add (request):
  return HttpResponse('add')

def update (request):
  return HttpResponse('update')

def delete (request):
  return HttpResponse('delete')