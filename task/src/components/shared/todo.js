import React from "react";
import { useParams } from "react-router-dom";
import Main from "./main";

export const Todo = () => {
    const param = useParams()

    return (
        <div className='flex'  >
        <div >

        </div>
        <h1>Todo</h1>
    </div>
    )
}