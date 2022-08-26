import {Api} from './api.js'
/*NOTE:
     I have errands that I cannot ignore this Friday, so I will be posting what I have produced
     in the span of two hours. I will be working on it by the time I get back home.
     - TOMMY HOANG
*/

/* Model */
const Model = ((api, View) =>{
     class CourseSelection{
          constructor(title){
               this.userID = 1;
               this.title = title;
               this.selected = false;
          }
     }
})(Api, View);

/* View */
const View = (() =>{
     const availableCourses = {
          availableCourses: '#availableCourseContainer',
          SelectButton: '.SelectButton',
          selectedCourses: '#selectedCoursesContainer',
     };

     const render = (ele, tmp) => {
          ele.innerHTML = tmp;
     };

     const createTmp = (arr) => {
          let tmp = '';
          arr.forEach(availableCourses => {
               tmp+= '
               <li>
                    <span>${CourseSelection.userID} - ${CourseSelection.title}</span>
                    <button class="">Select</button>

               </li>
               ';
          });
     }

     return {
          availableCourses,
          render,
          createTmp,
     };
})();

/* Controller */