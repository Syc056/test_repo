# Generated by Django 4.2.9 on 2024-03-30 08:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('layout', '0012_rename_background_id_layout_background'),
    ]

    operations = [
        migrations.AddField(
            model_name='layout',
            name='photo_full',
            field=models.ImageField(default='layouts/default.png', upload_to='layouts'),
        ),
    ]