# Generated by Django 5.0.3 on 2024-03-23 13:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('layout', '0003_layout_photo_hover_layout_position'),
    ]

    operations = [
        migrations.RenameField(
            model_name='layout',
            old_name='photo_hover',
            new_name='background',
        ),
    ]
