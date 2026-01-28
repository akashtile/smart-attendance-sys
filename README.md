# 🎓 Smart Attendance System using Face Recognition

A modern **AI-powered Smart Attendance System** that uses a camera and face recognition to automatically mark attendance, manage students, and generate real-time reports through a clean web dashboard.

This project demonstrates full-stack development skills using **Python, Flask, Computer Vision, and UI design**.

---

## ✨ Key Features

- 📷 Real-time face recognition using webcam  
- 🧑‍🎓 Student registration with image capture  
- 📊 Interactive dashboard with attendance statistics  
- 📁 Student management (Add / View / Delete / Update)  
- 🔍 Search & filter attendance records  
- 📥 Export attendance data to Excel  
- 🔐 Login system with roles (Admin / Teacher)  
- 📱 Responsive modern UI  
- ⚡ Optimized for CPU (no GPU required)  

---

## 🛠️ Tech Stack

|   Layer   |   Technology   |
|-----------|----------------|
|  Backend  |  Python, Flask |
| Frontend  | HTML, CSS, JavaScript |
| Database  | SQLite |
| Face Recognition | OpenCV + face_recognition |
|   Export  | Excel (.xlsx) |
| UI Design | Custom modern dashboard |

---

## 📂 Project Structure

smart-attendance/  
├── app.py # Main Flask app  
├── requirements.txt # Project dependencies  
├── README.md  
├── static/ # CSS & JavaScript  
  │ ├── css/  
  │ │ └── style.css  
  │ └── js/  
  │ └── app.js  
├── templates/ # HTML pages  
  │ ├── base.html  
  │ ├── dashboard.html  
  │ ├── live_attendance.html  
  │ ├── register_student.html  
  │ ├── records.html  
  │ ├── students.html  
  │ └── login.html  
  └── utils/ # Backend logic  
├── recognition.py    
├── database.py  
  └── excel_export.py  



---

## 🚀 How to Run Locally

### 1. Clone repository
```bash
git clone https://github.com/akashtile/smart-attendance-sys.git
cd smart-attendance-system
```
---

**2. Create virtual environment**
```bash
python -m venv venv
 
 ```

**3. Activate environment**

```bash
venv\Scripts\activate
```

**4. Install dependencies**
```bash
pip install -r requirements.txt
```

**5. Run the project**
```bash
python app.py
```

Open in browser:
```
http://127.0.0.1:5000
```

---

## 🧠 How the System Works

1. Teacher registers students using the **Register Student** page  
2. Student images are captured and stored in the dataset  
3. Face encodings are generated and saved  
4. During **Live Attendance**, camera captures faces  
5. Faces are matched with stored encodings  
6. Attendance is automatically:
   - Stored in SQLite database  
   - Exported to Excel  
   - Displayed on dashboard in real-time  

---
## 📊 Modules Overview

| Module | Purpose |
|--------|--------|
| Login | Role-based login (Student / Teacher) |
| Dashboard | Shows total, present, absent, stats |
| Live Attendance | Camera + real-time recognition |
| Register Student | Add student with face data |
| Records | Filter, search, export attendance |
| Students | View, update, delete students |
| Excel Export | Download attendance report |

---

## 🛠 Tech Stack Used

- **Backend**: Python, Flask  
- **Frontend**: HTML, CSS, JavaScript  
- **Database**: SQLite  

<HR>
<H1>IMAGES OF THE ATTENDANCE SYSTEM</H1>

**LOGIN:**
<img width="1910" height="904" alt="Screenshot 2026-01-27 172851" src="https://github.com/user-attachments/assets/7042c563-a14a-46b4-8d0c-2374e63dc2ec" />
<img width="1913" height="919" alt="Screenshot 2026-01-27 174053" src="https://github.com/user-attachments/assets/e3e9078b-f11d-4aae-8d50-e18ee198225a" />

<H2>TEACHER SECTION</H2>

**TEACHER DASHBOARD**
<img width="1891" height="910" alt="Screenshot 2026-01-27 171709" src="https://github.com/user-attachments/assets/86db2175-187c-4bc8-90a7-624a0f2139cb" />

**LIVE ATTENDANCE**
<img width="1913" height="895" alt="Screenshot 2026-01-27 171738" src="https://github.com/user-attachments/assets/246d64ec-1473-4671-ab0e-d10e46765bb8" />

**REGISTER /ADD STUDENT**
<img width="1882" height="913" alt="Screenshot 2026-01-27 171819" src="https://github.com/user-attachments/assets/1a551c85-30c4-49bc-b9dd-f0103d8a3e83" />

**ATTENDANCE RECORDS**
<img width="1886" height="915" alt="Screenshot 2026-01-27 171836" src="https://github.com/user-attachments/assets/1c250a7d-0022-4629-89fa-b3e35f73cb73" />

**STUDENTS UPDATE /DELETE**
<img width="1895" height="897" alt="Screenshot 2026-01-27 171854" src="https://github.com/user-attachments/assets/3b01e68e-7861-4680-aa9c-b54e144ecff6" />

<HR>
<H2>STUDENT SECTION</H2>

**STUDENT DASHBOARD**
<img width="1910" height="917" alt="Screenshot 2026-01-27 174714" src="https://github.com/user-attachments/assets/3907da1f-9125-4e2f-9c9f-5c6273b0ca95" />

**ATTENDANCE RECORDS**
<img width="1917" height="915" alt="Screenshot 2026-01-27 174734" src="https://github.com/user-attachments/assets/e1af6808-346c-4fa5-a6be-320b2f147bc9" />

**NOTIFICATIONS**
<img width="1919" height="1078" alt="Screenshot 2026-01-27 174751" src="https://github.com/user-attachments/assets/eca04470-ed21-44c4-a7a0-95a8e7d10ab4" />
