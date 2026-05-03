// Sample student data
let students = [
    { rollNumber: "2023001", name: "Arjun Mehta", email: "arjun.mehta@email.com", mobile: "9876543210", fatherName: "Ramesh Mehta", motherName: "Sunita Mehta", branch: "Computer Science", department: "Engineering", semester: 3, hostelRoom: "A-101", feePending: 5000, photo: "https://randomuser.me/api/portraits/men/75.jpg" },
    { rollNumber: "2023002", name: "Priya Sharma", email: "priya.sharma@email.com", mobile: "9876543211", fatherName: "Anil Sharma", motherName: "Kavita Sharma", branch: "Electronics", department: "Engineering", semester: 4, hostelRoom: "B-202", feePending: 0, photo: "https://randomuser.me/api/portraits/women/63.jpg" },
    { rollNumber: "2023003", name: "Rahul Verma", email: "rahul.verma@email.com", mobile: "9876543212", fatherName: "Mahesh Verma", motherName: "Seema Verma", branch: "Mechanical", department: "Engineering", semester: 2, hostelRoom: "C-103", feePending: 2500, photo: "https://randomuser.me/api/portraits/men/60.jpg" },
    { rollNumber: "2023004", name: "Sneha Iyer", email: "sneha.iyer@email.com", mobile: "9876543213", fatherName: "Suresh Iyer", motherName: "Lakshmi Iyer", branch: "Civil", department: "Engineering", semester: 5, hostelRoom: "A-204", feePending: 1000, photo: "https://randomuser.me/api/portraits/women/65.jpg" },
    { rollNumber: "2023005", name: "Karan Malhotra", email: "karan.malhotra@email.com", mobile: "9876543214", fatherName: "Rajesh Malhotra", motherName: "Neeta Malhotra", branch: "Chemical", department: "Engineering", semester: 6, hostelRoom: "B-105", feePending: 3000, photo: "https://randomuser.me/api/portraits/men/58.jpg" },
    { rollNumber: "2023006", name: "Aishwarya Nair", email: "aishwarya.nair@email.com", mobile: "9876543215", fatherName: "Prakash Nair", motherName: "Anjali Nair", branch: "Computer Science", department: "Engineering", semester: 3, hostelRoom: "C-206", feePending: 0, photo: "https://randomuser.me/api/portraits/women/66.jpg" },
    { rollNumber: "2023007", name: "Amit Joshi", email: "amit.joshi@email.com", mobile: "9876543216", fatherName: "Vijay Joshi", motherName: "Poonam Joshi", branch: "Electronics", department: "Engineering", semester: 4, hostelRoom: "A-107", feePending: 4000, photo: "https://randomuser.me/api/portraits/men/61.jpg" },
    { rollNumber: "2023008", name: "Ritika Singh", email: "ritika.singh@email.com", mobile: "9876543217", fatherName: "Dinesh Singh", motherName: "Meena Singh", branch: "Mechanical", department: "Engineering", semester: 2, hostelRoom: "B-208", feePending: 1500, photo: "https://randomuser.me/api/portraits/women/68.jpg" },
    { rollNumber: "2023009", name: "Siddharth Patel", email: "siddharth.patel@email.com", mobile: "9876543218", fatherName: "Manoj Patel", motherName: "Rekha Patel", branch: "Civil", department: "Engineering", semester: 5, hostelRoom: "C-109", feePending: 2000, photo: "https://randomuser.me/api/portraits/men/64.jpg" },
    { rollNumber: "2023010", name: "Neha Kapoor", email: "neha.kapoor@email.com", mobile: "9876543219", fatherName: "Ravi Kapoor", motherName: "Shalini Kapoor", branch: "Chemical", department: "Engineering", semester: 6, hostelRoom: "A-210", feePending: 0, photo: "https://randomuser.me/api/portraits/women/70.jpg" },
    { rollNumber: "2023011", name: "Rohan Das", email: "rohan.das@email.com", mobile: "9876543220", fatherName: "Alok Das", motherName: "Reena Das", branch: "Computer Science", department: "Engineering", semester: 3, hostelRoom: "B-111", feePending: 3500, photo: "https://randomuser.me/api/portraits/men/62.jpg" },
    { rollNumber: "2023012", name: "Divya Reddy", email: "divya.reddy@email.com", mobile: "9876543221", fatherName: "Shankar Reddy", motherName: "Malathi Reddy", branch: "Electronics", department: "Engineering", semester: 4, hostelRoom: "C-212", feePending: 500, photo: "https://randomuser.me/api/portraits/women/64.jpg" },
    { rollNumber: "2023013", name: "Manav Gupta", email: "manav.gupta@email.com", mobile: "9876543222", fatherName: "Satish Gupta", motherName: "Kamla Gupta", branch: "Mechanical", department: "Engineering", semester: 2, hostelRoom: "A-113", feePending: 1000, photo: "https://randomuser.me/api/portraits/men/67.jpg" },
    { rollNumber: "2023014", name: "Isha Banerjee", email: "isha.banerjee@email.com", mobile: "9876543223", fatherName: "Debashish Banerjee", motherName: "Sumita Banerjee", branch: "Civil", department: "Engineering", semester: 5, hostelRoom: "B-214", feePending: 2500, photo: "https://randomuser.me/api/portraits/women/72.jpg" },
    { rollNumber: "2023015", name: "Varun Khanna", email: "varun.khanna@email.com", mobile: "9876543224", fatherName: "Gopal Khanna", motherName: "Neelam Khanna", branch: "Chemical", department: "Engineering", semester: 6, hostelRoom: "C-115", feePending: 0, photo: "https://randomuser.me/api/portraits/men/66.jpg" },
    { rollNumber: "2023016", name: "Pooja Desai", email: "pooja.desai@email.com", mobile: "9876543225", fatherName: "Mohan Desai", motherName: "Radha Desai", branch: "Computer Science", department: "Engineering", semester: 3, hostelRoom: "A-216", feePending: 4500, photo: "https://randomuser.me/api/portraits/women/74.jpg" },
    { rollNumber: "2023017", name: "Aditya Rao", email: "aditya.rao@email.com", mobile: "9876543226", fatherName: "Harish Rao", motherName: "Nandini Rao", branch: "Electronics", department: "Engineering", semester: 4, hostelRoom: "B-117", feePending: 1500, photo: "https://randomuser.me/api/portraits/men/73.jpg" },
    { rollNumber: "2023018", name: "Megha Pillai", email: "megha.pillai@email.com", mobile: "9876543227", fatherName: "Rajiv Pillai", motherName: "Geetha Pillai", branch: "Mechanical", department: "Engineering", semester: 2, hostelRoom: "C-218", feePending: 2000, photo: "https://randomuser.me/api/portraits/women/69.jpg" },
    { rollNumber: "2023019", name: "Nikhil Bhat", email: "nikhil.bhat@email.com", mobile: "9876543228", fatherName: "Ashok Bhat", motherName: "Jyoti Bhat", branch: "Civil", department: "Engineering", semester: 5, hostelRoom: "A-119", feePending: 3000, photo: "https://randomuser.me/api/portraits/men/74.jpg" },
    { rollNumber: "2023020", name: "Tanvi Joshi", email: "tanvi.joshi@email.com", mobile: "9876543229", fatherName: "Kishore Joshi", motherName: "Bhavna Joshi", branch: "Chemical", department: "Engineering", semester: 6, hostelRoom: "B-220", feePending: 500, photo: "https://randomuser.me/api/portraits/women/67.jpg" }
  ];
  

