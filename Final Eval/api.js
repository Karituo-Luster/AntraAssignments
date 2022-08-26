export const Api = (() =>{
     const baseURL = 'http://localhost:4232';
     const path = 'courseList';

     const getCourses = () => fetch([baseURL, path]).then(response => response.json()).then(json => console.log(json));
     const selectCourses = () => fetch()
          return {
          getCourses,
     };
})();