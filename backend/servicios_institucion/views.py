from django.http import HttpResponse, Http404
from django.db.models import Q
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from django.conf import settings
from django.core.mail import send_mail
from .models import Colegio, Pagina_inicio, Red_social, Secciones_educativas, Telefono, Noticia
from .serializers import ColegioSerializer, PaginaSerializer, RedSerializer, SeccionSerializer, TelefonoSerializer, NoticiaSerializer

class ColegioViewSet(APIView):
    def get_object(self, id):
        try:
            return Colegio.objects.get(id_colegio = id)
        except Colegio.DoesNotExist:
            raise Http404
    def get(self, request, id, format=None):
        colegioObj = self.get_object(id)
        serializer = ColegioSerializer(colegioObj)
        return Response(serializer.data)

class PaginaViewSet(APIView):
    def get(self, request, format=None):
        paginaObj = Pagina_inicio.objects.all()
        serializer = PaginaSerializer(paginaObj, many=True)
        return Response(serializer.data)

class RedViewSet(APIView):
    def get(self, request, format=None):
        redObj = Red_social.objects.all()
        serializer = RedSerializer(redObj, many=True)
        return Response(serializer.data)

class SeccionViewSet(APIView):
    def get(self, request, format=None):
        seccionObj = Secciones_educativas.objects.all()
        serializer = SeccionSerializer(seccionObj, many=True)
        return Response(serializer.data)

class TelefonoViewSet(APIView):
    def get(self, request, format=None):
        telefonoObj = Telefono.objects.all()
        serializer = TelefonoSerializer(telefonoObj, many=True)
        return Response(serializer.data)

class NoticiaViewSet(APIView):
    def get(self, request, format=None):
        noticiaObj = Noticia.objects.all()
        serializer = NoticiaSerializer(noticiaObj, many=True)
        return Response(serializer.data)

class EnviarCorreo(APIView):
    def post(self, request, format=None):
        print(request.data)
        subject = 'Página de Contacto Institución Educativa Provincia de Los Ríos'
        nombre = request.data['nombre']
        correo = request.data['correo']
        texto = request.data['mensaje']
        message = 'La persona con nombre: ' + nombre +'\n'\
                  'Con correo:  ' + correo +'\n'\
                  'Le acaba de enviar el siguiente mensaje: ' + texto
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [correo, ]
        send_mail(subject, message, email_from, recipient_list)
        data = { 'resp': True}
        return Response(data, status=status.HTTP_201_CREATED)