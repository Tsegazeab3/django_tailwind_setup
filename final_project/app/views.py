from django.shortcuts import render
from time import time

# Create your views here.
def home(request):
    if request.method == "GET":
        return render(request, 'index.html', {'time_stamps': int(time())})
    else:
        print('bad response')
        return None

def city_portal(request):
	if request.method == "GET":
		return render(request, 'city_portal.html', {'time_stamps': int(time())})
	else:
		print('bad response')
		return None


def nav_bar(request):
	if request.method == "GET":
		return render(request, 'nav_bar.html', {'time_stamps': int(time())})
	else:
		print('bad response')
		return None


def colorful_button(request):
	if request.method == "GET":
		return render(request, 'colorful_button.html', {'time_stamps': int(time())})
	else:
		print('bad response')
		return None

def apple_website(request):
    if request.method == "GET":
        return render(request, 'apple_website', {'time_stamps': int(time())})
    else:
        print('bad response')
        return None

