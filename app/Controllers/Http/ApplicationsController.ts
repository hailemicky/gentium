 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
 import Application from 'App/Models/Application';
 import Upload from '@ioc:Adonis/Core/Application'


export default class ApplicationsController {

    public async showApply({params,view}:HttpContextContract){
        const careerId= params.id;
        console.log(careerId)

        return view.render('apply_career',{careerId});

    }

    public async apply({request,response,params,view}:HttpContextContract){
    
      const careerId=params.id;
       console.log(careerId)

        const cv = request.file('cv_url')
        const data= request.all()

        console.log(cv)

                if (cv) {


                    await cv.move(Upload.publicPath('cv/uploads')).catch(console.error);

                    try{
                        
                        const applicant =await Application.create(data);

                            applicant.job_id=careerId;
                          await  applicant.save();
                     
                         }
                     
                         catch(error){
                     
                             console.log(error)
                     
                            return response.redirect().back()
                     
                     
                     
                        }


                        return view.render('success_apply')
                    
                }
                    
     
    
    
     
    
     }


     public async viewApplicants( {view, params}:HttpContextContract){

            const job_id= params.job_id;
        const applicants=await Application.query().where('job_id',job_id)    
       return view.render('dashboard/view_applicants',{applicants});
    }
}
