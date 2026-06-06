#  Zivora - Modern Clothing E-Commerce Platform

Zivora is a full-stack MERN-based clothing e-commerce platform designed for modern fashion brands. The application provides a seamless shopping experience for customers and a powerful administration panel for managing products, orders, users, and inventory.

---

##  Features

### Customer Features

- User Registration & Login
- JWT Authentication
- Browse Products
- Product Search & Filtering
- Product Categories
- Product Variants (Size & Color)
- Wishlist
- Shopping Cart
- Secure Checkout
- Order Tracking
- Order History
- Product Reviews & Ratings
- Profile Management
- Address Management
- Coupon Support

### Admin Features

- Dashboard Analytics
- Product Management
- Category Management
- Inventory Management
- Order Management
- User Management
- Coupon Management
- Sales Reporting

---

##  Tech Stack

### Frontend

- React.js
- React Router
- Axios
- Redux Toolkit / Zustand
- CSS / Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

### Third Party Services

- Cloudinary (Image Storage)
- Razorpay / Stripe (Payments)
- Nodemailer (Email Service)

---

## 📂 Project Structure

```text
client/
│
├── public/
│
└── src/
    ├── components/
    ├── features/
    │   ├── auth/
    │   ├── products/
    │   ├── cart/
    │   ├── wishlist/
    │   ├── orders/
    │   ├── checkout/
    │   └── admin/
    │
    ├── pages/
    ├── layouts/
    ├── routes/
    ├── hooks/
    ├── services/
    ├── store/
    └── utils/


server/
│
├── src/
│   ├── config/
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── products/
│   │   ├── categories/
│   │   ├── cart/
│   │   ├── orders/
│   │   ├── wishlist/
│   │   ├── reviews/
│   │   ├── coupons/
│   │   └── payments/
│   │
│   ├── models/
│   ├── middlewares/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
└── uploads/
```

---

##  Database Design

### Collections

- users
- addresses
- categories
- products
- productVariants
- carts
- wishlists
- orders
- orderItems
- payments
- coupons
- reviews

### Product Variant Example

```json
{
  "productId": "123",
  "size": "M",
  "color": "Black",
  "sku": "TSHIRT-BLK-M",
  "price": 799,
  "stock": 20
}
```

---

##  Authentication

- JWT Access Token
- Password Hashing using Bcrypt
- Protected Routes
- Role Based Access Control

### Roles

```text
Customer
Admin
```

---

##  Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

---

##  Environment Variables

### Backend

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_SECRET=
```

---

##  Future Improvements

- Redis Caching
- Recommendation Engine
- AI Fashion Suggestions
- Multi Vendor Support
- Loyalty Program
- Return & Refund Management
- Push Notifications
- PWA Support

---

##  Author

Developed using the MERN Stack.

Built with scalability, maintainability, and modern e-commerce best practices in mind.