const mongoose = require('mongoose');

// Connect to MongoDB
const connect = async () => {
  await mongoose.connect('mongodb://localhost:27107/testdbmongo001');

  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: {
      street: String,
      city: String,
      zip: String,
    },
    createdAt: { type: Date, default: Date.now },
  });

  const User = mongoose.model('User', userSchema);
  const newUser = new User({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      zip: '12345',
    },
  });

  newUser
    .save()
    .then((user) => console.log('User added:', user))
    .catch((err) => console.error('Error adding user:', err));
  const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    inStock: { type: Boolean, default: true },
    categories: [String],
  });

  const Product = mongoose.model('Product', productSchema);
  const orderSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    orderDate: { type: Date, default: Date.now },
    status: { type: String, default: 'pending' },
  });
  const newProduct = new Product({
    name: 'Laptop',
    price: 999.99,
    description: 'A high-performance laptop',
    categories: ['Electronics', 'Computers'],
  });

  newProduct
    .save()
    .then((product) => console.log('Product added:', product))
    .catch((err) => console.error('Error adding product:', err));
  const Order = mongoose.model('Order', orderSchema);
};
connect();
