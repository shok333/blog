from django.contrib import admin
from .models import Car, User

class UserAdmin(admin.ModelAdmin): 
  list_display = ('name', 'birth_date') 

class CarAdmin(admin.ModelAdmin): 
  list_display = ('brand', 'model') 

admin.site.register(User, UserAdmin)
admin.site.register(Car, CarAdmin)
