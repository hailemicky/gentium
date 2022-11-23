import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ContentsController {



    public async showContentManager({view}:HttpContextContract){


 
        
        return view.render('dashboard/content_manager')
    
    
    }

        public async showMediaManager({view}:HttpContextContract){


 
        
            return view.render('dashboard/media_manager')
        
        
         }
    
     }


