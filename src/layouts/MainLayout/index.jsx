import React from "react";
import HeaderComponent from "../../components/HeaderComponents";
import SideBar from "../../components/SideBar";
import './style.scss'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
    return (
        <div className="main-layout-container">
            <HeaderComponent />
            <div className="main-layout-container__content">
                <SideBar />
                <div className="right-side">
                <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout