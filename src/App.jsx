import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tvshow from './Components/Tvshow/Tvshow';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/NotFound/Notfound';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectesRoute from './Components/ProtectesRoute/ProtectesRoute';
import ItemDetails from './Components/ItemDetails/ItemDetails';

function App() {
  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      saveUserData()
    }
  }, [])


  const [userData, setuserData] = useState(null)

  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setuserData(decodedToken)
    console.log(userData);
  }

  let routers = createBrowserRouter([
    {
      path: "", element: <Layout setuserData={setuserData} userData={userData} />, children: [
        { path: "home", element: < ProtectesRoute >  <Home />  </ ProtectesRoute > },
        { path: "movies", element: < ProtectesRoute >   <Movies /> </ProtectesRoute> },
        { path: "tvshow", element: < ProtectesRoute >  <Tvshow /> </ProtectesRoute> },
        { path: "people", element: < ProtectesRoute >  <People/> </ProtectesRoute> },
        { path: "itemdetails/:id/:media_type", element: < ProtectesRoute><ItemDetails /></ProtectesRoute> },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { index: true, element: <Register /> },
        { path: "*", element: <Notfound /> },
      ]
    }
  ])

  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
