import { LeakRemove } from '@mui/icons-material'

import "./Book.scss";
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useRef } from "react";
import { animate, motion } from "framer-motion";
import BookSlider from './BookSlider';
// { id }, { name }, { img }, { desc }, { genre }

const Book = ({ id, img, name, desc, genre }) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);
    const ref = useRef()

    const variants = {
        initial: {
            rotate: 0,

        },


        animate: {
            rotate: 0,
        },


    }
    return (
        <motion.div
            className="BookBox"
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={variants}
        >
            <motion.div
                className="wrapp"
                variants={{
                    hover: { rotate: -10 }
                }}
            >
                <img src={img} alt="" />
            </motion.div>
            <div className='container' >
                <span className="title">

                    {name}
                </span>
                <p className="desription">
                    {desc}
                </p>
                <h3 className="genre">
                    {genre}
                </h3>
                <button className='btn'>
                    Read it now!
                </button>
            </div>

        </motion.div>


    )
}

export default Book
