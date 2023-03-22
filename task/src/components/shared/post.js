import React from "react";
import { useParams } from "react-router-dom";
import Main from "./main";

export const Post = () => {
    const param = useParams()

    return (
        <div className='flex'  >
        <div >

        </div>
        <h1>Post</h1>
    </div>
    )
}