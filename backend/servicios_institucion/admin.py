from django.contrib import admin
from .models import Colegio, Pagina_inicio, Red_social, Secciones_educativas, Telefono, Noticia

modelos = [ Colegio, Pagina_inicio, Red_social, Secciones_educativas, Telefono, Noticia ]
# Register your models here.
admin.site.register(modelos)