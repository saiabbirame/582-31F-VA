// EX.1

const jsonText = '{"title":"Web Interface Programming 2","credits":3,"active":true}';

//Parse it
const parsedCourse = JSON.parse(jsonText);

// log the object
console.log(parsedCourse);

// log the title
console.log(parsedCourse.title);

//log the credits
console.log(parsedCourse.credits);

// EX.2

const course = {
  title: "Advanced Programming",
  credits: 3,
  active: true
};

// convert it to JSON text
const courseJSON = JSON.stringify(course);

// log the result
console.log(courseJSON);

// log the type
console.log(typeof courseJSON);

// EX.3

const prettyJSON = JSON.stringify(course, null, 2);

console.log(prettyJSON);