'use client'

import { useEffect } from "react"

import AOS from "aos";
import "aos/dist/aos.css";

export default function ActiveFrames() {
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <></>
    )
}
