# 🛍️ Vibe Commerce — Mock E-Com Cart

A simple full-stack shopping cart web application.

This project demonstrates **end-to-end integration** between a React frontend, Express backend, and MongoDB database.  
It supports product listing, cart operations (add/remove/update), checkout with mock receipt generation, and responsive UI — showcasing core e-commerce functionality.

---

### 🚀 Tech Stack
- **Frontend:** React (Vite) + Fetch API
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **API:** RESTful endpoints (`/api/products`, `/api/cart`, `/api/checkout`)
- **Styling:** TailwindCSS
- **Tools:** GitHub, Postman, npm

---

### ✨ Features
- Product grid with “Add to Cart”
- Cart view with quantity, remove, and total
- Checkout form (name/email) → mock receipt
- Responsive design (mobile & desktop)
- Clean REST API structure
- MongoDB persistence for cart

---

### 📦 Deliverables
- `/backend` → Express API  
- `/frontend` → React app  
- `README.md` → Setup guide 


---



### 🧰 Setup Instructions
```bash
# Seed database with sample data
cd backend
node seed.js

# Run backend
cd backend
npm install
npm start


# Run frontend
cd frontend
npm install
npm run dev
