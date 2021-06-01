import React, {useState} from 'react'
import { Footer } from '../components/Footer'
import { HeroSection } from '../components/HeroSection'
import { Navbar } from '../components/Navbar'
import Pricing from '../components/Pricing/Pricing'
import { Sidebar } from '../components/Sidebar'

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle= ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection/>
            <Pricing/>
            <Footer/>
        </>
    )
}
