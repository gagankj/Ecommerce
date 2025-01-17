# 🛍️ E-Commerce Web App

## 🚀 Features
- Admin Panel with product management 🛠️
- Order management 📦
- Homepage carousel image updates 🖼️
- 🛒 PayPal integration
- Cloud storage with Cloudinary ☁️

## 💻 Tech Stack

**Frontend:**
- React ⚛️
- Tailwind CSS 🌊
- ShadCN 🎨
- Lucide Icons 🔥

**Backend:**
- MongoDB Atlas 🌐
- Node.js ⚡
- Express.js 🌱

**Other:**
- Cloudinary ☁️
- PayPal 💰

## 📦 Installation

1. Clone the repository:
   ```
   git clone https://github.com/gagankj/Ecommerce.git
   ```
   
2. Navigate to the project directory:
```
cd project-name
```

3. Install dependencies:

```
npm install
```

4. Configure MongoDB Atlas in .env:

Create a MongoDB Atlas account and create a cluster.
Get your MongoDB connection string and add it to .env file:

```
MONGO_URI=your-mongodb-uri
```

5. Set up Cloudinary:

Create a Cloudinary account.
Get your API keys and configure them in .env:

```
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

6. Set up PayPal:

Create a PayPal developer account.
Set up a sandbox test environment and get your client ID and secret.
Add these credentials in .env:

```
PAYPAL_CLIENT_ID=your-client-id
PAYPAL_CLIENT_SECRET=your-secret
```

7. Start the app:

```
npm start
```
