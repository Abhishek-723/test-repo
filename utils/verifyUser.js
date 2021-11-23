const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

const sendMail = (user, message, res) => {
    const msg = {
        to: user.email,
        from: 'abhishekpradhan931@gmail.com', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: message
      };    
    sgMail.send(msg, function(err, result) {
        if(err){
            res.status(500).json({
                status: "fail",
                err
            })
        }
        else{
            res.status(200).json({
                status: "success",
                message: "Email has been sent",
                mail: user.email
            })
        }
    })  
};

module.exports = sendMail;
  