"use client"
import clsx from 'clsx';
import { TbClockExclamation } from "react-icons/tb";
import { MdDirectionsCar } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import React, { useContext, useEffect, useState } from 'react'
import styles from "../../tabs/welcome.module.scss"
import CustomTable from '../table/table';
import CustomChart from '../chart/chart';
import { AuthContext } from '@/app/contexts/auth.context';
import { Timestamp, doc, getDoc } from 'firebase/firestore';
import { Workshop } from '@/app/interfaces/workshop.type';
import { AppUser } from '@/app/interfaces/appUser.type';
import { Button } from '@nextui-org/react';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
interface DashboardProps {
    selectedWorkshop: any;
}

interface Client {
    uid: string,
    email: string,
    preferred_workshop: string,
    name: string,
    phone: string,
    createdAt: Timestamp,
    type: string,
    vehicles: {
        id: string,
        obd2_mac?: string,
        gps_mac?: string,
        initial_km: number,
        vin?: string,
        gas_capacity?: number,
    }[]
}

export default function Dashboard(props: DashboardProps) {
    const { db } = useContext(AuthContext);
    const columns = [
        { label: "Cliente", value: "client" },
        { label: "Manutenção", value: "maintenance" },
        { label: "Data", value: "date" },
        { label: "Agendamento", value: "appointment" },
    ]

    async function getClient(uid: string) {
        const clientRef = doc(db, "appUsers", uid);
        const client = (await getDoc(clientRef)).data() as AppUser;

    }

    async function getClients() {
        const docRef = doc(db, "workshops", props.selectedWorkshop);
        const workshop = (await getDoc(docRef)).data() as Workshop;
        workshop.clients.forEach((item) => {
            getClient(item)
        })
    }

    useEffect(() => {

    }, [])

    const mockData = [
        {
            client: "José",
            maintenance: "Revisão",
            date: '22/05/2024',
            appointment: "Agendar"
        }
    ]

    function exportPDF() {
        const doc = new jsPDF();
        autoTable(doc, {html: '#maintenance-table'})
        // autoTable(doc, {
        //     head:[['Cliente', 'Manutenção', 'Data']],
        //     body:[
        //         ['Teste', 'Revisão', '27/06/2024']
        //     ]
        // });
        doc.save('table.pdf')
    }

    function sendEmail() {

    }

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardTitleContainer}>
                <h2 className={styles.dashboardTitle}>{props.selectedWorkshop}</h2>
                <p className={styles.dashboardText}>Confira as informações referentes à sua oficina nas seções a seguir.</p>
            </div>
            <div className={styles.graphicsContainer}>
                <div className={styles.chartBox}>
                    <h4 className={styles.boxText}>Porcentagem de manutenções</h4>
                    <CustomChart />
                </div>
                <span style={{ width: "3em" }} />
                <div className={styles.statisticsBox}>
                    <h4 className={styles.boxText}>Outros dados</h4>
                    <div className={clsx(styles.statisticsCard, styles.maintenanceCard)}>
                        <div className={styles.statWrap}>
                            <TbClockExclamation className={styles.statisticsIcon} />
                            <h4 className={styles.statisticsText}>22</h4>
                        </div>
                        <p className={styles.statisticsSubtext}>manutenções pendentes</p>
                    </div>
                    <div className={clsx(styles.statisticsCard, styles.vehiclesCard)}>
                        <div className={styles.statWrap}>
                            <MdDirectionsCar className={styles.statisticsIcon} />
                            <h4 className={styles.statisticsText}>55</h4>
                        </div>
                        <p className={styles.statisticsSubtext}>veículos monitorados</p>
                    </div>
                    <div className={clsx(styles.statisticsCard, styles.kmCard)}>
                        <div className={styles.statWrap}>
                            <MdOutlineSpeed className={styles.statisticsIcon} />
                            <h4 className={styles.statisticsText}>38.489</h4>
                        </div>
                        <p className={styles.statisticsSubtext}>km monitorados</p>
                    </div>
                </div>
            </div>
            <div className={styles.tableContainer}>
                <CustomTable data={mockData} />
            </div>
            <div className={styles.buttonsWrap}>
                <Button className={styles.button} onClick={exportPDF}>
                    Exportar PDF
                </Button>
                <Button className={styles.button} onClick={sendEmail}>
                    Enviar por Email
                </Button>
            </div>
        </div>
    );
}