import {Api} from './api.js'
/*NOTE:
     I have errands that I cannot ignore this Friday, so I will be posting what I have produced
     in the span of two hours. I will be working on it by the time I get back home.
     - TOMMY HOANG
*/

/* Model */
const Model = ((api, view) =>{
     //individual courses
     class Course{
          constructor(courseName){
               this.courseId = courseId;
               this.courseName = courseName;
               this.required = required;
               this.credit = credit;
               this.flag = false;
          }
     }
     class State{
          //Create array for list of courses
          #courses = [];

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
          selectCourses,
          Course,
          State,
     };
})(Api, View);

/* View */
const View = (() =>{
     //All objects required for this project
     const blocks = {
          leftContainer: '#leftContainer',
          rightContainer: '#rightContainer',
          courses: '.courses',
          selectButton: '.selectButton',
     };
     const render = (ele, tmp) => {
          ele.innerHTML = tmp;
     };
     //Show all courses in the left container
     const createTmp = (arr) => {
          let tmp = '';
          arr.forEach(availableCourses => {
               tmp+='<li> <span>${Course.courseID} - ${Course.courseName} - Credits: ${Course.credit}</span> </li>';
          });
          return tmp;
     }

     return {
          blocks,
          render,
          createTmp,
     };
})();

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
     const selectingCourse = () =>{
          view.blocks.courses.addEventListener('click', function onClick()){
               //change the specific course flag to true
               model.Course.flag = true;
               //Add total credit house
               creditHours+= model.Course.credit;
               
          }
          //clicking course change color and adds flag to selected
          
     }
     const deselectCourse = () =>{
          //clicking on a selected course decolorizes the course and subtracts credit hours.
          view.blocks.courses.addEventListener('click', function onClick){
               //change specific course flag to false
               model.Course.flag = false;
               //Subtract total credit hours
               creditHours -= model.Course.credit;
          }
     }
     if(creditHours > 18){
          alert("You can only choose up to 18 credits in one semester.");
     }
     view.blocks.selectButton.addEventListener('click', function onClick()){
          if(confirm("You have selected up to ${creditHours}. You cannot change once you click \"OK\".") === true){
               //put selected courses into right container
               
               //lock select button
               view.blocks.selectButton.disable() = true;
          }
     }

})(Model, View);

Controller.bootstrap();