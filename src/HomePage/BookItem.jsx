import React from 'react';
import { motion } from "framer-motion";
import BookSlider from './BookSlider';
// import './BookItem.scss';
function BookItem({ id, img }) {
    return (
        <motion.div className="book"
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }}>
            <img src={img} alt="" />
        </motion.div>
    )
}

export default BookItem
