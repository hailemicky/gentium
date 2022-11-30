import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service';
import Partner from 'App/Models/Partner';
import Project from 'App/Models/Project';
import Testimonial from 'App/Models/Testimonial';

import Team from 'App/Models/Team';
import Media from 'App/Models/Media';

export default class FrontpagesController {

    public async showIndex({view}:HttpContextContract){

      const fs= require('fs');
      try{
        const services= await Service.query().select('*').orderBy('priority')
        const partners= await Partner.query().select('*').orderBy('priority')
        const projects= await Project.query().select('*').orderBy('priority')
        const testimonial= await Testimonial.query().select('*').orderBy('priority')

        const introductionData = fs.readFileSync("introduction.json");
             const introduction = JSON.parse(introductionData);

        const aboutData= fs.readFileSync("about.json")
        const about= JSON.parse(aboutData)     


        return view.render('index',{introduction,about,services,partners,projects, testimonial});
      }
      catch(error)
      {
        console.log(error)
      }


    }

    public async showAbout({view}:HttpContextContract){
      const fs= require('fs');
      try{    


        const aboutData= fs.readFileSync("about.json")
        const about= JSON.parse(aboutData)     
        const teams= await Team.query().select('*').orderBy('priority') ;
        const testimonials= await Testimonial.query().select('*').orderBy('priority');
      return view.render('about',{teams,about, testimonials})
      }

      catch(error)
      {
        console.log(error)
      }


    }

    public async showService({view}:HttpContextContract) {


      try{

        const services= await Service.query().select('*').orderBy('priority')

        return view.render('services',{services})
      }
      catch(error)
      {

        console.log(error)
      }
      
    }


    public async showProject({view}:HttpContextContract) {


      try{

        const projects= await Project.query().select('*').orderBy('priority')

        return view.render('projects',{projects})
      }
      catch(error)
      {

        console.log(error)
      }
      
    }



    public async showMedia({view}:HttpContextContract) {


      try{

        const medias= await Media.query().select('*').orderBy('priority')

        return view.render('resource',{medias})
      }
      catch(error)
      {

        console.log(error)
      }
      
    }

    public async showContact({view}:HttpContextContract){
      const fs = require('fs')
      try{
        const contactData= fs.readFileSync("contact.json")
        const contact= JSON.parse(contactData) 
        
        return view.render('contact',{contact})
      }
      catch(error){

        console.log(error)
      }
    }





}
