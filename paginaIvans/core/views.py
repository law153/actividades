from django.shortcuts import render, redirect

# Create your views here.
def mostrarIndex(request):
    es_dispositivo_movil = verificar_dispositivo_movil(request)

    context = {'es_dispositivo_movil': es_dispositivo_movil}

    return render(request, 'core/index.html', context)

def verificar_dispositivo_movil(request):
    user_agent = request.META.get('HTTP_USER_AGENT', '').lower()
    return 'mobile' in user_agent