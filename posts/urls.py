from django.urls import path
from .views import index, show, update, delete, PostCreateView

urlpatterns = [
    path('', index),
    path('show', show),
    path('add/', PostCreateView.as_view(), name='add'),
    path('update', update),
    path('delete', delete),
]