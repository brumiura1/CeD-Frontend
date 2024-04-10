"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from './welcome.module.scss'
import Image from 'next/image';
import DropdownComponent from '@/custom/dropdown/Dropdown';
import { AuthContext } from '@/app/contexts/auth.context';
import { redirect } from 'next/navigation';

import CustomTable from '../components/table/table';
import Dashboard from '../components/dashboard/dashboard';


export default function Welcome() {

    const [workshops, setWorkshops] = useState<any>([]);
    const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        setWorkshops([
            { label: "Geral", key: "Geral" },
            { label: "Oficina 1", key: "Oficina 1" }
        ])
    }, [])

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
                    <h1 className={styles.mainTitle}>Olá, Fulano!</h1>
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
