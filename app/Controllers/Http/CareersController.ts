import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Career from 'App/Models/Career';
import { string } from '@ioc:Adonis/Core/Helpers';
import Database from '@ioc:Adonis/Lucid/Database'
import { CannotSetVisibilityException, Response } from '@adonisjs/core/build/standalone';
import { DateTime } from 'luxon';
export default class CareersController {



    public async index( {view}:HttpContextContract){

        const careers=await Career.all()

       return view.render('dashboard/career',{careers});
 }


 public async showCareer({view,response}:HttpContextContract){

   
   try{

      // const career = await Database.rawQuery('select * from careers where deadline <= now()');
    const careers = await Career.query().where('deadline', '>=', DateTime.utc().toSQLDate())
      console.log(careers)
      

      return view.render('career',{careers})


   }

   catch(error){

      console.log(error)
      return response.redirect().back();
   }

 }



 
 public async viewCareer( {view,params}:HttpContextContract){
   const carearId=params.id
    const career=await Career.findOrFail(carearId)

   return view.render('view_career',{career});
}


 public async showAddCareer({view}:HttpContextContract){


 
        
    return view.render('dashboard/add_career')


 }


 

 public async addCareer({request,response}:HttpContextContract){
    
    
   const data= request.all();
   

    
    
  /** Cut & Paste Node.js Code **/
  const SocialPost = require("social-post-api"); // Install "npm i social-post-api"

  // Live API Key
  const social = new SocialPost("KFE9X2W-VHJ4H7R-NEXCDYT-NDNQWJH");
  
  const post = await social.post({
    	"post": "Today is a great day!",
    	"platforms": ["linkedin"],
	
  }).catch(console.error);

  console.log(post)
 
    try{
   
   await Career.create(data);

   console.log(response);

    }

    catch(error){

        console.log(error)

        response.redirect().back()



   }


console.log(data)

   return response.redirect().toRoute('dashCareer')

 }



 public async showEditCareer({params,view,response }:HttpContextContract){


   const careerId=params.id;

   try{
      const career = await Career.findOrFail(careerId)

         if(career)
         {
            console.log(career)
            return view.render('dashboard/edit_career', {career})

         }

   }

   catch(error){

      console.log(error);

      return response.redirect().back();
   }

  
        
  

}


public async editCareer({params, request,response}:HttpContextContract){

   const careerId= params.id;
   try{

   const career = await Career.findOrFail(careerId)

      career.job_title= request.input('job_tile');
      career.description = request.input('description');
      career.deadline=request.input('deadline');
   
     await career.save();
   

   }

   catch(error){

      console.log(error)
   }
      return response.redirect().back();
}


public async deleteCareer({params,response}:HttpContextContract){


   const careerId=params.id;

   try{

   const career = await Career.findOrFail(careerId);

   await career.delete();

      
   }
   
   catch(error){
      console.log(error);
   }
   return response.redirect().back();


}



}