// DOM Elements
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');
const searchInput = document.getElementById('searchInput');
let editingStudent = null;

// Display students in table
function displayStudents(studentsToDisplay = students) {
    studentTableBody.innerHTML = '';
    studentsToDisplay.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${student.photo || 'https://randomuser.me/api/portraits/lego/1.jpg'}" alt="${student.name}" class="student-photo"></td>
            <td>${student.rollNumber}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.mobile}</td>
            <td>${student.fatherName}</td>
            <td>${student.motherName}</td>
            <td>${student.branch}</td>
            <td>${student.department}</td>
            <td>${student.semester}</td>
            <td>${student.hostelRoom}</td>
            <td>${student.feePending}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editStudent('${student.rollNumber}')">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteStudent('${student.rollNumber}')">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}

// Add/Edit student
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentData = {
        rollNumber: document.getElementById('rollNumber').value,
        name: document.getElementById('name').value,
        photo: document.getElementById('photo').value || `https://randomuser.me/api/portraits/${Math.random() < 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        fatherName: document.getElementById('fatherName').value,
        motherName: document.getElementById('motherName').value,
        branch: document.getElementById('branch').value,
        department: document.getElementById('department').value,
        semester: parseInt(document.getElementById('semester').value),
        hostelRoom: document.getElementById('hostelRoom').value,
        feePending: parseFloat(document.getElementById('feePending').value)
    };

    if (editingStudent) {
        const index = students.findIndex(s => s.rollNumber === editingStudent);
        students[index] = studentData;
        editingStudent = null;
        document.getElementById('submitBtn').textContent = 'Add Student';
    } else {
        students.push(studentData);
    }

    studentForm.reset();
    displayStudents();
});

// Edit student
function editStudent(rollNumber) {
    const student = students.find(s => s.rollNumber === rollNumber);
    if (student) {
        document.getElementById('rollNumber').value = student.rollNumber;
        document.getElementById('name').value = student.name;
        document.getElementById('photo').value = student.photo;
        document.getElementById('email').value = student.email;
        document.getElementById('mobile').value = student.mobile;
        document.getElementById('fatherName').value = student.fatherName;
        document.getElementById('motherName').value = student.motherName;
        document.getElementById('branch').value = student.branch;
        document.getElementById('department').value = student.department;
        document.getElementById('semester').value = student.semester;
        document.getElementById('hostelRoom').value = student.hostelRoom;
        document.getElementById('feePending').value = student.feePending;

        editingStudent = rollNumber;
        document.getElementById('submitBtn').textContent = 'Update Student';
    }
}

// Delete student
function deleteStudent(rollNumber) {
    if (confirm('Are you sure you want to delete this student?')) {
        students = students.filter(s => s.rollNumber !== rollNumber);
        displayStudents();
    }
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.rollNumber.toLowerCase().includes(searchTerm) ||
        student.name.toLowerCase().includes(searchTerm) ||
        student.email.toLowerCase().includes(searchTerm) ||
        student.branch.toLowerCase().includes(searchTerm)
    );
    displayStudents(filteredStudents);
});

// Initial display
document.addEventListener('DOMContentLoaded', () => {
    displayStudents();
});
