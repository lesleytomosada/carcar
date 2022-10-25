from django.urls import path
from .views import (
    list_sales_persons,
    show_sales_person,
    list_sales,
    show_sales,
    list_customers,
    show_customer,
)

urlpatterns = [
    path("salespersons/", list_sales_persons, name="list_sales_persons"),
    path("salespersons/<int:pk>/", show_sales_person, name="show_sales_person"),
    path("sales/", list_sales, name="list_sales"),
    path("sales/<int:pk>/", show_sales, name="show_sales"),
    path("customers/", list_customers, name="list_customers"),
    path('customers/<int:pk>/', show_customer, name="show_customer"),
]
