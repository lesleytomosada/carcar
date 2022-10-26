from django.contrib import admin

from .models import AutomobileVO, Customer, Salesperson, SalesHistory


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass


@admin.register(Salesperson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass


@admin.register(SalesHistory)
class SalesHistoryAdmin(admin.ModelAdmin):
    pass


