import React, { useState, useEffect } from 'react';

const CustomerForm = ({ customer, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;

  useEffect(() => {
    if (customer) {
      setFormData({ 
        name: customer.name, 
        email: customer.email, 
        phone: customer.phone 
      });
    }
  }, [customer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Valid phone number is required (at least 10 digits)';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    onSubmit(formData);
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">
        {customer ? 'Edit Customer' : 'Add Customer'}
      </h2>
      
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : ''}`}
            value={formData.name}
            onChange={(e) => {
              setFormData({...formData, name: e.target.value});
              if (errors.name) setErrors({...errors, name: ''});
            }}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
            value={formData.email}
            onChange={(e) => {
              setFormData({...formData, email: e.target.value});
              if (errors.email) setErrors({...errors, email: ''});
            }}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone (e.g., 123-456-7890)"
            className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
            value={formData.phone}
            onChange={(e) => {
              setFormData({...formData, phone: e.target.value});
              if (errors.phone) setErrors({...errors, phone: ''});
            }}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-slate-500 text-white p-3 rounded-lg hover:bg-slate-600"
          >
            {customer ? 'Update' : 'Add'}
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-slate-600 text-white p-3 rounded-lg hover:bg-slate-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;