"use client"
import clsx from 'clsx';
import { TbClockExclamation } from "react-icons/tb";
import { MdDirectionsCar } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import React, { useContext, useEffect, useState } from 'react'
import styles from "../../tabs/welcome.module.scss"
import CustomTable from '../table/table';
import CustomChart from '../chart/chart';

interface DashboardProps {
    selectedWorkshop: any;
}

export default function Dashboard(props: DashboardProps) {
    const columns = [
        {label: "Cliente", value:"client"},
        {label: "Veículo", value:"vehicle"},
        {label: "Manutenção", value:"maintenance"},
        {label: "Km atual", value:"km_current"},
        {label: "Km limite", value:"km_threshold"},
        {label: "Data limite", value:"date_threshold"},
        {label: "Status", value:"status"},
        {label: "Agendamento", value:"appointment"},
    ]

    const mockData = [
        {
            client: "José",
            vehicle: "Fiat Uno",
            maintenance: "Revisão",
            km_current: "9500",
            km_threshold: "10000",
            date_threshold: "10/06/2024",
            status: "Próxima",
            appointment: "Agendar"
        }
    ]

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
                <CustomTable data={mockData}/>
            </div>
        </div>
    );
}