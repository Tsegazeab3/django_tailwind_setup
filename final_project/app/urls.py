from django.urls import path 
from . import views 

urlpatterns = [
    path("home/",views.home, name="home"),
path("home/colorful_button", views.colorful_button, name="colorful_button"),
    path("home/apple_website", views.apple_website, name="apple_website")
]


