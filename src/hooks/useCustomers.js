import { useState } from 'react';

export const useCustomers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' }
  ]);

  const addCustomer = (customerData) => {
    setCustomers([...customers, { 
      id: Date.now(), 
      ...customerData 
    }]);
  };

  const updateCustomer = (id, customerData) => {
    setCustomers(customers.map(c => 
      c.id === id ? { ...c, ...customerData } : c
    ));
  };

  const deleteCustomer = (id) => {
    if (window.confirm('Delete this customer?')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  return {
    customers,
    addCustomer,
    updateCustomer,
    deleteCustomer
  };
};