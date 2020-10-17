from django.urls import path
from django.conf.urls import include
from rest_framework.urlpatterns import format_suffix_patterns
from servicios_institucion import views

urlpatterns = [
    path('get_colegio/<str:id>/', views.ColegioViewSet.as_view()),
    path('get_telefono/', views.TelefonoViewSet.as_view()),
    path('get_redes/', views.RedViewSet.as_view()),
    path('get_pagina/', views.PaginaViewSet.as_view()),
    path('get_noticia/', views.NoticiaViewSet.as_view()),
    path('get_secciones/', views.SeccionViewSet.as_view()),
    path('enviar_correo/', views.EnviarCorreo.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)