import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      //var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      //var state = this.props.data.address.state;
      //var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src= {process.env.PUBLIC_URL +"/images/profpic.jpg"} alt="Frankline Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br/>
						   <span>{city}</span><br/>
						   <span><a href="tell:+254790943918"> {phone}</a></span><br/>
                     <span><a href="mailto:simiyu.frankline34@gmail.com">{email}</a></span>
					   </p>
               </div> 
               <div className="columns download">
                  <p>
                     <a className= "button" target="blank" href={resumeDownload}><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
