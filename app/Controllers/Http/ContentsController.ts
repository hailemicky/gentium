import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service';
import Team from 'App/Models/Team';
import Upload from '@ioc:Adonis/Core/Application'
import Project from 'App/Models/Project';
import Testimonial from 'App/Models/Testimonial';
import Partner from 'App/Models/Partner';



export default class ContentsController {

     
    

    public async showIntroduction({view, response}:HttpContextContract){
      
       const fs = require('fs');
       
        try {
            // Note that jsonString will be a <Buffer> since we did not specify an
            // encoding type for the file. But it'll still work because JSON.parse() will
            // use <Buffer>.toString().
            const jsonString = fs.readFileSync("introduction.json");
            const introduction = JSON.parse(jsonString);
            console.log(introduction.introTitle);
            return view.render('dashboard/introduction',{introduction})
          } catch (err) {
            console.log(err);
            return response.redirect().back();
          }
          


       
    }


    public async updateIntroduction({request,response}:HttpContextContract){
        const fs = require('fs');
        
        let introduction = request.all();


        let data = JSON.stringify(introduction);

        try{
            fs.writeFileSync('introduction.json', data);

            fs.readFile('introduction.json', (err, data) => {
                if (err) throw err;
                let introduction = JSON.parse(data);
                console.log(introduction);
              
            });


            return response.redirect().toRoute('showIntroduction')
        }
        catch(error){

            console.log(error);
        }



        

    }



    public async showAbout({view, response}:HttpContextContract){
      
        const fs = require('fs');
       
        
         try {
             // Note that jsonString will be a <Buffer> since we did not specify an
             // encoding type for the file. But it'll still work because JSON.parse() will
             // use <Buffer>.toString().
             const jsonString = fs.readFileSync("about.json");
             const about = JSON.parse(jsonString);
             console.log(about.title);
             return view.render('dashboard/about',{about})
           } catch (err) {
             console.log(err);
             return response.redirect().back();
           }
           
 
 
        
     }
 
 
     public async updateAbout({request,response}:HttpContextContract){
         const fs = require('fs');
         
         let about = request.all();
 
 
         let data = JSON.stringify(about);
 
         try{
             fs.writeFileSync('about.json', data);
 
             fs.readFile('about.json', (err, data) => {
                 if (err) throw err;
                 let about = JSON.parse(data);
                 console.log(about);
               
             });
 
 
             return response.redirect().toRoute('showAbout')
         }
         catch(error){
 
             console.log(error);
         }
 
 
 
         
 
     }





     public async showService({view}:HttpContextContract){
      
      const services= await Service.query().select('*').orderBy('priority');
        return view.render('dashboard/service',{services})
 
        
     }
 
 
     public async addService({request,response}:HttpContextContract){
       
        
        try{
            await Service.create(request.all())

         return response.redirect().back();
        }

        catch(error){

            console.log(error)
        }


 
     }


     public async deleteService({params, response}:HttpContextContract){

        try{
            const service =await Service.findOrFail(params.id);

            await service.delete();

            return response.redirect().back();
        }

        catch(error)
        {

            console.log(error);
        }
     }



     public async showTeam({view}:HttpContextContract){
      
        const teams= await Team.query().select('*').orderBy('priority');
          return view.render('dashboard/team',{teams})
   
          
       }
   
   
       public async addTeam({request,response}:HttpContextContract){
         
        const pic_url = request.file('pic_url')


          try{


            if(pic_url){
                await pic_url.move(Upload.publicPath('Team/uploads')).catch(console.error)
                const team= await Team.create(request.all())
                 team.pic_url=pic_url.clientName;
                await  team.save();
            }

           
              
                            
                            
                            
              

              return response.redirect().back();

  
          
          }
  
          catch(error){
  
              console.log(error)
          }
  
  
   
       }
  
  
       public async deleteTeam({params, response}:HttpContextContract){
  
          try{
              const team =await Team.findOrFail(params.id);
  
              await team.delete();
  
              return response.redirect().back();
          }
  
          catch(error)
          {
  
              console.log(error);
          }
       }
 
 

