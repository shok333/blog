from rest_framework import routers
from .views import PostsView
from django.urls import path

# postsRouter = routers.SimpleRouter()
# postsRouter.register(r'posts', PostsViewSet)

urlpatterns = [
  path('posts', PostsView.as_view()),
]