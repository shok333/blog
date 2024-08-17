from django.urls import path
from .views import index, show, update, delete, add

urlpatterns = [
    path('', index),
    path('show', show),
    path('add', add),
    path('update', update),
    path('delete', delete),
]