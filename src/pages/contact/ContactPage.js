import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

//custom imports
import Wrapper from '../Wrapper';
import envelope from '../../assets/Envelope.svg';

//styling
import './contactPage.css';

const ContactPage = (props) => {
  const form = useRef();

  //form hook instance
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        'service_smn99oh',
        'template_gmail',
        form.current,
        'user_k0DRZN88Gi368znDPvxkC'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <Wrapper full='full' bottom='footer-fixed'>
      <div className='contact-flex'>
        <div className='contact-flex-text'>
          <div className='contact-flex-text-title'>
            <h3>Let's Connect!</h3>
            <img src={envelope} alt='envelope' />
          </div>
          <p>
            I look forward to hearing from you, and will try my best to return
            your message within 3 business days.
          </p>
        </div>
        <div className='contact-flex_container'>
          <form
            ref={form}
            onSubmit={handleSubmit(() => {
              sendEmail();
              reset();
            })}
          >
            <input
              type='text'
              className={errors.name ? 'red-outline' : null}
              placeholder='Full Name'
              {...register('name', { required: true, maxLength: 80 })}
            />
            <input
              type='text'
              className={errors.email ? 'red-outline' : null}
              placeholder='Email'
              {...register('email', {
                required: true,
                pattern: /\S+@\S+\.\S+/i,
              })}
            />
            <textarea
              className={errors.message ? 'red-outline' : null}
              placeholder='Message'
              {...register('message', { required: true, maxLength: 250 })}
            />
            <input type='submit' value='Send' />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

ContactPage.propTypes = {};

export default ContactPage;
