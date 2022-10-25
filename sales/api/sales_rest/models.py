from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f"{self.vin}"

class Customer(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=25, unique=True)

    def __str__(self):
        return f"{self.name}"

class SalesPerson(models.Model):
    name = models.CharField(max_length=255)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return f"{self.name}"

class SalesRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales_records",
        on_delete=models.PROTECT,
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_records",
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales_records",
        on_delete=models.PROTECT,
    )
    sales_price = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.sales_person}"
