import React, { useState } from 'react';

const CustomerList = ({ customers, onEdit, onDelete, onAddNew }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
       
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search customers..."
            className="flex-1 p-3 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={onAddNew}
            className="bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700"
          >
            Add Customer
          </button>
        </div>
      </div>

      {/* Customer List */}
      <div className="bg-white rounded-lg shadow-md">
        {filteredCustomers.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No customers found
          </div>
        ) : (
          filteredCustomers.map(customer => (
            <div key={customer.id} className="p-4 border-b flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{customer.name}</h3>
                <p className="text-gray-600">{customer.email}</p>
                <p className="text-gray-600">{customer.phone}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(customer)}
                  className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(customer.id)}
                  className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};


export default CustomerList;