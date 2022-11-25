import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Media from 'App/Models/Media'
import Upload from '@ioc:Adonis/Core/Application'
export default class MediaController {

public async showMedia({view}:HttpContextContract){

    const medias= await Media.query().select('*').orderBy('priority');

    return view.render('dashboard/media',{medias})
    
}

public async addMedia({request,response}:HttpContextContract){
    const file= request.file('file_url')

    try{
        if(file){
            await file.move(Upload.publicPath('Media/uploads')).catch(console.error)
            const media= await Media.create(request.all())
             media.file_url=file.clientName;
            await  media.save();

        }

        return response.redirect().back()

    }
    catch(error){

        console.log(error)
    }

}



public async deleteMedia({params, response}:HttpContextContract){
  
    try{
        const media =await Media.findOrFail(params.id);

        await media.delete();

        return response.redirect().back();
    }

    catch(error)
    {

        console.log(error);
    }
 }

}
