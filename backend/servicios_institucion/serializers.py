from .models import Colegio, Pagina_inicio, Red_social, Secciones_educativas, Telefono, Noticia
from rest_framework import serializers

class ColegioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colegio
        fields = '__all__'

class PaginaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pagina_inicio
        fields = '__all__'

class NoticiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Noticia
        fields = '__all__'

class RedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Red_social
        fields = '__all__'

class TelefonoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Telefono
        fields = '__all__'

class SeccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Secciones_educativas
        fields = '__all__'