const loadStudentBtn = document.getElementById("load-student-btn");
const loadCoursesBtn = document.getElementById("load-courses-btn");
const clearBtn = document.getElementById("clear-btn");
const statusText = document.getElementById("status");
const studentContainer = document.getElementById("student-container");
const coursesContainer = document.getElementById("courses-container");

function getStudentData() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Jane Doe",
                program: "Web Development",
                semester: 3,
                bio: "Jane is learning JavaScript and Python."
            });
        }, 2000);
    });

    return promise;
}

function renderStudent(student) {
    studentContainer.innerHTML = `
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Program:</strong> ${student.program}</p>
        <p><strong>Semester:</strong> ${student.semester}</p>
        <p><strong>Bio:</strong> ${student.bio}</p>
    `;        
}

function getCoursesData() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { code: "WIP2", title: "Web Interface Programming 2" },
                { code: "AWP", title: "Advanced Programming" },
                { code: "DB2", title: "Database Management Systems 2" }
            ]);
        }, 2000);
    });
    return promise;
}

function renderCourses(courses) {

    const heading = document.createElement("h3");
    heading.textContent = "Courses";

    const ul = document.createElement("ul");

    for (let course of courses) {
        const li = document.createElement("li");
        li.textContent = `${course.code} - ${course.title}`;

        ul.append(li);
    }
    coursesContainer.append(heading);
    coursesContainer.append(ul);
}

loadStudentBtn.addEventListener("click", () => {
    statusText.textContent = "Loading student...";
    studentContainer.innerHTML = "";

    getStudentData()
        .then((student) => {
            renderStudent(student);
            statusText.textContent = "Student loaded successfully!";
        })
        .catch((error) => {
            statusText.textContent = error;
        });
});

loadCoursesBtn.addEventListener("click", () => {
    statusText.textContent = "Loading courses...";
    coursesContainer.innerHTML = "";

    getCoursesData()
        .then((courses) => {
            renderCourses(courses);
            statusText.textContent = "Courses loaded successfully!";
        })
        .catch((error) => {
            statusText.textContent = error;
        });
});

clearBtn.addEventListener("click", () => {
    studentContainer.innerHTML = "";
    coursesContainer.innerHTML = "";
    statusText.textContent = "Ready.";
})