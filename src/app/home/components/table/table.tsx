"use client"
import React from 'react'
import styles from './table.module.scss'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

interface CustomTableProps {
    data: any[]
}

function CustomTable(props: CustomTableProps) {
    return (
        <Table aria-label="Maintenance info table" className={styles.table} id="maintenance-table">
            <TableHeader className={styles.header}>
                <TableColumn>Cliente</TableColumn>
                <TableColumn>Manutenção</TableColumn>
                <TableColumn>Data</TableColumn>
                <TableColumn>Agendamento</TableColumn>
            </TableHeader>
            <TableBody>
                {props.data.map((row, key) => (
                    <TableRow key={key}>
                        <TableCell className={styles.cell}>{row.client}</TableCell>
                        <TableCell className={styles.cell}>{row.maintenance}</TableCell>
                        <TableCell className={styles.cell}>{row.date}</TableCell>
                        <TableCell className={styles.cell}>
                            <button className={styles.scheduleBtn}>{row.appointment}</button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CustomTable