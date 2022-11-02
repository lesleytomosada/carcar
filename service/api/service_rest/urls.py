from django.urls import path
from .views import api_list_service_appointments, api_detail_service_appointments,api_list_technicians, api_detail_technician

urlpatterns = [
path("technicians/", api_list_technicians, name="api_list_technicians"),
path("technicians/<int:pk>/", api_detail_technician, name="api_detail_technician"),
path("serviceappointments/", api_list_service_appointments, name="api_list_service_appointments"),
path("serviceappointments/<int:pk>/", api_detail_service_appointments, name="api_list_service_appointments")
]