import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Career from 'App/Models/Career';
export default class CareersController {



    public async index( {view}:HttpContextContract){

        const careers=await Career.all()

       return view.render('dashboard/career',{careers});
 }



 
 public async viewCareer( {view}:HttpContextContract){

    const career=await Career.first()

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


   return response.redirect().toRoute('dashCareer')

 }


}
