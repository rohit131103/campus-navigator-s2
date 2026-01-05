const { initializeDB, addPersonnel, displayPersonnel, findOffice, findPerson } = require('./database');

// Initialize the tables
initializeDB();

// // Add a test entry for the Dean
addPersonnel({
    firebase_id: "dean_001",
    name: "Dr. Aris",
    office: "Admin Block Room 101",
    floor: 1,
    building: "Main Building",
    lat: 23.344,
    lng: 85.309
});


const demoData = [
    // --- ADMINISTRATIVE BLOCK (Center Point: 23.3440, 85.3090) ---
    { name: "Dr. Rajeshwar Rao", office: "Director's Office", floor: 0, building: "Admin Block", lat: 23.34401, lng: 85.30901 },
    { name: "Dr. Amit Sharma", office: "Dean Academic Affairs", floor: 0, building: "Admin Block", lat: 23.34405, lng: 85.30902 },
    { name: "Prof. Sunita Williams", office: "Dean Student Welfare", floor: 0, building: "Admin Block", lat: 23.34408, lng: 85.30905 },
    { name: "Mr. Sanjay Gupta", office: "Registrar Office", floor: 1, building: "Admin Block", lat: 23.34412, lng: 85.30908 },
    { name: "Ms. Meenakshi Iyer", office: "Finance & Accounts", floor: 1, building: "Admin Block", lat: 23.34415, lng: 85.30910 },
    { name: "Capt. Vikram Singh", office: "Chief Warden Office", floor: 0, building: "Admin Block", lat: 23.34418, lng: 85.30912 },
    { name: "Dr. Ananya Pandey", office: "Training & Placement Cell", floor: 1, building: "Admin Block", lat: 23.34420, lng: 85.30915 },
    { name: "Mr. Kishore Kumar", office: "Admission Cell", floor: 0, building: "Admin Block", lat: 23.34422, lng: 85.30918 },

    // --- ACADEMIC BLOCK A (CS/IT - Center Point: 23.3450, 85.3100) ---
    { name: "Dr. V. Kamakoti", office: "HOD Computer Science", floor: 1, building: "Academic Block A", lat: 23.34501, lng: 85.31001 },
    { name: "Prof. Sandeep Jain", office: "Data Structures Lab", floor: 0, building: "Academic Block A", lat: 23.34505, lng: 85.31005 },
    { name: "Dr. Sarita Agrawal", office: "AI/ML Research Lab", floor: 2, building: "Academic Block A", lat: 23.34510, lng: 85.31010 },
    { name: "Dr. Manish Chhetri", office: "Cyber Security Lab", floor: 2, building: "Academic Block A", lat: 23.34515, lng: 85.31015 },
    { name: "Prof. Nitin Gadkari", office: "Cloud Computing Lab", floor: 1, building: "Academic Block A", lat: 23.34520, lng: 85.31020 },
    { name: "Ms. Priyanka Reddy", office: "Programming Lab 1", floor: 0, building: "Academic Block A", lat: 23.34525, lng: 85.31025 },
    { name: "Mr. Rahul Deshmukh", office: "Programming Lab 2", floor: 0, building: "Academic Block A", lat: 23.34528, lng: 85.31028 },
    { name: "Dr. S. Ranganathan", office: "Discrete Maths Dept", floor: 3, building: "Academic Block A", lat: 23.34530, lng: 85.31030 },
    { name: "Mr. Sundar Pichai", office: "Innovation Hub", floor: 2, building: "Academic Block A", lat: 23.34535, lng: 85.31035 },
    { name: "Mr. Satya Nadella", office: "Software Development Cell", floor: 1, building: "Academic Block A", lat: 23.34540, lng: 85.31040 },

    // --- ACADEMIC BLOCK B (Mech/Civil - Center Point: 23.3460, 85.3080) ---
    { name: "Dr. G. Madhavan", office: "HOD Mechanical", floor: 1, building: "Academic Block B", lat: 23.34601, lng: 85.30801 },
    { name: "Prof. S. Somnath", office: "Fluid Mechanics Lab", floor: 0, building: "Academic Block B", lat: 23.34605, lng: 85.30805 },
    { name: "Dr. Tessy Thomas", office: "Thermodynamics Lab", floor: 0, building: "Academic Block B", lat: 23.34610, lng: 85.30810 },
    { name: "Prof. C.V. Raman", office: "Physics Department", floor: 2, building: "Academic Block B", lat: 23.34615, lng: 85.30815 },
    { name: "Dr. Homi Bhabha", office: "Nuclear Physics Lab", floor: 2, building: "Academic Block B", lat: 23.34620, lng: 85.30820 },
    { name: "Dr. E. Sreedharan", office: "HOD Civil Engineering", floor: 1, building: "Academic Block B", lat: 23.34625, lng: 85.30825 },
    { name: "Mr. Ashish Bose", office: "Structural Engineering Lab", floor: 0, building: "Academic Block B", lat: 23.34630, lng: 85.30830 },
    { name: "Dr. APJ Abdul Kalam", office: "Aerospace Lab", floor: 3, building: "Academic Block B", lat: 23.34635, lng: 85.30835 },

    // ... (Repeat pattern for the remaining entries using similar offset logic)
];
for (const index in demoData) {
    addPersonnel(demoData[index]);
}

// displayPersonnel();

console.log(findPerson("Dr. APJ Abdul Kalam"));
