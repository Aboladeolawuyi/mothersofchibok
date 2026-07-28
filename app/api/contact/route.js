import { Resend } from "resend";

const resend = new Resend("re_NmbtcMxJ_LCCwfVb8W9fjEdGfqeDRLVvA");


export async function POST(request) {

  try {

    const data = await request.json();

    const {
      name,
      email,
      contribution,
      message
    } = data;


    const emailResponse = await resend.emails.send({

      from:
        "Chibok Groundnut Initiative <onboarding@resend.dev>",

      to:
        [
          "kachi.benson@jbmultimediagroup.com"
        ],

      subject:
        `New Partner Request - ${contribution}`,

      reply_to:
        email,

      html:

      `
      <!DOCTYPE html>

      <html>

      <body>

      <h2>
      New Support / Partnership Request
      </h2>


      <hr/>


      <p>
      <strong>Name:</strong>
      ${name}
      </p>


      <p>
      <strong>Email:</strong>
      ${email}
      </p>


      <p>
      <strong>Contribution Type:</strong>
      ${contribution}
      </p>


      <p>
      <strong>Message:</strong>
      </p>


      <p>
      ${message}
      </p>


      </body>

      </html>
      `

    });


    return Response.json({
      success:true,
      data:emailResponse
    });


  }

  catch(error){


    console.error(error);


    return Response.json(

      {
        success:false,
        error:error.message
      },

      {
        status:500
      }

    );

  }

}