import React from 'react'
import Book from './Book'
import "./Book.scss";
import { useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { paginationClasses } from '@mui/material';
const books = [{ id: crypto.randomUUID(), name: "When No One Is Watching", img: "/When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },
{ id: crypto.randomUUID(), name: "When No One Is Watching", img: "/When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },
{ id: crypto.randomUUID(), name: "When No One Is Watching", img: "/When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },
{ id: crypto.randomUUID(), name: "When No One Is Watching", img: "/When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },
{ id: crypto.randomUUID(), name: "When No One Is Watching", img: "/When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },


];

const BookSlider = () => {
    const [isHovered, setIsHovered] = useState(false);
    // const controls = useAnimation();
    const slideVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-100%",
            transition: {
                repeat: Infinity,
                duration: 50,
                repeatType: "mirror",
            }
        },
        hover: {
            x: 0
        },


    };
    return (
        <motion.div
            className='BookSlider'
            variants={slideVariants}
            initial="initial"

            animate={isHovered ? "hover" : "animate"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {
                books.map((p) => {
                    return <Book {...p} key={p.id} />
                })
            }



        </motion.div>
    )
}

export default BookSlider
