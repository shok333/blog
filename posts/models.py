from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
  title = models.CharField(blank=False, max_length=100, verbose_name="Заголовок")
  content = models.JSONField(blank=False, verbose_name="Тело поста")
  created_at = models.DateField(auto_now_add=True, verbose_name="Дата создания")
  author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name="Автор")

  class Meta: 
    verbose_name_plural = 'Посты'
    verbose_name = 'Пост' 
    ordering = ['-created_at']
