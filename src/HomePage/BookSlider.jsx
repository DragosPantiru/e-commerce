import React from 'react'
import Book from './Book'
import "./Book.scss";
import { useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { paginationClasses } from '@mui/material';
const books = [{ id: crypto.randomUUID(), name: "When No One Is Watching", img: "./When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },
{ id: crypto.randomUUID(), name: "All the walls of belfast", img: "./novel1.png", desc: "The Carnival at Bray meets West Side Story in Sarah Carlson's powerful YA debut; set in post-conflict Belfast (Northern Ireland), alternating between two teenagers, both trying to understand their past and preserve their future. ", genre: "Novels" },
{ id: crypto.randomUUID(), name: "Cultura", img: "./history1.png", desc: "Martin Puchner arată cum, secole la rând, diverse forme de artă au traversat continentele pentru a produce capodopere. ", genre: "History" },
{ id: crypto.randomUUID(), name: "Ca intr-o povestire de Carver", img: "./poetry.png", desc: "Experiența paternității întâlnește noul ruralism într-un volum care înregistrează unele note mai reflexive și poate mai lirice decât ne-a obișnuit Mihai Duțescu până acum. ", genre: "Poetry" },
{ id: crypto.randomUUID(), name: "O femeie puternica", img: "./biography1.png", desc: "În adolescență, după ce a citit despre autism, Fern Brady și-a dat repede seama că și ea suferă de această tulburare. S-a dus la un medic să-i spună bănuiala ei, dar concluzia lui a fost că se înșală. ", genre: "Biography" },
{ id: crypto.randomUUID(), name: "When No One Is Watching", img: "./When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },
{ id: crypto.randomUUID(), name: "When No One Is Watching", img: "./When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },
{ id: crypto.randomUUID(), name: "All the walls of belfast", img: "./novel1.png", desc: "The Carnival at Bray meets West Side Story in Sarah Carlson's powerful YA debut; set in post-conflict Belfast (Northern Ireland), alternating between two teenagers, both trying to understand their past and preserve their future. ", genre: "Novels" },
    // { id: crypto.randomUUID(), name: "Cultura, Surprinzatoarele conexiuni si influente dintre civilizatii", img: "/history1.png", desc: "Martin Puchner arată cum, secole la rând, diverse forme de artă au traversat continentele pentru a produce capodopere. ", genre: "History" },
    // { id: crypto.randomUUID(), name: "Ca intr-o povestire de Carver", img: "/poetry.png", desc: "Experiența paternității întâlnește noul ruralism într-un volum care înregistrează unele note mai reflexive și poate mai lirice decât ne-a obișnuit Mihai Duțescu până acum. ", genre: "Poetry" },
    // { id: crypto.randomUUID(), name: "O femeie puternica", img: "/biography1.png", desc: "În adolescență, după ce a citit despre autism, Fern Brady și-a dat repede seama că și ea suferă de această tulburare. S-a dus la un medic să-i spună bănuiala ei, dar concluzia lui a fost că se înșală, așa că a primit diagnosticul de autism abia la vârsta de treizeci și patru de ani. ", genre: "Biography" },
    // { id: crypto.randomUUID(), name: "When No One Is Watching", img: "/When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },
    // { id: crypto.randomUUID(), name: "When No One Is Watching", img: "/When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },
    // { id: crypto.randomUUID(), name: "All the walls of belfast", img: "/novel1.png", desc: "The Carnival at Bray meets West Side Story in Sarah Carlson's powerful YA debut; set in post-conflict Belfast (Northern Ireland), alternating between two teenagers, both trying to understand their past and preserve their future. Seventeen-year-olds, Fiona and Danny must choose between their dreams and the people they aspire to be. ", genre: "Novels" },
    // { id: crypto.randomUUID(), name: "Cultura, Surprinzatoarele conexiuni si influente dintre civilizatii", img: "/history1.png", desc: "Martin Puchner arată cum, secole la rând, diverse forme de artă au traversat continentele pentru a produce capodopere. ", genre: "History" },
    // { id: crypto.randomUUID(), name: "Ca intr-o povestire de Carver", img: "/poetry.png", desc: "Experiența paternității întâlnește noul ruralism într-un volum care înregistrează unele note mai reflexive și poate mai lirice decât ne-a obișnuit Mihai Duțescu până acum. ", genre: "Poetry" },
    // { id: crypto.randomUUID(), name: "O femeie puternica", img: "/biography1.png", desc: "În adolescență, după ce a citit despre autism, Fern Brady și-a dat repede seama că și ea suferă de această tulburare. S-a dus la un medic să-i spună bănuiala ei, dar concluzia lui a fost că se înșală, așa că a primit diagnosticul de autism abia la vârsta de treizeci și patru de ani. ", genre: "Biography" },
    // { id: crypto.randomUUID(), name: "When No One Is Watching", img: "/When No One Is Watching.png", desc: "Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight ", genre: "Detective" },


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
