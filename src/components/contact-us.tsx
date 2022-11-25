import React from 'react';
import type { NextPage } from 'next'
import { InputField } from '@components'
import { Button, TextArea } from '../components/form-inputs';

const ContactUs: NextPage = () => {
  return (
    <>
      <section className="contact-form py-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 bg-success text-center d-flex align-item-center">
              <img src="/assets/images/contact.png" alt="Contact Us" className="img-fluid w-75 m-auto" />
            </div>
            <div className="col-6 bg-primary">
              <form className="w-50 mx-auto py-5">
                <h4 className="text-white fw-bolder pb-5">Drop us a line</h4>
                <InputField
                  type="text"
                  name="Name"
                  placeholder="Your name"
                  className="bg-transparent border-0 border-bottom rounded-0 shadow-none mb-5 fs-3 font-roboto"
                  label="Name"
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Your e-mail"
                  className="bg-transparent border-0 border-bottom rounded-0 shadow-none mb-5 fs-3 font-roboto"
                  label="E-mail"
                />
                <InputField
                  type="text"
                  name="subject"
                  placeholder="What you wanna talk about?"
                  className="bg-transparent border-0 border-bottom rounded-0 shadow-none mb-5 fs-3 font-roboto"
                  label="Subject"
                />

                <TextArea
                  name="text"
                  placeholder="Starting Writing..."
                  className="bg-transparent shadow-none mb-5 fs-3 font-roboto"
                  label="Message"
                  row="4"
                  value=""
                />

                <Button type={'button'} className={'bg-warning btn-pill fs-2'} name={'Send'} />
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default ContactUs;
