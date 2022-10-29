# CarCar
## Getting Started
* Step - 1 : Fork This Repo / then clone the forked repo using git clone (url of http)
* Step - 2 : Open the cloned repo - cd into repo then maybe use `code . ` in terminal
* Step - 3 : After it is opened, you may then look around
* Step - 4 : In terminal run `docker volume create beta-data`, then `docker compose up --build`, this will create all docker containers required to run the application
* Step - 5 : You can now open localhost:3000 to use said application
* Step - 6 : Create an automobile by first going to Inventory -> Create a Manufacturer
* Step - 7 : Enter the name of your favorite car manufacturer and click submit
* Step - 8 : Navigate to Inventory -> Create a Model and enter your favorite car model, find a url for a picture of that car (WARNING: must be less than 200 characters), select the manufacturer just created, and click submit
* Step - 9 : Navigate to Inventory -> Create an Automobile and enter a VIN, color, year, and pick the model you just created. 
* Step - 10 : Keep reading to learn more about the Inventory API and Service and Sales Microservices! Have fun! 

Team:

* Lesley Tomosada - Service
* Tyler Dempsey- Sales

## Design
![Diagram](ghi/app/public/carcardiagram.png)

## Features

* Create & List Manufacturers
* Create & List Vehicle Models
* Create & List Automobiles in the Inventory
* Create Technicians
* Create, List, Delete, and mark as complete Appointments
* The appointments list page will will filter out any already completed appointments and also show if the car had been sold by us as indicated with the VIP section.
* Search for past Services by VIN
* Create sales person
* Create potential customers
* Create a sales record and list all sales
* Select a sales person from a drop down list and view detail of their sales

## Service Microservice
The service microservice is composed of 3 models - Service Appointment, Technician, and AutomobileVO.
The technician model has fields of name and employee number. The Service Appointment model has the fields of vin, owner name, date and time, technician(which is a foreign key to the technician model), service reason, vip, and completed. The automobileVO model has the properties of vin and import_href.A poller was setup to poll data from the inventory API to the service microservice into the automobileVO. 

The services microservice has two forms that use POST, the create a technician and create a service appointment. The service appointment list and history both use GET, and the service appointment also uses DELETE. The service appointment form is filtered to only show current, pending appointments and allows the user to mark an appointment as cancelled or completed. The service appointment list will also mark an appointment as VIP with a * if the car was purchased from the dealership's inventory. The service list history is a list of all service appointments. There is a search bar at top that allows the user to search for appointments by a specific VIN. 

Create a technician at Service -> Create a Technician and a few service appointments at Service -> Create a Service Appoint to play around with the functionality of the microservice. 


## Sales Microservice
The Sales API is a microservice that consists in its own bounded content to provide the user with an interface that allows the tracking of the sales employees and their indvidual sales, customer information, and previous sale records. To do this I thought it would be best to build some models and views to interact with the database and then build out the frontend with 5 unique pages handling the creation and listing of various components.

The Backend:

The backend consists of 4 main models, AutomobileVo, Salesperson, Customer and SalesHistory and then views to handle the 5 main http requests for each sales person, sale and customer.

Integration Point: 
The integration point between the sales api and the inventory api is handled by the poller.py and AutomobileVO class.

Frontend:

The user interface was built using React and has the following pages which you can access from the navigation bar, Add Sales Person, List Sales Person, Add Potential Customer, List Sales History, and Create Sales record.

Challenges:

Throughout this project I achieved a greater understanding of how the frontend and backend work together, however in the future I would take more time to plan out my approach to the project. For example, what do I want the user to experience, what is that page called, how does it look? I built this project backend to front, making decisions on naming, style and sometimes functionality as I went and ran into errors. I feel like if I would have spent more time in the beginning imagining front-end to back-end while also jotting down some rules for myself that I would like to follow when it comes to naming variables I could have saved myself a lot of time chasing errors.

## Service Overview

The service API tracks service appointments for cars and owners

Technician Tracking: http://localhost:3000/technician/new/

A form allows a user to enter a technician's identification details like name and employee number. This form is accessible through the nav bar.

Appointment Tracking: http://localhost:3000/serviceappointment/list , http://localhost:3000/serviceappointment/new/

A form allows a service advisor to enter the details of a vehicle and it's customer, such as: VIN, customer name, date/time of appointment, technician assigned, and reason for visit. This form is accessible through the nav bar.

The service section of the app shows a list of appointments, including all of the details related to the appointment. The list also includes the option to cancel an appointment or finish it (need to look up some details on how to handle this).

Service History: http://localhost:3000/serviceappointment/history

Within the service app is also the ability to track a car's service history by VIN number. The list view for this functionality is identical to the appointment tracking view, but shows appointments for a specific car both, both past and present.

### Service Endpoints
#### Technicians

Action | Method | URL
--- | --- | ---
List Technicians | GET | http://localhost:8080/api/technicians/
Create a new technicnan |POST|	http://localhost:8080/api/technicians/

This can be used as a sample to create technician data via Insomnia, if needed. 

**Create a New Technician**
```
{
    "name": "Mickey Mouse",
    "employee_number": 1
}
```

