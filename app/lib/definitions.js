// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

// Define user object shape
const User = {
  id: '',
  name: '',
  email: '',
  password: '',
};

// Define customer object shape
const Customer = {
  id: '',
  name: '',
  email: '',
  image_url: '',
};

// Define invoice object shape
const Invoice = {
  id: '',
  customer_id: '',
  amount: 0,
  date: '',
  // This is a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' || 'paid',
};

// Define revenue object shape
const Revenue = {
  month: '',
  revenue: 0,
};

// Define latest invoice object shape
const LatestInvoice = {
  id: '',
  name: '',
  image_url: '',
  email: '',
  amount: '',
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
const LatestInvoiceRaw = {
  ...LatestInvoice,
  amount: 0,
};

// Define invoices table object shape
const InvoicesTable = {
  id: '',
  customer_id: '',
  name: '',
  email: '',
  image_url: '',
  date: '',
  amount: 0,
  status: 'pending' || 'paid',
};

// Define customers table type object shape
const CustomersTableType = {
  id: '',
  name: '',
  email: '',
  image_url: '',
  total_invoices: 0,
  total_pending: 0,
  total_paid: 0,
};

// Define formatted customers table object shape
const FormattedCustomersTable = {
  id: '',
  name: '',
  email: '',
  image_url: '',
  total_invoices: 0,
  total_pending: '',
  total_paid: '',
};

// Define customer field object shape
const CustomerField = {
  id: '',
  name: '',
};

// Define invoice form object shape
const InvoiceForm = {
  id: '',
  customer_id: '',
  amount: 0,
  status: 'pending' || 'paid',
};
