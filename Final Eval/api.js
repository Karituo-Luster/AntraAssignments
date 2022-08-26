export const Api = (() =>{
     const baseURL = 'http://lovalhost:4232';
     const path = 'courseList';

     const getCourseList = () =>
          fetch([baseURL, path]).then(response => response.json()).then(json => console.log(json));

     return {
          getCourseList,

     };
})();