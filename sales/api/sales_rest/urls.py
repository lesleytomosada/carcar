from django.urls import path
from .views import automobile_vo_list, customer_delete, customer_list, sales_person_list, sales_person_details, sales_record_list, auto_vo_delete

urlpatterns = [
    path('sales-persons/', sales_person_list, name="sales_person_list"),
    path('sales-persons/<int:pk>/', sales_person_details, name="sales_person_details"),
    path('customers/', customer_list, name="customer_list"),
    path('customers/<int:pk>/', customer_delete, name="customer_delete"),
    path('sales-records/', sales_record_list, name="sales_record_list"),
    path('automobileVO/', automobile_vo_list, name="automobile_vo_list"),
    path('automobileVO/<int:pk>/', auto_vo_delete, name="automobile_vo_delete"),
]
