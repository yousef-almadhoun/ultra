import React from 'react';

import { ContactSection, ContactTitle, ContactTitleSpan, Form, Input, FormInput, InputText, InputEmail, Sub, Textarea, InputSubmit } from './style'

const Contact = () => {
    return (
      <ContactSection>
      <div className="container">
          <ContactTitle><ContactTitleSpan>Drop </ContactTitleSpan>Me A line</ContactTitle>
          <Form action="">
              <FormInput>
                  <InputText type="text" placeholder="Your Name" />
                  <InputEmail type="email" placeholder="Your Email" />
              </FormInput>
              <Sub type="text" placeholder="Your Subject" />
              <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
              <InputSubmit type="submit" value="Send Message" />
          </Form>
      </div>
  </ContactSection>
    );
}

export default Contact;