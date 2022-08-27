/* API */
const Api = (() =>{
     const baseURL = 'http://localhost:4232';
     const path = 'courseList';

     const getCourses = fetch([baseURL, path].join('/')).then((response) => response.json());

     return {
          getCourses,
     };
})();
/**********************************************************/
/* View */
const View = (() =>{
     //All objects required for this project
     const blocks = {
          courseList: "coursesList",
          leftContainer: '#leftContainer',
          rightContainer: '#rightContainer',
          courses: '.courses',
     };
     const render = (ele, tmp) => {
          ele.innerHTML = tmp;
     };
     //Set all courses in the left container
     const createTmp = (arr) => {
          let tmp, required = '';
          arr.forEach((course) => {
               if(course.required === true){
                    required = 'Compulsory';
               }
               else{
                    required = 'Elective';
               }
               tmp+= '<li> <span>${course.courseName} - ${course.required} - Credits: ${course.credit}</span> </li>';
          });
          return tmp;
     }

     return {
          blocks,
          render,
          createTmp,
     };
})();

/* Model */
const Model = ((api, view) =>{
     //individual courses
     class Course{
          constructor(courseName){
               this.courseId = courseId;
               this.courseName = courseName;
               this.required = required;
               this.credit = credit;
          }
     }
     class State{
          //Create array for list of courses
          #courses = [];
          #selectedCourses = [];

          get courseList(){
               return this.#courses;
          }
          //Place all courses into the left container
          set courseList(newCourseList){
               this.#courses = [...newCourseList];
               const leftContainer = document.querySelector(view.blocks.leftContainer);
               const tmp = view.createTmp(this.#courses);
               view.render(leftContainer, tmp);
          }
     }
     const {getCourses,} = api;

     return{
          getCourses,
          Course,
          State,
     };
})(Api, View);

/* Controller 
When user select course, the credit of that course should be add up to the total credit counter
When user unselect course, the credit of that course should be minus from the total credit counter
When user try to select a course which will cause overload (greater than 18 credits), 
the course will NOT be selected and there will be a pop up alert window warning 
"You can only choose up to 18 credits in one semester"

When "Select" button is clicked, it will pop up a confirmation window:
The message in the window will display how may total credits you have chosen from the Available Courses Bucket
If user click "OK" button in the pop up window, all the selected courses will be moved to the "Selected Courses" bucket.
If user click "Cancel", window will be closed and you still have all the functionalities from the previous features
After User successfully selected all the courses, "Select" button should be disabled
*/
const Controller = ((model, view) =>{
     const state = new model.State();
     let creditHours = 0;
     if(creditHours > 18){
          alert("You can only choose up to 18 credits in one semester.");
     }
     

     const init = () => {
          model.getCourses().then((course) => {
               state.courseList = [...course.reverse()];
          });
     };
     const bootstrap = () => {
          init();
     }

     return{
          bootstrap,
     };
})(Model, View);

Controller.bootstrap();