import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import ItemDetail from "./Pages/Item";
import "./style.css"
import { fetchItems } from "./Redux/actions/actionCreate";
import { useDispatch } from "react-redux";
import {useEffect} from "react";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{marginLeft:"20px"}}>Social Media App</h2>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/item/:id" element={<ItemDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
