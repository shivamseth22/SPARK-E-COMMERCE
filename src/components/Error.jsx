import React from "react";
import { useRouteError } from "react-router-dom";
const Error =()=>{
    const err = useRouteError();
    console.log(err);
    console.log("shivam");
    return(
        <>
            <h1>Opss!!! page is not found    </h1>
            <h1>Or something is wrong</h1>
        </>
    )
}
export default Error;