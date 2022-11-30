import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class MailController {

    public async sendRFQ({request, response,session}:HttpContextContract){

        try{

        //    const data= request.all()
           await Mail.send((message) => {
            message
              .from(request.input('email'))
              .to('sales@gentiumci.com')
              .subject("Requesting for a quotation -" +  request.input('name'))
              .htmlView('emails/RFQ', { name: request.input('name'),email:request.input('email'), message:request.input('message') , phone: request.input('tel')})
          })

          session.flash({
            notification: {
                type: 'sent-message',
                message: 'Message Sent Succesfully'
            }
        })
        return response.redirect().back()

           
        }

        catch(error){

            console.log(error)
            return response.redirect().back()

            
            
        }
    }




    public async sendContact({request,response , session}:HttpContextContract){

        try{

        //    const data= request.all()
           await Mail.send((message) => {
            message
              .from(request.input('email'))
              .to('info@gentiumci.com')
              .subject(  request.input('subject'))
              .htmlView('emails/contact', { name: request.input('name'),email:request.input('email'), message:request.input('message') })
          })

          session.flash({
            notification: {
                type: 'sent-message',
                message: 'Message Sent Succesfully'
            }
        })
        return response.redirect().back()


           
        }

        catch(error){

            console.log(error)
            return response.redirect().back()

            
            
        }
    }
}
