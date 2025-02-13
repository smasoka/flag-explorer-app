# 🌍 Flag Explorer App

A web application that allows users to explore country flags and details. Built with **Next.js (React)** for the frontend and **FastAPI (Python)** for the backend, with a **GitHub Actions CI/CD pipeline** for automation.

---

## 📌 Features
- ✅ Fetch and display country flags and names.
- ✅ Click a flag to view detailed country information.
- ✅ Navigation between Home and Country Details pages.
- ✅ Unit and integration tests for frontend and backend.
- ✅ CI/CD pipeline using GitHub Actions.

---

## 🛠️ Setup & Installation

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/flag-explorer-app.git
cd flag-explorer-app
```

---

## 🖥️ Backend Setup (FastAPI)

### 2️⃣ **Navigate to `backend/`**
```sh
cd backend
```

### 3️⃣ **Create a Virtual Environment & Install Dependencies**
```sh
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```

### 4️⃣ **Run the FastAPI Server**
```sh
uvicorn app.main:app --reload
```

### 5️⃣ **Test API Endpoints in Swagger UI**
Visit: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## 🌐 Frontend Setup (Next.js)

### 6️⃣ **Navigate to `frontend/`**
```sh
cd ../frontend
```

### 7️⃣ **Install Dependencies**
```sh
npm install
```

### 8️⃣ **Run the Next.js Development Server**
```sh
npm run dev
```

### 9️⃣ **Open the App in Your Browser**
Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Running Tests

### 🔹 **Backend Tests (FastAPI with pytest)**
```sh
cd backend
pytest tests/
```

### 🔹 **Frontend Tests (Next.js with Jest & Testing Library)**
```sh
cd frontend
npm test
```

---

## 🚀 CI/CD Pipeline (GitHub Actions)

### ✅ The pipeline automatically:
- Runs **frontend and backend tests** on push.
- Builds and packages the frontend and backend.
- Ensures code quality before deployment.

---

## 💡 Next Steps / Future Improvements
- 🔹 Add Docker for easier deployment.
- 🔹 Deploy to AWS or Azure
- 🔹 Implement caching for faster API responses.

---

## 📜 License
This project is open-source and free to use.

---

## 🤝 Contributing
Feel free to submit issues or pull requests. 😊

---

### 🎯 **Developed with Next.js, FastAPI, and 💙!**

