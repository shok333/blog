from django.db import models
from django.contrib.auth.models import User
from slugify import slugify

class Post(models.Model):
    title = models.CharField(max_length=100, verbose_name="Заголовок")
    content = models.JSONField(verbose_name="Тело поста")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name="Автор")
    slug = models.SlugField(max_length=200, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug and self.title:
            # Создаем уникальный slug на основе заголовка
            base_slug = slugify(self.title, separator='-')

            unique_slug = base_slug
            num = 1
            while Post.objects.filter(slug=unique_slug).exists():
                unique_slug = f"{base_slug}-{num}"
                num += 1
            self.slug = unique_slug

        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = 'Посты'
        verbose_name = 'Пост'
        ordering = ['-created_at']
