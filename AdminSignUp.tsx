import "../../assets/css/admin.css";
import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

interface LoginFormProps {
  setLoggedIn: (loggedIn: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setLoggedIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const history = useHistory();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const validateName = () => {
    const nameRegex = /^[A-Za-z ]+$/;
    if (!name) {
      return 'Name is required';
    } else if (!nameRegex.test(name)) {
      return 'Name must contain only letters and spaces';
    }
    return '';
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Invalid email address';
    }
    return '';
  };

  const validatePassword = () => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameError = validateName();
    const emailError = validateEmail();
    const passwordError = validatePassword();

    if (nameError || emailError || passwordError) {
      setErrors({ name: nameError, email: emailError, password: passwordError });
      return;
    }

    setSubmitted(true);
    setErrors({ name: '', email: '', password: '' });
    setLoggedIn(true); // Set the user as logged in
    history.push('/add-new-pet'); // Redirect to Add New Pet page
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setPassword('');
    setErrors({ name: '', email: '', password: '' });
    setSubmitted(false);
  };

  const handleBlur = (field: string) => {
    let error = '';
    if (field === 'name') {
      error = validateName();
      if (error) nameRef.current?.focus();
    } else if (field === 'email') {
      error = validateEmail();
      if (error) emailRef.current?.focus();
    } else if (field === 'password') {
      error = validatePassword();
      if (error) passwordRef.current?.focus();
    }
    setErrors({ ...errors, [field]: error });
  };

  const handleFocus = (field: string) => {
    setErrors({ ...errors, [field]: '' });
  };

  return (
    <div className="background-image">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-info">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Login Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => handleBlur('name')}
                      onFocus={() => handleFocus('name')}
                      ref={nameRef}
                      required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur('email')}
                      onFocus={() => handleFocus('email')}
                      ref={emailRef}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => handleBlur('password')}
                      onFocus={() => handleFocus('password')}
                      ref={passwordRef}
                      required
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
                  </div>
                  {submitted && <div className="alert alert-success mt-3">Now You Can Add New Pets</div>}
                </form>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="mb-0 fs-4 bg-gradient">Don't have an account? <a href="#" className="text-decoration-none">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
