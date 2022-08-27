/* API */
const Api = (() =>{
     const URL = 'http://localhost:4232/courseList';
     const  getCourses = fetch(URL).then((response) => response.json());

     return {
          getCourses,
     };
})();
/**********************************************************/
/* Model */
const Model = ((api, view) =>{
     //individual courses
     class IndividualCourse{
          constructor(courseId, courseName, required, credit){
               this.courseId = courseId;
               this.courseName = courseName;
               this.required = required;
               this.credit = credit;
          }
     }
     class State{
          //Create array for list of courses
          #courseList = [];
          get courseList(){
               return this.#courseList;
          }
          /*   Place all courses into the left container
               Uses view.render & view.createVisualElement to show courses
          */
          set courseList(newCourseList){
               this.#courseList = [...newCourseList];
               const leftContainer = document.querySelector(view.blocks.leftContainer);
               const tmp = view.createVisualElement(this.#courseList);
               view.render(leftContainer, tmp);
          }
     }
     const {getCourses} = api;
     return{
          State,
          getCourses,
     };
})(Api, View);

/* View */
const View = (() =>{
     //All objects required for this project
     const blocks = {
          leftContainer: '#left-container',
          rightContainer: '#right-container',
          creditHours: '.credit-hour-display',
          selectButton: '.select-button',
     };
     function render(ele, tmp) {
          ele.innerHTML = tmp;
     }
     //creates the list elements
     function createVisualElement(arr) {
          let tmp = '';
          arr.forEach((course) => {
               tmp += '<li class="course"><span>${course.courseName}\nCourse Type: ${course.required ? "Compulsory" : "Elective"}\nCredits: ${course.credit}</span></li>';
          });
          return tmp;
     }

     return {
          blocks,
          render,
          createVisualElement,
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
     let selectedCourses = [];
     let credit = 0;

     const cred = () =>{
          const cred = document.querySelector(view.blocks.creditHours);
          cred.addEventListener("click", (event) =>{
               document.getElementsByClassName("credit-hour-display").innerHTML = credit;
          })
     }
     function selectingCourse() {
          const Left = document.querySelector(view.blocks.leftContainer);
          Left.addEventListener("click", (event) => {
               if (event.target.courseList.contains("courseItem")) {
                    let classList = event.target.classList;
                    let course = state.courseList.find((elem) => elem.courseId == event.target.id);
               }
               if (classList.contains("selected")) {
                    selectedCourses = selectedCourses.filter((elem) => {
                         return elem.courseId != course.courseId;
                    });
                    credit -= course.credit;
                    event.target.classList.remove("selected");
               }
               else {
                    if (totalcredit + course.credit > 18) {
                         alert("You cannot register for more than 18 hours per semester.");
                    }
                    else {
                         document.getElementsByClassName("course").style.backgroundColor = skyblue;
                         selectedCourses.push(course);
                         credit += course.credit;
                         event.target.classList.add("selected");
                         document.getElementsByClassName("credit-hour-display").innerHTML = credit;
                    }
               }
          });
     }
     function finalizeButton() {
          const button = document.querySelector(view.blocks.selectButton);
          button.addEventListener("click", (event) => {
               confirm("You have chosen "+ credit +" credits this selester. You cannot change once you submit. Do you want to continue?");
               if (credit <= 18 && confirm === true) {
                    let lis = document.querySelectorAll(".course");
                    for (let i = 0; i < lis.length; i++) {
                         let name = lis[i].getElementsByClassName('name')[0].innerHTML;
                         let t = lis[i].innerHTML;
                         selectedCourses.forEach((selectedCourse) => {
                              if (selectedCourse.courseName === name)
                                   lis[i].parentNode.removeChild(lis[i]);
                         });
                    }
                    button.disable();
               }
          });
     }
     function init() {
          model.getCourses().then((course) => {
               state.courseList = course;
          });
     }
     function bootstrap() {
          init();
          selectingCourse();
          finalizeButton();
     }
     return{
          bootstrap,
     };
})(Model, View);

Controller.bootstrap();