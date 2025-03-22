// src/pages/ContactUs.jsx (updated)
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Contact Form Data:', data);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Contact Information</h5>
                  <p className="card-text">
                    <strong>Address:</strong><br />
                    123 Recipe Street<br />
                    Food City, FC 12345
                  </p>
                  <p className="card-text">
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p className="card-text">
                    <strong>Email:</strong> contact@recipeshare.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows="4"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;