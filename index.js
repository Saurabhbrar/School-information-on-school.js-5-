const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        {
            name: "Alice",
            className: "Grade 5",
            scores: { math: 95, science: 88, history: 85, english: 92 },
        },
        {
            name: "Bob",
            className: "Grade 4",
            scores: { math: 80, science: 78, history: 92, english: 85 },
        },
        {
            name: "Charlie",
            className: "Grade 5",
            scores: { math: 88, science: 90, history: 78, english: 88 },
        },
        {
            name: "Diana",
            className: "Grade 4",
            scores: { math: 92, science: 85, history: 88, english: 90 },
        },
    ],
};

/* Problem 10: countCalculation [1] */
//console.log(school.departments.english.teachers)

const countCalculation = (school) => {
    const { departments: { math: { teachers: mathTeachersCount, students: mathStudentsCount } }, departments: { history: { teachers: historyTeachersCount, students: historyStudentsCount } } } = school;
    
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
};

console.log(countCalculation(school));



function findTopStudent(school, courseName) {
    let topStudent = null;
    let maxScore = -Infinity;


    for (const student of school.students) {
        const { scores, name } = student;
        const score = scores[courseName];

        
        if (score && score > maxScore) {
            maxScore = score;
            topStudent = { name, scores };
        }
    }

   
    return `{${JSON.stringify(topStudent)}}`;
}


console.log(findTopStudent(school, "math"));


/* problem=3 */
const addNewDept = (school, newDepartment) => {
    const updatedDepartments = {
        ...school.departments,
        ...newDepartment
    };

    const updatedSchool = {
        ...school,
        departments: updatedDepartments
    };

    return updatedSchool;
};
const newDepartment = {
    art: { teachers: 2, students: 50 }
};

const updatedSchool = addNewDept(school, newDepartment);
console.log(updatedSchool);

/* problem=4 */
function highestStudentCountDepartment(school) {
    let highestCount = 0;
    let highestCountDept = "";

    for (const dept in school.departments) {
        if (school.departments.hasOwnProperty(dept)) {
            const studentCount = school.departments[dept].students;
            if (studentCount > highestCount) {
                highestCount = studentCount;
                highestCountDept = dept;
            }
        }
    }

    return highestCountDept;
}

const result = highestStudentCountDepartment(school);
console.log(result);


