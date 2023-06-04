import { FETCH_ITEMS_LOADING,FETCH_ITEMS_SUCCESS,FETCH_ITEMS_FAILURE } from "./actionType";

export const fetchItems = () => {
    return async (dispatch) => {
      try {
      
        dispatch({ type: FETCH_ITEMS_LOADING });
  
  
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
  
       
        dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data });
      } catch (error) {
     
        dispatch({ type: FETCH_ITEMS_FAILURE, payload: error.message });
      }
    };
  };
  

