# CarCar
##Getting Started
Step - 1 : Fork This Repo / then clone the forked repo using git clone (url of http)
Step - 2 : Open the cloned repo - cd into repo then maybe use code . in terminal
Step - 3 : After it is opened, you may then look around
Step - 4 : In terminal run docker volume create beta-data, then docker compose up --build, this will create all docker containers required to run the application
Step - 5 : You can now open localhost:3000 to use said application
Step - 6 : Go to ## Design to read about how this application is used.

Team:

* Lesley Tomosada - Service
* Tyler Dempsey- Sales

# Features

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

# Sales microservice
The Sales API is a microserve that consists in its own bounded content to provide the user with an interface that allows the tracking of the sales employees and their indvidual sales, customer information, and previous sale records. To do this I thought it would be best to build some models and views to interact with the database and then build out the frontend with 5 unique pages handling the creation and listing of various components.
The Backend:
The backend consists of 4 main models, AutomobileVo, Salesperson, Customer and SalesHistory and then views to handle the 5 main http requests for each sales person, sale and customer.
Integration Point: The integration point between the sales api and the inventory api is handled by the poller.py and AutomobileVO class.
Frontend:
The user interface was built using React and has the following pages which you can access from the navigation bar, Add Sales Person, List Sales Person, Add Potential Customer, List Sales History, and Create Sales record.
Challenges:
Throughout this project I achieved a greater understanding of how the frontend and backend work together, however in the future I would take more time to plan out my approach to the project. For example, what do I want the user to experience, what is that page called, how does it look? I built this project backend to front, making decisions on naming, style and sometimes functionality as I went and ran into errors. I feel like if I would have spent more time in the beginning imagining front-end to back-end while also jotting down some rules for myself that I would like to follow when it comes to naming variables I could have saved myself a lot of time chasing errors.
