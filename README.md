
# Disease Information API

A simple Node.js + Express API that returns medical information (causes, symptoms, prevention) for 23 diseases.  
Data is stored in a separate `diseases.json` file for easy editing and expansion.

---

## Features
- Lightweight Express server  
- Clean JSON-based data  
- Easy to extend: just update `diseases.json`  
- GET endpoint for disease queries  
- Suitable for APIHub submission, portfolio, or internship task  

---

## Project Structure
```
disease-api/
│
├── data/
│   └── diseases.json
│
├── server.js
└── package.json
```

---

## Installation & Setup

### 1. Install dependencies
```
npm install
```

### 2. Run the server
```
node server.js
```

Default URL:
```
http://localhost:3000
```

---

## API Endpoint

### **GET /disease?name={disease_name}**

Returns medical information about the disease.

#### Example Request:
```
GET http://localhost:3000/disease?name=asthma
```

#### Example Response:
```json
{
  "disease": "Asthma",
  "causes": [...],
  "symptoms": [...],
  "prevention": [...]
}
```

---

## Supported Diseases (23 Total)
Asthma, Hypertension, Pneumocystis Pneumonia, Diabetes, COPD, Tuberculosis, Hepatitis,  
Heart Failure, Stroke, Kidney Disease, Thyroid Disorders, Gastritis, Anemia, Tonsillitis,  
Arthritis, Pneumonia, COVID-19, Migraine, Depression, Anxiety, Osteoporosis, Obesity, GERD  

---

## Testing

Use **Postman**, **Insomnia**, or your browser:

```
http://localhost:3000/disease?name=copd
http://localhost:3000/disease?name=diabetes
http://localhost:3000/disease?name=stroke
```

If the disease exists, JSON is returned.  
If not:

```json
{ "error": "Disease not found" }
```

---

## Deployment (Render)
1. Push project to GitHub  
2. Create a **Render Web Service**  
3. Root Directory: project root  
4. Build Command: (none needed)  
5. Start Command:
```
node server.js
```
6. Deploy & test the live API  

---

## License
Free for personal, educational, or internship use.

---

## Credits
All medical information is rewritten in simplified, original wording with ChatGPT assistance.
