from django.contrib import admin
from products.models import Product

# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'price', 'category')
    ordering = ('id',)
    pass