#### Service Appointments
Action | Method | URL
--- | --- | ---
List Appointments | GET | http://localhost:8080/api/serviceappointments/
Create a new service appointment |POST|	http://localhost:8080/api/serviceappointments/
Update a service appointment|PUT|http://localhost:8080/api/serviceappointments/:id/
Delete a service appointment|DELETE|http://localhost:8080/api/serviceappointments/:id/

This can be used as a sample to create service appointment data via Insomnia, if needed. 

**Create a New Service Appointment**
```
{
        "vin": "1C3CC5FB2A35425",
        "owner_name": "Spongebob Squarepants",
        "date_and_time": "2022-10-25T05:35:24+00:00",
        "technician":  1,
        "service_reason": "Oil Change",
        "is_vip": false,
        "is_completed": false
    }
```


## Sales Overview

The Sales Api allows you to track customers, sales made, as well as adding and search old and new sales

Sales API Overview

New Customer: http://localhost:3000/customers/

Ability to add a new customer to the system

New Sales Representative: http://localhost:3000/salespersons/create/

Add new employees to the system

New Sales: http://localhost:3000/salespersons/

Keep track of new sales being made.

Keep track of sales done by each employee.

All Sales: http://localhost:3000/saleshistory/

Keep track of all the sales done.

### Sales Endpoints
#### Sales and Sales people
Action | Method | URL
--- | --- | ---
List sales people | GET | http://localhost:8090/api/salespersons/
Create a new sale person |POST|	http://localhost:8090/api/salespersons/
Get a specific sale |GET| http://localhost:8090/api/sales/:id/
Update a specific sale |PUT| http://localhost:8090/api/sales/:id/
Delete a specific sale |DELETE| http://localhost:8090/api/sales/:id/
List of all Sales |GET| http://localhost:8090/api/sales
Create a new sale |POST| http://localhost:8090/api/sales/

These can be used as post samples to create sales data via Insomnia, if needed.

**Create a new Sales Person**

```
{
    "name1": "your name",
	"employee_number": 1
}

 ```

**Create a Sale**

```
{
	"price": 1000000.0,
	"automobile": 1,
	"sales_person": 1,
	"customer": 1
}
```


## Inventory API Overview:
The Inventory API allows you to add new vehicles, view all available vehicles, add and view manufacturers, as well as add and view models.

New Manufacturer: http://localhost:3000/manufacturers/new/

Add a new car brand.

All Manufacturers: http://localhost:3000/manufacturers/

View all car brands in the database.

New Vehicle Model: http://localhost:3000/models/new/

Add a new vehicle model

All Models: http://localhost:3000/models/

View all vehicle models

New Automobile: http://localhost:3000/automobiles/new/

Add a new car that comes in.

All Automobiles: http://localhost:3000/automobiles/

View all the Cars available in the dealership.

### Inventory Endpoints
#### Manufacturers
Action | Method | URL
--- | --- | ---
List manufacturers | GET | http://localhost:8100/api/manufacturers/
Create a manufacturer|POST|	http://localhost:8100/api/manufacturers/
Get a specific manufacturer|GET|http://localhost:8100/api/manufacturers/:id/
Update a specific manufacturer|PUT|	http://localhost:8100/api/manufacturers/:id/
Delete a specific manufacturer|DELETE|http://localhost:8100/api/manufacturers/:id/

These can be used as samples to create manufacturer data via Insomnia, if needed. 

**Create or Update a Manufacturer**

Only the name is required to create or update the manufacturer: 

```
{
  "name": "Honda"
}
```

#### Models
Action | Method | URL
--- | --- | ---
List models|GET|http://localhost:8100/api/models/
Create a model|POST|http://localhost:8100/api/models/
Get a specific model|GET|http://localhost:8100/api/models/:id/
Update a specific model|PUT|http://localhost:8100/api/models/:id/
Delete a specific model|DELETE|http://localhost:8100/api/models/:id/

These can be used as samples to create models data via Insomnia, if needed. 

**Create a Model**

Creating a model requires the name, a picture url, and the manufacturer id. 
```
{
  "name": "Civic",
  "picture_url": "https://file.kelleybluebookimages.com/kbb/base/evox/CP/15455/2021-Honda-Civic-front_15455_032_1984x763_BS_cropped.png",
  "manufacturer_id": 1
}
```

**Update a Model**

Name and/or picture can be used to update the model. 
```
{
  "name": "Civic",
  "picture_url": "https://s.aolcdn.com/os/ab/_cms/2022/10/19200114/Honda-Civic-Sport-Touring.jpg",
}
```

#### Automobiles
Action | Method | URL
--- | --- | ---
List automobiles|GET|http://localhost:8100/api/automobiles/
Create an automobile|POST|http://localhost:8100/api/automobiles/
Get a specific automobile|GET|http://localhost:8100/api/automobiles/:vin/
Update a specific automobile|PUT|http://localhost:8100/api/automobiles/:vin/
Delete a specific automobile|DELETE|http://localhost:8100/api/automobiles/:vin/

These can be used as samples to create automobile data via Insomnia, if needed. 

**Create an Automobile**

Creating an automobile requires color, year, vin, and model_id. 
```
{
  "color": "blue",
  "year": 2012,
  "vin": "3TMMU4FN8CM049190",
  "model_id": 1
}
```

**Updating an Automobile**

The color and/or year can be used to update the model. 
```
{
  "color": "blue",
  "year": 2011
}
```