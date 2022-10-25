from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True)

class Technician(models.Model):
    name=models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField()

class ServiceAppointment(models.Model):
    vin=models.CharField(max_length=17)
    owner_name = models.CharField(max_length = 100)
    date_and_time=models.DateTimeField()
    technician = models.ForeignKey(Technician, related_name="technician",on_delete=models.PROTECT,)
    service_reason=models.CharField(max_length=200)
    is_vip=models.BooleanField(default=False)
    is_completed=models.BooleanField(default=False)