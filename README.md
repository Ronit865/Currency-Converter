# 💱 Currency Converter (React)

A production-ready currency converter web application built with **React + Vite**, designed for fast, accurate, and user-friendly currency conversions using real-time exchange rates.

---

## 📖 Overview

The Currency Converter allows users to convert amounts between different currencies instantly. It fetches live exchange rates from an external API and provides a seamless user experience with a responsive interface.

---

## 🔗 Live Application

👉 https://Ronit865.github.io/Currency-Converter

---

## 🧠 Key Features

* Real-time currency conversion
* Supports multiple international currencies
* Clean and intuitive UI
* Fast rendering with Vite
* Responsive design (mobile + desktop)
* Error handling for API failures

---

## 🏗️ Architecture

This project follows a **component-based architecture** using React.

### Flow:

1. User inputs amount
2. Selects base and target currency
3. API fetches exchange rate
4. Conversion is calculated
5. Result is displayed instantly

---

## 🛠️ Tech Stack

| Category   | Technology        |
| ---------- | ----------------- |
| Frontend   | React             |
| Build Tool | Vite              |
| Language   | JavaScript (ES6)  |
| Styling    | CSS               |
| API        | Exchange Rate API |
| Deployment | GitHub Pages      |

---

## 📂 Project Structure

```bash id="proj01"
Currency-Converter/
│
├── public/                 # Static assets
├── src/                    # Application source code
│   ├── components/         # Reusable UI components
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
└── README.md
```

---

## ⚙️ Installation Guide

### Prerequisites

* Node.js (>= 16)
* npm or yarn

### Steps

```bash id="install01"
# Clone repository
git clone https://github.com/Ronit865/Currency-Converter.git

# Navigate into project
cd Currency-Converter

# Install dependencies
npm install

# Start development server
npm run dev
```

App will run on:
👉 http://localhost:5173/

---

## 🌐 API Integration

The application uses an external API to fetch live exchange rates.

### Example Flow:

```bash id="api01"
GET /latest?base=USD
```

### Responsibilities:

* Fetch exchange rate data
* Handle API errors
* Update UI dynamically

---

## 🔁 Core Logic (Conversion)

```bash id="logic01"
convertedAmount = amount × exchangeRate
```

---

## 🚀 Deployment

The project is deployed using **GitHub Pages**.

### Steps:

```bash id="deploy01"
npm run build
npm run deploy
```

### Configuration:

```json id="deploy02"
"homepage": "https://Ronit865.github.io/Currency-Converter"
```

---

## 🧪 Testing

Currently, manual testing is implemented:

* Input validation
* API response handling
* UI responsiveness

📌 Future scope: Add unit testing with Jest or React Testing Library

---

## ⚠️ Error Handling

* Invalid user input (empty/negative values)
* API request failures
* Network issues

Fallback mechanisms ensure app stability.

---

## 🔮 Future Enhancements

* Currency search & autocomplete
* Historical data visualization (charts)
* Dark mode
* Offline caching
* Multi-language support

---

## 🤝 Contribution Guidelines

1. Fork the repository
2. Create a branch (`feature/feature-name`)
3. Commit changes
4. Push to your fork
5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Ronit865**
GitHub: https://github.com/Ronit865

---

## 🙌 Acknowledgements

* Exchange Rate API providers
* React & Vite communities
