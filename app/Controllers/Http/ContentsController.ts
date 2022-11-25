import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ContentsController {



    public async showContentManager({view}:HttpContextContract){


        const fs = require('fs');

        let student = { 
            name: 'Mike',
            age: 23, 
            gender: 'Male',
            department: 'Physics',
            car: 'Honda' 
        };
         
        let data = JSON.stringify(student);
        
        
        try{
            fs.writeFileSync('content.json', data);

            fs.readFile('content.json', (err, data) => {
                if (err) throw err;
                let student = JSON.parse(data);
                console.log(student.name);
            });
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


