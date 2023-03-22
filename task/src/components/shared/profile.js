// import { Col, Image, Layout, Menu, Row, Space, Typography } from 'antd';
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Main from './main';
// const { Header, Content, Sider } = Layout;

// export const Profile = () => {
//     const param = useParams()

//     return (
//         <div className='flex'  >
//             <div >
//                 <Main id={param} />

//             </div>
//             <h1>profile</h1>
//         </div>
//     )
// }
import { Avatar, Col, Form, Image, Layout, Modal, Popconfirm, Row, Space, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Route, useParams } from "react-router-dom";
import Main from "./main";
// import { Posts } from "./Posts";
// import './Profile.css'

export const Profile = (props) => {

    return (
        <div  >
            <h1>Profile</h1>

        </div>
    )
}