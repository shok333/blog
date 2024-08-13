from django.db import models

class Bb(models.Model):
  title = models.CharField(max_length=500, verbose_name='Товар')
  content = models.TextField()
  price = models.FloatField()
  published = models.DateTimeField(auto_now_add=True, db_index=True)

  class Meta: 
    verbose_name_plural = 'Объявления'
    verbose_name = 'Объявление' 
    ordering = ['-published']
