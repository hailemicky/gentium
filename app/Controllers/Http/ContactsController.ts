import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ContactsController {

    public async showContact({view}:HttpContextContract){


 
        
        return view.render('dashboard/contact')
    
    
    }

}
