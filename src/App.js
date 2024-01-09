import{ BrowserRouter,Routes,Route} from "react-router-dom";

import { Home } from "./pages/Home";
import {About} from "./pages/About"; 
import {Contact} from "./pages/Contact"; 
import Header from "./pages/Header";
import UserComponent from "./pages/UserComponent";
 
function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
    
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user" element ={<UserComponent/>}/>
      <Route path ="user/:id" element={<UserComponent/>}/>


     </Routes>
    </BrowserRouter>
  );
}

export default App;
