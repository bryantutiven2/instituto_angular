# Generated by Django 3.1 on 2020-10-16 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('servicios_institucion', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='secciones_educativas',
            name='titulo',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]