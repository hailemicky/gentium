 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
 import Application from 'App/Models/Application';


export default class ApplicationsController {



    public async apply({request,response,view}:HttpContextContract){
    
        const data= request.all();
    
        try{
    
       await Application.create(data);
    
        }
    
        catch(error){
    
            console.log(error)
    
            response.redirect().back()
    
    
    
       }
    
    
       return view.render('success_apply')
    
     }


     public async viewApplicants( {view}:HttpContextContract){

        const applicants=await Application.all()
    
       return view.render('dashboard/view_applicants',{applicants});
    }
}
