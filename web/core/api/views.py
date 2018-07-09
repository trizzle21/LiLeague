from django.shortcuts import render

# Create your views here.


def index(request):
    # Public Landing Page


    return render(request, 'home.html', context)

