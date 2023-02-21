
import { useState } from 'react';

import React from "react";
//images
import img1 from '../assets/images/photo1.jpg';
import img2 from '../assets/images/photo2.jpg';
import img3 from '../assets/images/photo3.jpg';
import img4 from '../assets/images/photo4.jpg';
import img5 from '../assets/images/photo5.jpg';
import img6 from '../assets/images/photo6.jpg';
import team1 from '../assets/images/designers/team1.jpg';
import team2 from '../assets/images/designers/team2.jpg';
import team3 from '../assets/images/designers/team3.jpg';


import { Route, Routes } from 'react-router-dom';
import Contact from '../pages/contact';
import Designer from '../pages/designer';
import Footer from '../pages/footer';
import Header from '../pages/header';
import Home from '../pages/home';
import Service from '../pages/service';
import Showcase from '../pages/showcase';
import './style.scss';
import Package from "../pages/package";
import useLoader from "../hooks/useLoader";
import Loader from "../loader";

export const userContext = React.createContext()
function Router(){
    const [headCol,setHeadCole] = useState('#f44336')
    const {loading} = useLoader()
    if(loading){
        return <Loader color={headCol}/>
    }
    return (
        <userContext.Provider value={{
            headCol:[headCol,setHeadCole],
            showcaseImg:[
                {
                    id:Math.random(),
                    img:img1,
                },
                {
                    id:Math.random(),
                    img:img2,
                },
                {
                    id:Math.random(),
                    img:img3,
                },
                {
                    id:Math.random(),
                    img:img4,
                },
                {
                    id:Math.random(),
                    img:img5,
                },
                {
                    id:Math.random(),
                    img:img6,
                },
            ],
            person:[
                {
                    id:Math.random(),
                    name:'John Doe',
                    img:team2,
                    prof:'CEO & Founder',
                    text:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                },
                {
                    id:Math.random(),
                    name:'Jane Doe',
                    img:team1,
                    prof:'Designer',
                    text:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                },
                {
                    id:Math.random(),
                    name:'Mike Ross',
                    img:team3,
                    prof:'Architect',
                    text:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                },
            ],
            room:[
                {
                    id:Math.random(),
                    name:['#616161','Basic'],
                    floor:'Floorplanning',
                    hour:'10 hours support',
                    ptext:'Photography',
                    discount:'20% furniture discount',
                    deal:'Good deals',
                    per:199,
                    btnColor:'button-1',
                },
                {
                    id:Math.random(),
                    name:['#F44336','Pro'],
                    floor:'Floorplanning',
                    hour:'50 hours support',
                    ptext:'Photography',
                    discount:'50% furniture discount',
                    deal:'GREAT deals',
                    per:249,
                    btnColor:'button-2',
                }
            ]
        }}>
            <div 
                className='container' id="home"
            >
                <Header/>
                    <div className='container-right'>
                    <Routes>
                        <Route path='/company' index element={<Home/>} />
                        <Route path='/showcase' element={<Showcase/>} />
                        <Route path='/services' element={<Service/>} />
                        <Route path='/designers' element={<Designer/>} />
                        <Route path='/packages' element={<Package/>} />
                        <Route path='/contact' element={<Contact/>} />
                    </Routes>
                    </div>
                <Footer/>
                
            </div>
        </userContext.Provider>
    )
}
export default Router;