       public async showProject({view}:HttpContextContract){
      
        const projects= await Project.query().select('*').orderBy('priority');
          return view.render('dashboard/project',{projects})
   
          
       }
   
   
       public async addProject({request,response}:HttpContextContract){
         
        const pic_url = request.file('pic_url')


          try{


            if(pic_url){
                await pic_url.move(Upload.publicPath('Project/uploads')).catch(console.error)
                const project= await Project.create(request.all())
                 project.pic_url=pic_url.clientName;
                await  project.save();
            }

           
              
                            
                            
                            
              

              return response.redirect().back();

  
          
          }
  
          catch(error){
  
              console.log(error)
          }
  
  
   
       }
  
  
       public async deleteProject({params, response}:HttpContextContract){
  
          try{
              const project =await Project.findOrFail(params.id);
  
              await project.delete();
              
  
              return response.redirect().back();
          }
  
          catch(error)
          {
  
              console.log(error);
          }
       }
 

       public async showTestimonial({view}:HttpContextContract){

        const testimonials= await Testimonial.query().select('*').orderBy('priority');


        return view.render('dashboard/testimonial',{testimonials})
       }

       public async addTestimonial({request,response}:HttpContextContract){

        try{
            await Testimonial.create(request.all())

            return response.redirect().back();
        }

        catch(error)
        {
            console.log(error)
        }

       }

       public async deleteTestimonial({params, response}:HttpContextContract){

        try{

            const testimonial= await Testimonial.findOrFail(params.id)

            await testimonial.delete()

            return response.redirect().back()
        }

        catch(error){

            console.log(error)
        }


       }


       public async showPartner({view}:HttpContextContract){

        const partners= await Partner.query().select('*').orderBy('priority');


        return view.render('dashboard/partner',{partners})
       }

       public async addPartner({request,response}:HttpContextContract){

        const pic_url=request.file('pic_url')
       
       
        try{

            if(pic_url){
                await pic_url.move(Upload.publicPath('Partner/uploads')).catch(console.error)
                const partner= await Partner.create(request.all())
                 partner.pic_url=pic_url.clientName;
                await  partner.save();
            }
          
            return response.redirect().back();
        }

        catch(error)
        {
            console.log(error)
        }

       }

       public async deletePartner({params, response}:HttpContextContract){

        try{

            const partner= await Partner.findOrFail(params.id)


         

            await partner.delete()

            return response.redirect().back()
        }

        catch(error){

            console.log(error)
        }


       }


       public async showContact({view, response}:HttpContextContract){
      
        const fs = require('fs');
       
        
         try {
             // Note that jsonString will be a <Buffer> since we did not specify an
             // encoding type for the file. But it'll still work because JSON.parse() will
             // use <Buffer>.toString().
             const jsonString = fs.readFileSync("contact.json");
             const contact = JSON.parse(jsonString);
             console.log(contact);
             return view.render('dashboard/contact',{contact})
           } catch (err) {
             console.log(err);
             return response.redirect().back();
           }
           
 
 
        
     }
 
 
     public async updateContact({request,response}:HttpContextContract){
         const fs = require('fs');
         
         let contact = request.all();
 
 
         let data = JSON.stringify(contact);
 
         try{
             fs.writeFileSync('contact.json', data);
 
             fs.readFile('contact.json', (err, data) => {
                 if (err) throw err;
                 let contact = JSON.parse(data);
                 console.log(contact);
               
             });
 
 
             return response.redirect().toRoute('showContact')
         }
         catch(error){
 
             console.log(error);
         }
 
 
 
         
 
     }








    public async showContentManager({view}:HttpContextContract){


        const fs = require('fs');

        let student = [
            {
                name: 'Mike',
                age: 23, 
                gender: 'Male',
                department: 'Physics',
                car: 'Honda',
                newProperty:"" 
            },
            {
                name: 'Haile',
                age: 23, 
                gender: 'Male',
                department: 'Physics',
                car: 'Honda',
                newProperty:"" 
            }
        ] ;
           
        
         
        let data = JSON.stringify(student);
        
        
        try{
            fs.writeFileSync('content.json', data);

            fs.readFile('content.json', (err, data) => {
                if (err) throw err;
                let student = JSON.parse(data);
                console.log(student)
              
            });


            student[0].name= 'haile';
            student[0].newProperty="test";

            fs.writeFileSync('content.json', JSON.stringify(student))

            console.log(student);

        }
        catch(error)
        {
            console.log(error);
        }
        
        return view.render('dashboard/content_manager')
    
    
    }

    public async showMediaManager({view}:HttpContextContract){


 
        
            return view.render('dashboard/media_manager')
        
        
         }
    
     }


