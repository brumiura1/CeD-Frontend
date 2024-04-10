"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Image from 'next/image'
import { Tabs, Tab, Card, CardBody, Button, useDisclosure } from "@nextui-org/react";
import DriverCard from './driverCard/DriverCard';
import { MdLibraryAdd } from "react-icons/md";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import clsx from 'clsx';
interface IDriver {
    name: string,
    email: string,
    birth: any,
    age: string,
    gender: string,
    address: string,
    commercialAddress?: string;
    phone: string;
    cnh: string;
}

const Register = () => {

    const mockDrivers: IDriver[] = [
        {
            name: "Temp",
            email: "temp@temp.com",
            birth: "01/01/2024",
            age: "23",
            gender: "Masculino",
            address: "Av Brigadeiro Faria Lima, 1234",
            phone: "(11) 99999-9999",
            cnh: "1090984471"
        }
    ]

    const [drivers, setDrivers] = useState<IDriver[]>(mockDrivers);
    const [organizations, setOrganizations] = useState([]);
    const [users, setUsers] = useState([]);
    const [driverModal, setDriverModal] = useState(false);

    const DriverModal = () => {
        const { isOpen, onOpen, onOpenChange } = useDisclosure();
        return (
            <>
                <Button color="success" className={styles.button} onPress={onOpen}>
                    <MdLibraryAdd className={styles.addIcon} />
                    Adicionar motorista
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} className={styles.modal} size='2xl'>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className={clsx('flex flex-col gap-1', styles.modalTitle)}>Adicionar Motorista</ModalHeader>
                                <ModalBody>
                                    <div className={styles.form}>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Nome' />
                                            <span className={styles.horizontalSpace} />
                                            <input className={styles.modalInput}
                                                placeholder='Sobrenome' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Data de Nascimento' />
                                            <span className={styles.horizontalSpace} />
                                            <input className={styles.modalInput}
                                                placeholder='Gênero' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='E-mail' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Celular' />
                                            <span className={styles.horizontalSpace} />
                                            <input className={styles.modalInput}
                                                placeholder='Telefone' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Endereço' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Registro' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='CNH' />
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button color="success" className={styles.modalButton} onPress={onClose}>
                                        Adicionar
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        )
    }

    const VehicleModal = () => {
        const { isOpen, onOpen, onOpenChange } = useDisclosure();
        return (
            <>
                <Button color="success" className={styles.button} onPress={onOpen}>
                    <MdLibraryAdd className={styles.addIcon} />
                    Adicionar veículo
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} className={styles.modal}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className={clsx('flex flex-col gap-1', styles.modalTitle)}>Adicionar Veículo</ModalHeader>
                                <ModalBody>
                                    <div className={styles.form}>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Fabricante' />
                                            <span className={styles.horizontalSpace} />
                                            <input className={styles.modalInput}
                                                placeholder='Modelo' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Placa' />
                                            <span className={styles.horizontalSpace} />
                                            <input className={styles.modalInput}
                                                placeholder='Ano' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Odômetro' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Chassi' />
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button color="success" className={styles.modalButton} onPress={onClose}>
                                        Adicionar
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>

        )
    }

    const OrganizationModal = () => {
        const { isOpen, onOpen, onOpenChange } = useDisclosure();
        return (
            <>
                <Button color="success" className={styles.button} onPress={onOpen}>
                    <MdLibraryAdd className={styles.addIcon} />
                    Adicionar organização
                </Button>
                <Modal isOpen={isOpen} className={styles.modal} size={"2xl"} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className={clsx('flex flex-col gap-1', styles.modalTitle)}>Adicionar Organização</ModalHeader>
                                <ModalBody>
                                    <div className={styles.form}>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Nome Fantasia' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='N° Contrato' />
                                            <span className={styles.horizontalSpace} />
                                            <input className={styles.modalInput}
                                                placeholder='N° Cadastro' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Razão Social' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='CNPJ' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Inscrição Estadual' />
                                            <span className={styles.horizontalSpace} />
                                            <input className={styles.modalInput}
                                                placeholder='Inscrição Municipal' />
                                        </div>
                                        <h2 className={styles.modalLabel}>Tipo de perfil</h2>
                                        <RadioGroup orientation="horizontal" color="success">
                                            <Radio value="basic">
                                                <p className={styles.modalText}>Básico</p>
                                            </Radio>
                                            <span className={styles.horizontalSpace} />
                                            <Radio value="custom">
                                                <p className={styles.modalText}>Customizado</p>
                                            </Radio>
                                        </RadioGroup>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button color="success" className={styles.modalButton} onPress={onClose}>
                                        Adicionar
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>

        )
    }

    const UserModal = () => {
        const { isOpen, onOpen, onOpenChange } = useDisclosure();
        return (
            <>
                <Button color="success" className={styles.button} onPress={onOpen}>
                    <MdLibraryAdd className={styles.addIcon} />
                    Adicionar usuário
                </Button>
                <Modal isOpen={isOpen} className={styles.modal} size={"lg"} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className={clsx('flex flex-col gap-1', styles.modalTitle)}>Adicionar Usuário</ModalHeader>
                                <ModalBody>
                                    <div className={styles.form}>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Nome' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Sobrenome' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='E-mail' />
                                        </div>
                                        <div>
                                            <input className={styles.modalInput}
                                                placeholder='Função' />
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button color="success" className={styles.modalButton} onPress={onClose}>
                                        Adicionar
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>

        )
    }

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.pageWrap}>
                <div className={styles.rectangleContainer}>
                    <Image
                        src='/rectangle.png'
                        alt='Retângulo título'
                        fill
                        style={{ objectFit: 'cover' }} />
                </div>
                <h1 className={styles.mainTitle}>Cadastramento</h1>
                <p className={styles.subtext}>Adicione usuários, organizações e veículos</p>
                <Tabs aria-label="config-tabs" className={styles.tabs}>
                    <Tab className={styles.tabButton} key="drivers" title="Motoristas">
                        <div className={styles.driverTab}>
                            {drivers.map((driver, key) => (
                                <DriverCard key={key}
                                    email={driver.email}
                                    name={driver.name}
                                    age={driver.age}
                                    birth={driver.birth}
                                    gender={driver.gender}
                                    address={driver.address}
                                    phone={driver.phone}
                                    cnh={driver.cnh} />
                            ))}
                            <div className={styles.buttonContainer}>
                                <DriverModal />


                            </div>
                        </div>
                    </Tab>
                    <Tab className={styles.tabButton} key="organizations" title="Organizações">
                        <div className={styles.driverTab}>
                            {drivers.map((driver, key) => (
                                <DriverCard key={key}
                                    email={driver.email}
                                    name={driver.name}
                                    age={driver.age}
                                    birth={driver.birth}
                                    gender={driver.gender}
                                    address={driver.address}
                                    phone={driver.phone}
                                    cnh={driver.cnh} />
                            ))}
                            <div className={styles.buttonContainer}>
                                <OrganizationModal />
                            </div>
                        </div>
                    </Tab>
                    <Tab className={styles.tabButton} key="users" title="Usuários">
                        <div className={styles.driverTab}>
                            {drivers.map((driver, key) => (
                                <DriverCard key={key}
                                    email={driver.email}
                                    name={driver.name}
                                    age={driver.age}
                                    birth={driver.birth}
                                    gender={driver.gender}
                                    address={driver.address}
                                    phone={driver.phone}
                                    cnh={driver.cnh} />
                            ))}
                            <div className={styles.buttonContainer}>
                                <UserModal />


                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <Footer />
        </div >
    );
}

export default Register;