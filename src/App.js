import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Header from './components/Home/Header';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Profile from './pages/Profile';

import ToDoListRedux from './pages/ToDoList/ToDoListRedux';
import TDLSaga from './pages/ToDoList/TDLSaga'
import LoadingComponent from './components/GlobalSettting/LoadingComponent/LoadingComponent';
function App() {
  return (
    <BrowserRouter >
        <Header />
        <LoadingComponent />
      <Routes>

        <Route  path='/'  element={<Home />}  />
        <Route  path='/home'  element={<Home />}  />
        <Route  path='/login'  element={<Login />}  />
        <Route   path='/aboutus' element={<AboutUs />}  />
        <Route   path='/contact' element={<Contact />}  />
        <Route   path='/detail/:id' element={<Detail />}  />
        {/* <Route   path="*" element={<PageNotFound />}  /> */}
        <Route   path="/profile" element={<Profile />}  />
       
        <Route   path="/tdlredux" element={<ToDoListRedux />}  />
        <Route   path="/tdlsaga" element={<TDLSaga />}  />
        
      </Routes>

     
    </BrowserRouter>
  );
}

export default App;
