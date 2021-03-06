# Generated by Django 3.1 on 2020-10-15 19:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Colegio',
            fields=[
                ('id_colegio', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('nombre', models.CharField(max_length=100)),
                ('direccion', models.CharField(max_length=100)),
                ('email', models.EmailField(blank=True, default=None, max_length=100, null=True)),
                ('logo', models.ImageField(blank=True, max_length=200, null=True, upload_to='imagen')),
                ('provincia', models.CharField(max_length=50)),
                ('canton', models.CharField(max_length=50)),
                ('parroquia', models.CharField(max_length=10)),
                ('tipo_educacion', models.CharField(max_length=50)),
                ('tipo_unidad', models.CharField(max_length=50)),
                ('zona', models.CharField(max_length=100)),
                ('regimen_escolar', models.CharField(max_length=100)),
                ('educacion', models.CharField(max_length=100)),
                ('nivel_educativo', models.CharField(max_length=50)),
                ('modalidad', models.CharField(max_length=50)),
                ('num_estudiantes', models.IntegerField()),
                ('num_docentes', models.IntegerField()),
                ('codigo_amie', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Telefono',
            fields=[
                ('id_telefono', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('numero', models.CharField(max_length=15)),
                ('id_colegio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='servicios_institucion.colegio')),
            ],
        ),
        migrations.CreateModel(
            name='Secciones_educativas',
            fields=[
                ('id_seccion', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('texto', models.CharField(max_length=500)),
                ('imagen', models.ImageField(blank=True, max_length=200, null=True, upload_to='imagen')),
                ('id_colegio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='servicios_institucion.colegio')),
            ],
        ),
        migrations.CreateModel(
            name='Red_social',
            fields=[
                ('id_red', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('nombre', models.CharField(max_length=15)),
                ('link', models.CharField(max_length=200)),
                ('id_colegio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='servicios_institucion.colegio')),
            ],
        ),
        migrations.CreateModel(
            name='Pagina_inicio',
            fields=[
                ('id_pagina', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('imagen', models.ImageField(blank=True, max_length=200, null=True, upload_to='imagen')),
                ('id_colegio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='servicios_institucion.colegio')),
            ],
        ),
        migrations.CreateModel(
            name='Noticia',
            fields=[
                ('id_noticia', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('texto', models.CharField(max_length=1000)),
                ('imagen', models.ImageField(blank=True, max_length=200, null=True, upload_to='imagen')),
                ('id_colegio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='servicios_institucion.colegio')),
            ],
        ),
    ]
