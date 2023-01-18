/* Scheduling a Course */
var course = {
    name: 'CS 61A',
    units: 4,
    days: ['M', 'W', 'F'],
    time: '12:30pm',
    location: 'Soda Hall',
    instructor: 'Paul Hilfinger',
    description: 'Structure and Interpretation of Computer Programs'
  };
  var courseName = document.createElement('div');
  courseName.innerHTML = course.name;
  document.body.appendChild(courseName);
  var courseUnits = document.createElement('div');
  courseUnits.innerHTML = course.units;
  document.body.appendChild(courseUnits);
  var courseDays = document.createElement('div');
  courseDays.innerHTML = course.days;
  document.body.appendChild(courseDays);
  var courseTime = document.createElement('div');
  courseTime.innerHTML = course.time;
  document.body.appendChild(courseTime);
  var courseLocation = document.createElement('div');
  courseLocation.innerHTML = course.location;
  document.body.appendChild(courseLocation);
  var courseInstructor = document.createElement('div');
  courseInstructor.innerHTML = course.instructor;
  document.body.appendChild(courseInstructor);
  var courseDescription = document.createElement('div');
  courseDescription.innerHTML = course.description;
  document.body.appendChild(courseDescription);