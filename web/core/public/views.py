from django.shortcuts import render


def home(request):
    # Public Landing Page
    return render(request, 'public/home.html', context={})

