import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AboutsController {



    public async showAddAbout({view}:HttpContextContract){


 
        
        return view.render('dashboard/add_about')
    
    
     }

}
