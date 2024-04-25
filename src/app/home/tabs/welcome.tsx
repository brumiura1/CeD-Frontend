"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from './welcome.module.scss'
import Image from 'next/image';
import DropdownComponent from '@/custom/dropdown/Dropdown';
import { AuthContext } from '@/app/contexts/auth.context';
import { redirect } from 'next/navigation';

import CustomTable from '../components/table/table';
import Dashboard from '../components/dashboard/dashboard';
import { User } from '@/app/interfaces/user.type';
import { doc, getDoc } from 'firebase/firestore';
import { Workshop } from '@/app/interfaces/workshop.type';


export default function Welcome() {

    const [workshops, setWorkshops] = useState<any>([]);
    const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);
    const { currentUser, db } = useContext(AuthContext);
    let userJson: any;
    userJson = JSON.parse(localStorage.getItem("user")!)

    async function getWorkshop(id: string) {
        const docRef = doc(db, "workshops", id);
        const data = (await getDoc(docRef)).data() as Workshop;
        setWorkshops([
            ...workshops,
            {
                label: data.company_name,
                key: data.id
            }
        ])
    }

    async function getWorks() {
        const works = (userJson.workshops?.forEach((item: string) => {
            getWorkshop(item)
        }))
    }

    useEffect(() => {
        getWorks();
    }, [])

    // useEffect(() => {
    //     console.log(currentUser)
    // }, [currentUser])

    const WelcomeImage = () => {
        return (
            <div className={styles.imageContainer}>
                <Image
                    src='/car_home1.png'
                    alt='Carro na Home Principal'
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'right 20% bottom 0' }}
                />
            </div>
        )
    }

    return (
        <div className={styles.pageWrap}>
            <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.rectangleContainer}>
                        <Image
                            src='/rectangle.png'
                            alt='Retângulo título'
                            fill
                            style={{ objectFit: 'cover' }} />
                    </div>
                    <h1 className={styles.mainTitle}>{`Olá, ${userJson.name}!`}</h1>
                </div>
                <p className={styles.subtext}>Gostaria de conferir o status da sua oficina?</p>
                <p className={styles.subtext}>Selecione alguma opção abaixo:</p>
                <div className={styles.dropdownContainer}>
                    <DropdownComponent
                        options={workshops}
                        placeholder='Selecione sua oficina'
                        value={selectedWorkshop}
                        onChange={(key) => { setSelectedWorkshop(key.toString()) }} />
                </div>
            </div>
            {selectedWorkshop ?
                <Dashboard
                    selectedWorkshop={selectedWorkshop} />
                :
                <WelcomeImage />
            }
        </div>
    )
}
function getWorks() {
    throw new Error('Function not implemented.');
}

