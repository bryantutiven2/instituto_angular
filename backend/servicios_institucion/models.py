from django.db import models

class Colegio(models.Model):
    id_colegio = models.AutoField(primary_key = True, unique=True)
    nombre = models.CharField(max_length= 100)
    direccion = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, default=None, null=True, blank=True)
    logo = models.ImageField(upload_to='imagen', max_length=200, null=True, blank=True)
    provincia = models.CharField(max_length= 50)
    canton = models.CharField(max_length= 50)
    parroquia = models.CharField(max_length= 10)
    tipo_educacion = models.CharField(max_length= 50)
    tipo_unidad = models.CharField(max_length= 50)
    zona = models.CharField(max_length= 100)
    regimen_escolar = models.CharField(max_length= 100)
    educacion = models.CharField(max_length= 100)
    nivel_educativo = models.CharField(max_length= 50)
    modalidad = models.CharField(max_length= 50)
    num_estudiantes = models.IntegerField()
    num_docentes = models.IntegerField()
    codigo_amie = models.CharField(max_length= 50)

class Telefono(models.Model):
    id_telefono = models.AutoField(primary_key = True, unique=True)
    numero = models.CharField(max_length= 15)
    id_colegio = models.ForeignKey(Colegio, on_delete=models.PROTECT, null=True, blank=True)

class Red_social(models.Model):
    id_red = models.AutoField(primary_key = True, unique=True)
    nombre = models.CharField(max_length= 15)
    link = models.CharField(max_length= 200)
    id_colegio = models.ForeignKey(Colegio, on_delete=models.PROTECT, null=True, blank=True)

class Pagina_inicio(models.Model):
    id_pagina = models.AutoField(primary_key = True, unique=True)
    imagen = models.ImageField(upload_to='imagen', max_length=200, null=True, blank=True)
    id_colegio = models.ForeignKey(Colegio, on_delete=models.PROTECT, null=True, blank=True)

class Secciones_educativas(models.Model):
    id_seccion = models.AutoField(primary_key = True, unique=True)
    titulo = models.CharField(max_length= 200, null=True, blank=True)
    jornada = models.CharField(max_length= 10, null=True, blank=True)
    horario = models.CharField(max_length= 100, null=True, blank=True)
    texto = models.CharField(max_length= 500)
    imagen = models.ImageField(upload_to='imagen', max_length=200, null=True, blank=True)
    id_colegio = models.ForeignKey(Colegio, on_delete=models.PROTECT, null=True, blank=True)

class Noticia(models.Model):
    id_noticia = models.AutoField(primary_key = True, unique=True)
    titulo = models.CharField(max_length=250, null=True, blank=True)
    texto = models.CharField(max_length= 1000)
    imagen = models.ImageField(upload_to='imagen', max_length=200, null=True, blank=True)
    id_colegio = models.ForeignKey(Colegio, on_delete=models.PROTECT, null=True, blank=True)