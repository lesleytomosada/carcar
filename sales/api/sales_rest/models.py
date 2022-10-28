from django.db import models

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=50)

    def __str__(self):
        return self.vin


class Salesperson(models.Model):
    name1 = models.CharField(max_length=50)
    employee_number = models.BigIntegerField()

    def __str__(self):
        return self.name1



class Customer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class SalesHistory(models.Model):
    sales_person = models.ForeignKey(
        Salesperson,
        related_name= "sales_person",
        on_delete= models.PROTECT,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.PROTECT
    )


    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.PROTECT
    )

    price = models.DecimalField(max_digits=10, decimal_places=3)

    def __str__(self):
        return f'{self.sales_person}, {self.automobile}'
