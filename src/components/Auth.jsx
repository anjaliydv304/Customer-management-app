import React, { useState } from 'react';

const Auth = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [authData, setAuthData] = useState({ email: '', password: '', name: '' });
  const [errors, setErrors] = useState({ email: '', password: '', name: '' });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '', name: '' };
    let isValid = true;

    // Email validation
    if (!authData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(authData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Password validation
    if (!authData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (!validatePassword(authData.password)) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    // Name validation (only for sign up)
    if (isSignUp) {
      if (!authData.name) {
        newErrors.name = 'Name is required';
        isValid = false;
      } else if (!validateName(authData.name)) {
        newErrors.name = 'Name must be at least 2 characters long';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAuth = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onLogin(authData.email);
      setAuthData({ email: '', password: '', name: '' });
      setErrors({ email: '', password: '', name: '' });
    }
  };

  const handleInputChange = (field, value) => {
    setAuthData({ ...authData, [field]: value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setErrors({ email: '', password: '', name: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        
        <form onSubmit={handleAuth} className="space-y-4">
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                value={authData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
          )}
          
          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              value={authData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              className={`w-full p-3 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              value={authData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-slate-600 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
          
          <button
            type="button"
            onClick={toggleAuthMode}
            className="w-full text-slate-600 hover:underline"
          >
            {isSignUp ? 'Already have account? Sign In' : 'Need account? Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;