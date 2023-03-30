import axios from "axios";
import React, { Suspense, useEffect, useState,useRef } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import { GlobalStyle } from "./globleStyle";
import { motion } from "framer-motion";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import LocationIcon from '../assets/images/LocationIcon.png'


function Contact(props) {
   const refMap = useRef(null)
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [pin, setPin] = React.useState({
    lat:-37.8172467,
    lng: 144.9535863
  })

  
  const [input, setInput] = React.useState()





  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setError(false);
      setMessage("You message has been sent!!!");
    }
  };
  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const numberFormatter = (number) => {
    const phnNumber = number;
    return phnNumber;
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  useEffect(() => {
    axios.get("/api/contactinfo").then((response) => {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });
  }, []);

  return (
    <Layout>
      <GlobalStyle />
      <Helmet>
        <title>Contact - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Contact Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <motion.div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom"        intial={{width:0}}
         animate={{width:'100%'}}
         exit={{x:window.innerWidth, transition:{duration:1}}}>
          <div className="container">
            <Sectiontitle title="Contact Me" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <h4>Get In Touch</h4>
                  <form
                    action="#"
                    className="mi-form mi-contact-form"
                    onSubmit={submitHandler}
                  >
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-name">
                        Enter your name*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="contact-form-name"
                        value={formdata.name}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">
                        Enter your email*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        id="contact-form-email"
                        value={formdata.email}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-subject">
                        Enter your subject*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="subject"
                        id="contact-form-subject"
                        value={formdata.subject}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-message">
                        Enter your Message*
                      </label>
                      <textarea
                        onChange={handleChange}
                        name="message"
                        id="contact-form-message"
                        cols="30"
                        rows="3"
                        value={formdata.message}
                      ></textarea>
                    </div>
                    <div className="mi-form-field">
             <div style={{height:'180px' }}>
             <Map
                        ref={refMap}
                        google={props.google}
                        initialCenter={pin}
                        style={{ borderRadius: '2%' }}
                        center={pin}
                        zoom={16}
                        mapTypeControl={false}
                        streetViewControl={false}
                      >
  <Marker
  ref={refMap}
         onClick={()=>{window.open("https://maps.google.com?q="+pin.lat+","+pin.lng)}}
        icon={{
          url: LocationIcon,
          anchor: new props.google.maps.Point(32,32),
          scaledSize: new props.google.maps.Size(20,25)
        }}
        position={pin}
      />
                        
                        
                      </Map>


                      </div>



                    </div>
                    <div className="mi-form-field">
                      <a className="mi-button"
                        href={"mailto:" }>
                        Send Mail
                      </a>
                    </div>
                  </form>
                  {handleAlerts()}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-contact-info">
                  {!phoneNumbers ? null : (








                    <motion.div className="mi-contact-infoblock"       whileHover={{
                      scale: 0.9,
                      transition: { duration: 1 },
                      backgroundColor: '#ba4c72',
                    }}>
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Phone />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Phone</h6>
                        {phoneNumbers.map((phoneNumber) => (
                          <p key={phoneNumber}>
                            <a href={numberFormatter(phoneNumber)}>
                              {phoneNumber}
                            </a>
                          </p>
                        ))}
                      </div>
                    </motion.div>



                  )}
                  {!emailAddress ? null : (
                    <motion.div className="mi-contact-infoblock"       whileHover={{
                      scale: 0.9,
                      transition: { duration: 1 },
                      backgroundColor: '#ba4c72',
                    }}>
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Mail />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Email</h6>
                        {emailAddress.map((email) => (
                          <p key={email}>
                            <a href={`mailto:${email}`}>{email}</a>
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {!phoneNumbers ? null : (
                    <motion.div className="mi-contact-infoblock"       whileHover={{
                      scale: 0.9,
                      transition: { duration: 1 },
                      backgroundColor: '#ba4c72',
                    }}>
                      <span className="mi-contact-infoblock-icon">
                        <Icon.MapPin />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Address</h6>
                        <p>{address}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Suspense>
    </Layout>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjiTW64B01tMxtOGACg7vnW4QJAFmY0A'
})(Contact)
