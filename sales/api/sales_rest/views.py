from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import AutomobileVO, Customer, Salesperson, SalesHistory
import json

from .models import (
    AutomobileVO,
    Customer,
    Salesperson,
    SalesHistory,
)

##########################  ENCODERS ##################################
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href",
        "id"
        ]



class SalesPersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "id",
        "name1",
        "employee_number"
        ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
        "id",
        ]

class SalesHistoryEncoder(ModelEncoder):
    model = SalesHistory
    properties = [
        "price",
        "automobile",
        "sales_person",
        "customer",
        "id"
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder()

    }


class SalesHistoryDetailEncoder(ModelEncoder):
    model = SalesHistory
    properties = [
        "automobile",
        "sales_person",
        "customer",
        "price",
        "id"
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }

############################ SALES PERSON #######################################

@require_http_methods(["GET", "POST"])
def list_sales_persons(request):
    #This is the code for the "GET" Method
    if request.method == "GET":
        sales_person = Salesperson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder=SalesPersonEncoder
        )
    #This is the code for the "POST" Method
    else:
        content = json.loads(request.body)
        print("THIS IS THE CONTENT")
        print(content)
        try:
            sales_person = Salesperson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create Sales Person, try a different employee number"},
                status=400
            )


@require_http_methods(["GET", "DELETE", "PUT"])
def show_sales_person(request, pk):
    #This is the code for the "GET" Method
    #Q: Should i nest the request into the try
    if request.method == "GET":
        try:
            sales_person = Salesperson.objects.get(id=pk)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
            {"message": "Sales Person does not exist"},
            status_code = 404
            )
    #This is the code for the "DELETE" Method
    elif request.method == "DELETE":
        try:
            sales_person = Salesperson.objects.get(id=pk)
            sales_person.delete()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
            {"message": "Sales Person does not exist"},
            status_code = 404
            )
    #This is the code for the "PUT" Method
    else:
        try:
            content = json.loads(request.body)
            Salesperson.objects.filter(id=pk).update(**content)
            sales_person = Salesperson.objects.get(id=pk)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
            {"message": "Sales Person does not exist"},
            status_code = 404
            )



########################### SALES #########################################

@require_http_methods(["GET", "POST"])
def list_sales(request):
    #This is the code for the "GET" Method
    if request.method == "GET":
        sales_history = SalesHistory.objects.all()
        return JsonResponse(
            {"sales_history": sales_history},
            encoder=SalesHistoryEncoder,
            safe=False
        )
    #This is the code for the "POST" Method
    else:
        content = json.loads(request.body)
        print('LOOOOKKKK HEREE')
        print(content)
    #        Check for Automobile info        #
        try:
            #vin the request set to all of the content in automobileVo
            automobile = content["automobile"]
            print("***********", content)
            help = AutomobileVO.objects.get(automobile=automobile)
            content["automobile"] = help
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
            {"message": "Automobile does not exist"},
            status = 404
            )
        #        Check for Sales Person info       #
        try:
            name1 = content["sales_person"]
            sales_person = Salesperson.objects.get(name1=name1)
            content["sales_person"] = sales_person
        except Salesperson.DoesNotExist:
            return JsonResponse(
            {"message": "Sales Person does not exist"},
            status_code = 404
            )
        #        Check for Customer info        #
        try:
            name = content["customer"]
            customer = Customer.objects.get(name=name)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
            {"message": "Customer does not exist"},
            status_code = 404
            )
        #        Check for Sales History info       #
        sales_history = SalesHistory.objects.create(**content)
        return JsonResponse(
            sales_history,
            encoder=SalesHistoryDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE", "PUT"])
def show_sales(request, pk):
    #This is the code for the "GET" Method
    if request.method == "GET":
        try:
            sales = SalesHistory.objects.get(id=pk)
            return JsonResponse(
                sales,
                encoder=SalesHistoryDetailEncoder,
                safe=False,
            )
        except SalesHistory.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales history"},
                status=400,
            )
    #This is the code for the "DELETE" Method
    elif request.method == "DELETE":
        try:
            count, _ = SalesHistory.objects.filter(id=pk).delete()
            return JsonResponse(
                {"deleted": count > 0}
            )
        except SalesHistory.DoesNotExist:
            return JsonResponse(
                {"message": "Sales Record does not exist"}
            )
    #This is the code for the "PUT" Method
    else:
        content = json.loads(request.body)
        #        Check for Automobile info        #
        try:
            vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Automobile does not exist"},
                status_code = 404
            )
        #        Check for Sales Person info       #
        try:
            name1 = content["sales_person"]
            sales_person = Salesperson.objects.get(name1=name1)
            content["sales_person"] = sales_person
        except Salesperson.DoesNotExist:
            return JsonResponse(
            {"message": "Sales Person does not exist"},
            status_code = 404
            )
        #        Check for Customer info        #
        try:
                name = content["customer"]
                customer = Customer.objects.get(name=name)
                content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
            {"message": "Customer does not exist"},
            status_code = 404
            )
        #        Check for Sales History info       #
        try :
            SalesHistory.objects.filter(id=pk).update(**content)
            sales_history = SalesHistory.objects.get(id=pk)
            return JsonResponse(
            sales_history,
            encoder=SalesHistoryDetailEncoder,
            safe=False
            )
        except SalesHistory.DoesNotExist:
            return JsonResponse(
            {"message": "Sales history does not exist"},
            status=400,
            )



########################### CUSTOMERS ########################################

@require_http_methods(["GET", "POST"])
def list_customers(request):
    #This is the code for the "GET" Method
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder
        )
    #This is the code for the "POST" Method
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create the Customer."},
                status_code = 400
            )


@require_http_methods(["GET", "PUT", "DELETE"])
def show_customer(request, phone_number):
    #This is the code for the "GET" Method
    if request.method == "GET":
        try:
            customer = Customer.objects.get(phone_number=phone_number)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status_code = 400
            )
    #This is the code for the "DELETE" Method
    elif request.method == "DELETE":
        try:
            count, _ = Customer.objects.filter(phone_number=phone_number).delete()
            return JsonResponse(
                {"deleted": count > 0}
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status_code = 400
                )
    #This is the code for the "PUT" Method
    else:
        try:
            content = json.loads(request.body)
            Customer.objects.filter(phone_number=phone_number).update(**content)
            customer = Customer.objects.get(phone_number=phone_number)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            return JsonResponse(
            {"message": "Customer does not exist"},
            status_code = 400
            )
