# Generated by Django 4.0.3 on 2022-10-27 18:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='salesperson',
            old_name='name',
            new_name='name1',
        ),
    ]