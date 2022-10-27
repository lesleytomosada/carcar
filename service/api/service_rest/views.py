from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, ServiceAppointment
import json

# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model=AutomobileVO
    properties=["vin", "import_href"]

class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties=["name","employee_number", "id"]

class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties=["name","employee_number"]

class ServiceAppointmentListEncoder(ModelEncoder):
    model=ServiceAppointment
    properties=["vin", "owner_name", "date_and_time", "technician", "service_reason", "is_vip","is_completed", "id"]

    encoders={"technician":TechnicianDetailEncoder()}

    def get_extra_data(self, o):
        return {
            "technician": o.technician.name
        }




@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians":technicians},
            encoder=TechnicianListEncoder
        )
    else:
        content=json.loads(request.body)
        technician=Technician.objects.create(**content)
        return JsonResponse(technician, encoder=TechnicianListEncoder, safe=False)

@require_http_methods(["GET", "POST"])
def api_list_service_appointments(request):
    if request.method== "GET":
        service_appointments=ServiceAppointment.objects.all()
        print("Hello",service_appointments)
        return JsonResponse({"service_appointments":service_appointments}, encoder=ServiceAppointmentListEncoder, safe=False)
    elif request.method=="POST":
        content=json.loads(request.body)
        try:
            employee_number=content["technician"]
            technician = Technician.objects.get(employee_number=employee_number)
            content["technician"]=technician
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Invalid Technician ID"}, status=400)
        service_appointment=ServiceAppointment.objects.create(**content)
        return JsonResponse(service_appointment, ServiceAppointmentListEncoder, safe= False)

@require_http_methods(["DELETE"])
def api_detail_service_appointments(request, pk):
     if request.method == "DELETE":
        count,_ = ServiceAppointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count>0})
