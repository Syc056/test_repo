# Generated by Django 5.0.3 on 2024-03-21 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('layout', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='layout',
            name='photo',
            field=models.ImageField(upload_to='layouts'),
        ),
    ]