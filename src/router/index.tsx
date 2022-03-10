import React, { Suspense, Fragment} from 'react';
import { useSelector } from 'react-redux';
import { history } from '../redux/store';
import { BrowserRouter, Routes, Route, RouteProps } from 'react-router-dom';
import { INavBar } from '../types/InavBar';
import Fallback from '../Components/General/Fallback';

// import HomePage from '../Pages/Home';
// import LogInPage from '../Pages/LogIn'


const HomePage = React.lazy( () => import('../Pages/Home'));
const LogInPage = React.lazy( () => import('../Pages/LogIn'))


function MainRouter () {

    const state = useSelector( state => state);
    console.log(state)


    return (
        <BrowserRouter>
            <Suspense fallback={<Fallback/>}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/LogIn' element={<LogInPage/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default MainRouter
