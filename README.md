# Disease Information API

A simple Node.js + Express API that returns medical information (causes, symptoms, prevention) for 23 diseases.  
Now includes a **professional UI** so users can search diseases easily without typing URLs.

Live API + UI hosted on Render: **https://disease-api-8a3f.onrender.com**

---

## Features
- Express-based backend API  
- Professional HTML UI for disease search  
- JSON dataset stored in `diseases.json`  
- Green (success) and Red (error) status messages  
- Pretty JSON formatter  
- Works perfectly on Render  

---

## Project Structure
```
disease-api/
│
├── public/
│   └── index.html
│
├── data/
│   └── diseases.json
│
├── server.js
└── package.json
```

---

## Local Installation & Setup

### 1. Install dependencies
```
npm install
```

### 2. Start the server
```
node server.js
```

### 3. Access locally
- UI: http://localhost:3000  
- API: http://localhost:3000/disease?name=diabetes  

---

## Live Deployment (Render)
Your hosted API is live here: **https://disease-api-8a3f.onrender.com**

### Example API Calls
```
https://disease-api-8a3f.onrender.com/disease?name=asthma
https://disease-api-8a3f.onrender.com/disease?name=copd
https://disease-api-8a3f.onrender.com/disease?name=stroke
```

### Example Success Message
```
200 OK — Query retrieved successfully.
```

### Example Error Message
```
404 Not Found — Disease is not present in the database, stay tuned!
```

---

## Supported Diseases (23)
Asthma, Hypertension, Pneumocystis Pneumonia, Diabetes, COPD, Tuberculosis, Hepatitis,  
Heart Failure, Stroke, Kidney Disease, Thyroid Disorders, Gastritis, Anemia, Tonsillitis,  
Arthritis, Pneumonia, COVID-19, Migraine, Depression, Anxiety, Osteoporosis, Obesity, GERD  

---

## Testing Examples
```
https://disease-api-8a3f.onrender.com/disease?name=anemia
https://disease-api-8a3f.onrender.com/disease?name=gerd
```

### Testing invalid disease:
```
https://disease-api-8a3f.onrender.com/disease?name=xyz
```

---

## Render Deployment Steps
1. Push code to GitHub  
2. Create a Render Web Service  
3. Select "Node" environment  
4. Use Start Command:
```
node server.js
```
5. Deploy and you're done!  

---

## License
Free for educational, personal, and internship use.

---

## Credits
Medical descriptions rewritten into simple, original wording with the help of ChatGPT.
