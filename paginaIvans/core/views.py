from django.shortcuts import render, redirect

# Create your views here.
def mostrarIndex(request):
    return render(request, 'core/index.html')