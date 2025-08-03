from django.db import models

# Create your models here.
class Pictures(models.Model):
    title = models.Integer(max_length=100)
    image = models.ImageField(upload_to='photos/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

