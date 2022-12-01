import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User';
export default class AuthController {


     public async registerShow( {view,response, auth}:HttpContextContract){

            if(auth.isLoggedIn)
            {
              return  response.redirect().back()
            }
            return view.render('auth/register');
     }

     
     public async register( {request, response, auth,session}:HttpContextContract){

         const userValidater= schema.create({
            name:schema.string(),
            email: schema.string({trim:true},[rules.email(),rules.unique({table:'users',column:'email'})]),
            password: schema.string({trim:true},[rules.minLength(6)])
         })


         try{

          if(request.input('verification')=='GENTIUM_PASS_321'){
         const data= await request.validate({schema:userValidater})
         const  user =await User.create(data)
         await auth.login(user)

         return response.redirect().toRoute('dashboard')  
          }
          else{

            return response.redirect().back();
          }

         }
         catch(error)
         {          


                console.log(error)
                session.flash('form',error)
                return response.redirect().back()
         }

                
       

    }

     public async loginShow( {auth,response,view}:HttpContextContract){
        if(auth.isLoggedIn)
        {
          return  response.redirect().back()
        }
        return view.render('auth/login')
    } 


    public async login( {request, response, auth, session}:HttpContextContract){
        const {email, password}=request.only(['email','password'])

        try{
            await auth.attempt(email, password)
        }catch(error)
        {
         session.flash('form',error)
         return response.redirect().back()
        }

        return response.redirect().toRoute('dashboard')
            
        
        
            
   }

   public async logout ({auth, response}:HttpContextContract){

    await auth.logout();

    return response.redirect().toRoute('auth.login.show')

   }
   
}
