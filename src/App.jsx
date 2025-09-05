import React, { useState } from 'react';
import Auth from './components/Auth';
import Header from './components/Header';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import { useCustomers } from './hooks/useCustomers';

const App = () => {
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const { customers, addCustomer, updateCustomer, deleteCustomer } = useCustomers();

  const handleLogin = (email) => {
    setUser(email);
  };

  const handleLogout = () => {
    setUser(null);
    setShowForm(false);
    setEditingCustomer(null);
  };

  const handleAddNew = () => {
    setEditingCustomer(null);
    setShowForm(true);
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    if (editingCustomer) {
      updateCustomer(editingCustomer.id, formData);
    } else {
      addCustomer(formData);
    }
    setShowForm(false);
    setEditingCustomer(null);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingCustomer(null);
  };

  // Auth screen
  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Header user={user} onLogout={handleLogout} />
        
        {showForm ? (
          <CustomerForm
            customer={editingCustomer}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        ) : (
          <CustomerList
            customers={customers}
            onEdit={handleEdit}
            onDelete={deleteCustomer}
            onAddNew={handleAddNew}
          />
        )}
      </div>
    </div>
  );
};
export default App;