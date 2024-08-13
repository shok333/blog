from django.db import models

class User (models.Model):
  name = models.CharField (max_length=100, verbose_name='Имя', blank=False)
  birth_date = models.DateField (verbose_name='Дата рождения', blank=False)
  description = models.TextField (verbose_name='Описание', blank=True)
  car = models.ForeignKey ('Car', on_delete=models.PROTECT, verbose_name='Автомобиль')

  class Meta:
    verbose_name="Пользователь"
    verbose_name_plural="Пользователи"
    ordering=['name']

class Car(models.Model):
  brand = models.CharField (max_length=100, verbose_name='Бренд', blank=False)
  model = models.CharField (max_length=100, verbose_name='Модель', blank=False)

  class Meta:
    verbose_name="Автомобиль"
    verbose_name_plural="Автомобили"
    ordering=['model']