from django.db import models
from django.contrib.auth.models import User
from posts.models import Post

class Comment(models.Model):
  text = models.TextField(blank=False)
  created_at = models.DateField(auto_now_add=True, verbose_name="Дата создания")
  author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name="Автор")
  post = models.ForeignKey(Post, on_delete=models.CASCADE, verbose_name="Пост")

  class Meta: 
    verbose_name_plural = 'Комментарии'
    verbose_name = 'Комментарий' 
    ordering = ['-created_at']
