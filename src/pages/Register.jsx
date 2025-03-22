import React from 'react';

const Register = () => {
  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form>
        <input type="text" className="form-control mb-2" placeholder="Username" />
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input type="password" className="form-control mb-2" placeholder="Password" />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;