"use client"
import React from 'react'
import styles from './DriverCard.module.scss'
import { IoPersonCircle } from "react-icons/io5";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface DriverCardProps {
    name: string,
    email: string
}

function DriverCard(props: DriverCardProps) {

    const Arrow = () => (
        <svg className={styles.arrow} width="44" height="27" viewBox="0 0 44 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L22 22L41 3" stroke="#B0B0B0" strokeWidth="7" />
        </svg>
    )
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";



    return (
        <div>
            <Accordion className={styles.accordion}>
                <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1" className={styles.item}>
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2" className={styles.item}>
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3" className={styles.item}>
                    {defaultContent}
                </AccordionItem>
            </Accordion>
        </div>
        // <div className={styles.card}>
        //     <IoPersonCircle className={styles.personIcon} />
        //     <div className={styles.cardTextContainer}>

        //         <div className={styles.cardTextWrapper}><p className={styles.cardText}>{props.name}</p></div>
        //         <div className={styles.cardTextWrapper}><p className={styles.cardText}>{props.email}</p></div>
        //         <div className={styles.arrowWrapper}>
        //             <Arrow />
        //         </div>
        //     </div>
        // </div>
    )
}

export default DriverCard