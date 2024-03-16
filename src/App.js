
import { Login } from '@mui/icons-material';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import MainLayout from './Components/MainLayout';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/campaigns" element={<MainLayout/>}>
         <Route index element={<Dashboard/>}/>

      </Route>
    </Routes>
   </Router>
  );
}

export default App;
