import { useEffect } from "react";
import Additem from "../components/Additem";
import Navbar from "../components/Navbar";


export default function Addpage() {
    useEffect(()=>{
        document.body.style.backgroundColor = "#F8F9FA";
    })
    return (
        <>
            <Navbar />
            <Additem />
        </>
    )
}
