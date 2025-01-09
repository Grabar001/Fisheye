export const getUrlParams = () => {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const id = urlParams.get("id");
   const sort = urlParams.get("sort");

   return { 
      id: id,
      sort: sort
    }
}