# Customer Management App

A simple React-based customer management system that allows users to manage customer information with authentication, CRUD operations, and search functionality.

## Features

### Authentication
- **Sign In/Sign Up** functionality with form validation
- Email format validation
- Password strength requirements (minimum 6 characters)
- Name validation for registration
- Real-time error feedback

### Customer Management
- **Add new customers** with name, email, and phone
- **Edit existing customers** with pre-populated form data
- **Delete customers** with confirmation dialog
- **Search customers** by name or email
- **View customer list** with organized display

### User Experience
- Clean, responsive design using Tailwind CSS
- Intuitive navigation between forms and lists
- Real-time form validation with visual feedback
- Confirmation dialogs for destructive actions

## Tech Stack

- **React** - Frontend framework with hooks
- **JavaScript (ES6+)** - Modern JavaScript features
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Hooks** - Reusable state management logic

## Project Structure

```
src/
├── components/
│   ├── Auth.jsx          # Authentication component
│   ├── Header.jsx        # Navigation header
│   ├── CustomerForm.jsx  # Add/Edit customer form
│   └── CustomerList.jsx  # Customer listing and search
├── hooks/
│   └── useCustomers.js   # Customer state management
└── App.jsx              # Main application component
```


## Usage

1. **Authentication**: Sign up with a new account or sign in with existing credentials
2. **View Customers**: Browse the customer list on the main dashboard
3. **Search**: Use the search bar to filter customers by name or email
4. **Add Customer**: Click "Add Customer" and fill in the required information
5. **Edit Customer**: Click "Edit" on any customer to modify their details
6. **Delete Customer**: Click "Delete" and confirm to remove a customer

## Form Validation

### Authentication
- Email must be in valid format
- Password must be at least 6 characters
- Name required for sign-up (minimum 2 characters)

### Customer Forms
- All fields (name, email, phone) are required
- Email format validation
- Real-time error clearing on input

## Sample Data

The app comes with pre-loaded sample customers:
- John Doe (john@example.com)
- Jane Smith (jane@example.com)
