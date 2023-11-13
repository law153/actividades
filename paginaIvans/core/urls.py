from django.urls import path,include
from .views import mostrarIndex

urlpatterns=[
    path('',mostrarIndex,name="mostrarIndex"),
]