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
Route.get("/dashboard", async ({ view }) => {
  return view.render("dashboard/dashboard");
}).as("dashboard");


Route.get("/test", async ({ view }) => {
  return view.render("test_table");
}).as("test_table");




//dashboard content manager
Route.get("content_manager", "contentsController.showContentManager")
  .prefix("dashboard")
  .as("newContent")
  .middleware("auth");



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



    //Dashboard contact route

    Route.get("contact","ContactsController.showContact").prefix('dashboard').as('newContact').middleware('auth')

//Dashboard Media Route

Route.get("media", "ContentsController.showMediaManager")
  .prefix("dashboard")
  .as("newMedia")
  .middleware("auth");



  Route.get("/content",'ContentsController.showContentManager')

