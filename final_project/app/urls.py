from django.urls import path 
from . import views 

urlpatterns = [
    path("", views.city_portal, name="city_portal"),
    path("home/",views.home, name="home"),
    path("home/city_portal", views.city_portal, name="city_portal"),
    path("home/nav_bar", views.nav_bar, name="nav_bar"),
    path("home/colorful_button", views.colorful_button, name="colorful_button"),
    path("home/apple_website", views.apple_website, name="apple_website")
]


