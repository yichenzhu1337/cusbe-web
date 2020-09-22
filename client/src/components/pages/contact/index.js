import React, {useState} from "react";
import {MDBAlert, MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import {contactUs} from '../../../actions/contactus';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    body: '',
  });

  const {name, email, body} = formData;

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = (e) => {
    e.preventDefault();
    contactUs(name, email, body);
  };

  return (
    <>
      <MDBContainer className="mt-4 contact-form">
        <MDBAlert color="success" dismiss>
          Message sent! Thank you for contacting us.
        </MDBAlert>
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <form onSubmit={onSubmit}>
              <p className="h5">Questions, comments, feedback? Let us know below!</p>
              <label htmlFor="contact__name" className="grey-text mt-4">Name</label>
              <input type="text" id="contact__name" className="form-control" name="name" value={name} onChange={onChange} required/>
              <label htmlFor="contact__email" className="grey-text mt-4">Email address</label>
              <input type="email" id="contact__email" className="form-control" name="email" value={email} onChange={onChange} required/>
              <label htmlFor="contact__body" className="grey-text mt-4">What is in your mind?</label>
              <textarea id="contact__body" className="form-control" rows="3" name="body" value={body} onChange={onChange} required/>
              <div className="text-center my-4">
                <MDBBtn type="submit" className="btn-block">Send</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ContactPage
