# Generated by Django 3.1 on 2020-10-16 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('servicios_institucion', '0002_secciones_educativas_titulo'),
    ]

    operations = [
        migrations.AddField(
            model_name='secciones_educativas',
            name='horario',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='secciones_educativas',
            name='jornada',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
