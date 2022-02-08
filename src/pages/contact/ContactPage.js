import React from 'react';
import PropTypes from 'prop-types';

import wip_animation from '../../assets/wip_animation.gif';
import Wrapper from '../Wrapper';
import { useForm } from 'react-hook-form';

import './contactPage.css';

const ContactPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Wrapper>
      <div className='hero'>
        <div className='container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              placeholder='Email'
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              type='text'
              placeholder='Name'
              {...register('Name', { required: true, maxLength: 80 })}
            />
            <textarea
              {...register('Message', { required: true, maxLength: 300 })}
            />
            <input type='submit' />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

ContactPage.propTypes = {};

export default ContactPage;
