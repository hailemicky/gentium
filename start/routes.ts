/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

// Front Page Route

Route.get("/", async ({ view }) => {
  return view.render("index");
}).as("index");

Route.get("/about", async ({ view }) => {
  return view.render("about");
}).as("about");

Route.get("/service", async ({ view }) => {
  return view.render("services");
}).as("service");

Route.get("/blog", async ({ view }) => {
  return view.render("blog");
}).as("blog");

Route.get("/projects", async ({ view }) => {
  return view.render("projects");
}).as("projects");

Route.get("/tender", async ({ view }) => {
  return view.render("tender");
}).as("tender");

Route.get("/career", 'CareersController.showCareer').as("career");

Route.get("career/view/:id", "CareersController.viewCareer").as("viewCareer");

Route.get("/career/apply/:id", 'ApplicationsController.showApply').as("applyCareer");

Route.post("career/apply/:id", "ApplicationsController.apply").as('newApplication')

Route.get("/resource", async ({ view }) => {
  return view.render("resource");
}).as("resource");

Route.get("/contact", async ({ view }) => {
  return view.render("contact");
}).as("contact");


Route.get('table', async({view})=>{

  return view.render('test_table')
})

Route.post("login", "auth/AuthController.login").as("auth.login");
Route.get("login", "auth/AuthController.loginShow").as("auth.login.show");

Route.post("register", "auth/AuthController.register").as("auth.register");
Route.get("register", "auth/AuthController.registerShow").as(
  "auth.register.show"
);

Route.get("logout", "auth/AuthController.logout").as("auth.logout");

// Dashboard Route









//Dashboard Career Route

Route.get("career", "CareersController.index")
  .prefix("dashboard")
  .as("dashCareer");
Route.get("career/new", "CareersController.showAddCareer")
  .prefix("dashboard")
  .as("newCareer")
  .middleware("auth");
Route.post("career/new", "CareersController.addCareer")
  .prefix("dashboard")
  .as("addCareer")
  .middleware("auth");

Route.get("/applicants/:job_id", "ApplicationsController.viewApplicants")
    .prefix('dashboard')
    .as('view_applicants')
    .middleware('auth')

Route.get("career/:id","CareersController.showEditCareer")
    .prefix('dashboard')
    .as("showEditCareer")
    .middleware("auth")
Route.post("career/:id","CareersController.editCareer")
      .prefix('dashboard')
      .as("editCareer")
      .middleware("auth")

Route.get("career/delete/:id","CareersController.deleteCareer")
      .prefix('dashboard')
      .as("deleteCareer")
      .middleware("auth")      



   
 

//Dashboard  Route

Route.get("/dashboard", async ({ view }) => {
  return view.render("dashboard/dashboard");
}).as("dashboard").middleware('auth');



  Route.get("/introduction",'ContentsController.showIntroduction').prefix('dashboard').as('showIntroduction').middleware('auth')
  Route.post("/introduction",'ContentsController.updateIntroduction').prefix('dashboard').as('updateIntroduction').middleware('auth')


  Route.get("/about",'ContentsController.showAbout').prefix('dashboard').as('showAbout').middleware('auth')
  Route.post("/about",'ContentsController.updateAbout').prefix('dashboard').as('updateAbout').middleware('auth')



  Route.get("/service",'ContentsController.showService').prefix('dashboard').as('showService').middleware('auth')
  Route.post("/service",'ContentsController.addService').prefix('dashboard').as('addService').middleware('auth')
  Route.get("/service/:id",'ContentsController.deleteService').prefix('dashboard').as('deleteService').middleware('auth')



  Route.get("/team",'ContentsController.showTeam').prefix('dashboard').as('showTeam').middleware('auth')
  Route.post("/team",'ContentsController.addTeam').prefix('dashboard').as('addTeam').middleware('auth')
  Route.get("/team/:id",'ContentsController.deleteTeam').prefix('dashboard').as('deleteTeam').middleware('auth')


  Route.get("/project",'ContentsController.showProject').prefix('dashboard').as('showProject').middleware('auth')
  Route.post("/project",'ContentsController.addProject').prefix('dashboard').as('addProject').middleware('auth')
  Route.get("/project/:id",'ContentsController.deleteProject').prefix('dashboard').as('deleteProject').middleware('auth')

  Route.get("/testimonial",'ContentsController.showTestimonial').prefix('dashboard').as('showTestimonial').middleware('auth')
  Route.post("/testimonial",'ContentsController.addTestimonial').prefix('dashboard').as('addTestimonial').middleware('auth')
  Route.get("/testimonial/:id",'ContentsController.deleteTestimonial').prefix('dashboard').as('deleteTestimonial').middleware('auth')


  Route.get("/partner",'ContentsController.showPartner').prefix('dashboard').as('showPartner').middleware('auth')
  Route.post("/partner",'ContentsController.addPartner').prefix('dashboard').as('addPartner').middleware('auth')
  Route.get("/partner/:id",'ContentsController.deletePartner').prefix('dashboard').as('deletePartner').middleware('auth')

  Route.get("/contact",'ContentsController.showContact').prefix('dashboard').as('showContact').middleware('auth')
  Route.post("/contact",'ContentsController.updateContact').prefix('dashboard').as('updateContact').middleware('auth')

  Route.get("/media",'MediaController.showMedia').prefix('dashboard').as('showMedia').middleware('auth')
  Route.post("/media",'MediaController.addMedia').prefix('dashboard').as('addMedia').middleware('auth')
  Route.get("/media/:id",'MediaController.deleteMedia').prefix('dashboard').as('deleteMedia').middleware('auth')