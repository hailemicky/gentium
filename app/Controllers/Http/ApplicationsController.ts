 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
 import Application from 'App/Models/Application';
 import Upload from '@ioc:Adonis/Core/Application'


export default class ApplicationsController {



    public async apply({request,response,view}:HttpContextContract){
    
        const data= request.all();

        const cv = request.file('cv_url')

        console.log(cv)

                if (cv) {


                    await cv.move(Upload.publicPath('cv/uploads')).catch(console.error);

                    try{
    
                        await Application.create(data);
                     
                         }
                     
                         catch(error){
                     
                             console.log(error)
                     
                             response.redirect().back()
                     
                     
                     
                        }


                        return view.render('success_apply')
                    
                }
                    
     
    
    
     
    
     }


     public async viewApplicants( {view}:HttpContextContract){

        const applicants=await Application.all()
    
       return view.render('dashboard/view_applicants',{applicants});
    }
}
