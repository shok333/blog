from rest_framework import routers
from .views import PostsViewSet
 
postsRouter = routers.SimpleRouter()
postsRouter.register(r'posts', PostsViewSet)
