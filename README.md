# 🌍 Dream Destination

**Dream Destination** is a full-stack travel booking web application that allows users to explore travel services, book destinations, make payments, and share reviews. It also provides an administrative dashboard for managing services, bookings, users, and orders.

🔗 **Live Website:** https://dream-destination-f64f9.web.app/

---

## ✨ Features

### 👤 User Features

* Browse available travel destinations and services
* View detailed service information
* Book travel services
* View personal booking history
* Make payments securely through Stripe
* Submit reviews and ratings
* View reviews from other customers
* User authentication with Firebase
* Protected routes for authenticated users

### 🛠️ Admin Features

* Dedicated admin dashboard
* Add new travel services
* Update existing services
* Delete services
* View and manage customer orders
* Update booking/order status
* Delete customer orders
* View registered users
* Promote users to admin
* Manage travel services and bookings

### 🔐 Authentication & Security

* Firebase Authentication
* Google Sign-In
* Protected/private routes
* Separate user and administrator functionality

---

## 🧰 Technologies Used

### Frontend

* **React.js**
* **React Router**
* **React Bootstrap**
* **Bootstrap 4**
* **Axios**
* **React Hook Form**
* **Styled Components**
* **Font Awesome**

### Authentication

* **Firebase Authentication**

### Payment

* **Stripe**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**

### Deployment

* **Firebase Hosting**
* Backend API deployed separately

---

## 📂 Project Structure

```text
DreamDestination/
│
└── Dream-destination-client-main/
    │
    ├── public/
    │
    ├── src/
    │   ├── Conponents/
    │   │   ├── Admin/
    │   │   │   ├── AddService/
    │   │   │   ├── AdminServiceList/
    │   │   │   ├── MakeAdmin/
    │   │   │   ├── ManageOrder/
    │   │   │   ├── ManageService/
    │   │   │   ├── Sidebar/
    │   │   │   └── User/
    │   │   │
    │   │   ├── Customar/
    │   │   │   ├── Order/
    │   │   │   ├── ProcessPayment/
    │   │   │   ├── Review/
    │   │   │   ├── ServiceCard/
    │   │   │   ├── ServiceList/
    │   │   │   └── Sidebar/
    │   │   │
    │   │   ├── Home/
    │   │   ├── Login/
    │   │   ├── NotFound/
    │   │   ├── Responsive/
    │   │   └── Shared/
    │   │
    │   ├── images/
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    │
    ├── package.json
    ├── firebase.json
    └── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/your-username/DreamDestination.git
```

### 2. Navigate to the frontend directory

```bash
cd DreamDestination/Dream-destination-client-main
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

---

## 💳 Payment

The application integrates **Stripe** for handling customer payments.

The project currently uses Stripe's test environment for payment processing.

> For production deployment, use environment variables for API keys and configure Stripe using production credentials.

---

## 🔥 Firebase

Firebase is used for user authentication and Google Sign-In.

Before deploying your own version, configure your Firebase project and update the Firebase configuration accordingly.

Recommended production practice:

```text
.env
```

Store sensitive configuration values in environment variables instead of committing secrets directly to the repository.

---

## 🌐 Backend API

The React frontend communicates with a separate Node.js/Express backend for:

* Travel service management
* Customer orders
* Order status updates
* User/admin management
* Reviews
* Service information

The frontend is configured to communicate with the deployed backend API.

---

## 📸 Main Application Sections

### 🏠 Home

The landing page introduces the travel services and highlights available destinations.

### 🗺️ Services

Users can browse available travel services and select a destination to book.

### 📋 Booking

Authenticated users can submit booking information for selected services.

### 💳 Payment

Customers can process payments through Stripe.

### ⭐ Reviews

Users can submit reviews and view feedback from other customers.

### 👨‍💼 Admin Dashboard

Administrators can manage:

* Services
* Orders
* Users
* Administrators
* Booking status

---

## 🔄 Application Workflow

```text
                    ┌───────────────┐
                    │     User      │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │    Website    │
                    │   React.js    │
                    └───────┬───────┘
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
        ┌─────────┐   ┌──────────┐   ┌──────────┐
        │ Firebase│   │ Backend  │   │  Stripe  │
        │  Auth   │   │   API    │   │ Payment  │
        └─────────┘   └────┬─────┘   └──────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   MongoDB    │
                    │   Database   │
                    └──────────────┘
```

---

## 📱 Responsive Design

The application is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

---

## 🧪 Available Scripts

Inside the frontend directory:

### Start development server

```bash
npm start
```

### Create production build

```bash
npm run build
```

### Run tests

```bash
npm test
```

---

## 🎯 Future Improvements

Possible improvements for future versions include:

* [ ] Destination search and filtering
* [ ] Advanced booking management
* [ ] Improved admin analytics dashboard
* [ ] Destination categories
* [ ] Wishlist functionality
* [ ] Email booking confirmation
* [ ] Improved mobile UI
* [ ] Environment-based configuration
* [ ] Backend and frontend deployment documentation
* [ ] Automated testing
* [ ] Improved security and API validation

---

## 👨‍💻 Author

**Shishir Chandra Das**

Software Engineer | Python | FastAPI | React | Full-Stack Development

---

## 📄 License

This project is created for educational and portfolio purposes.
