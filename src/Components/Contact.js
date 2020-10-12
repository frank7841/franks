import React, { Component} from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component{
   render(){
      if(this.props.data){
         var name = this.props.data.name;
         //var profilepic= "images/"+this.props.data.image;
         //var bio = this.props.data.bio;
         //var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         //var state = this.props.data.address.state;
         //var zip = this.props.data.address.zip;
         var phone= this.props.data.phone;
         var email = this.props.data.email;
         //var resumeDownload = this.props.data.resumedownload;
       }

// const Contact = ({ data }) => {
//    const [url, setUrl] = useState('mailto:simiyu.frankline34@gmail.com?subject=subject&body=body');
//    const [name, setName] = useState('');
//    const [subject, setSubject] = useState('');
//    const [email, setEmail] = useState('');
//    const [message, setMessage] = useState('');

//    console.log(data)

   function sendEmail(e){
       e.preventDefault();
      // window.open(`mailto:${url}?subject=${subject}&body=${name}: ${message}`);
      emailjs.sendForm('gmail', 'template_frankline', e.target,'user_gmpL76qnP6VL7MNybw78l')
      .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
     e.target.reset()
     alert("Your Message has been sent!")
    }
        

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  {/* <p className="lead">{message}</p> */}

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input  type="text" defaultValue="" size="35" id="contactName" name="name" required />
                     {/* onChange={e => setName(e.target.value)} */}
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input  type="email" defaultValue="" size="35" id="contactEmail" name="email" required/>
                     {/* onChange={e=> setEmail(e.target.value)} */}
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input  type="text" defaultValue="" size="35" id="contactSubject" name="subject" required />
                     {/* onChange={e => setSubject(e.target.value)} */}
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea   cols="50" rows="15" id="contactMessage" name="message" required></textarea>
                     {/* onChange={e => setMessage(e.target.value)} */}
                  </div>

                  <div>
                     <button type='submit'value="Send" className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
                  <p className="address">
						   <span>{name}</span><br/>
						   <span>{city}</span><br/>
						   <span><a href="tell:+254790943918"> {phone}</a></span><br/>
                     <span><a href="mailto:simiyu.frankline34@gmail.com">{email}</a></span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
   }
}

export default Contact
