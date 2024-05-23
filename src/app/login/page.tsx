"use client"
import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss';
import Image from 'next/image'
import { Input } from "@nextui-org/react";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import { AuthContext } from '../contexts/auth.context';
import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa6';

const Login = () => {

    const { login, currentUser, googleLogin } = useContext(AuthContext);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [emailValid, setEmailValid] = useState<boolean>(true);
    const [passwordValid, setPasswordValid] = useState<boolean>(true);
    const router = useRouter();

    const HR = () => {
        return (
            <svg className={styles.hr} width="242" height="6" viewBox="0 0 242 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="242" y="5.47058" width="242" height="5.47059" transform="rotate(180 242 5.47058)" fill="url(#paint0_linear_126_156)" />
                <defs>
                    <linearGradient id="paint0_linear_126_156" x1="481.092" y1="7.83253" x2="249.684" y2="-23.5844" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#50CB61" />
                        <stop offset="1" stopColor="#004509" />
                    </linearGradient>
                </defs>
            </svg>)
    }

    async function handleLogin() {
        if (validateFields()) {
            try {
                await login(email!, password!);
                router.replace('/home');
            } catch (err) {
                setEmailValid(false);
                setPasswordValid(false);
            }
        }
    }

    function validateFields() {
        if (!email) {
            setEmailValid(false);
            return false;
        }
        if (!password) {
            setPasswordValid(false);
            return false;
        }
        return true;
    }

    async function handleGoogleLogin() {
        try {
            await googleLogin();
            router.replace('/home');
        } catch (err) {
            console.log("Error on google auth")
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.imageContainer}>
                <Image
                    src='/car_background1.png'
                    alt='Carro na Página de Login'
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.logoContainer}>
                    <Image
                        src='/logo1.png'
                        alt='Logotipo Carro em Dados'
                        fill
                        style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Bem-vindo!</h1>
                    <HR />
                </div>
                {/* <form onSubmit={(e)=> {e.preventDefault; handleLogin();}}> */}
                    <h2 className={styles.infoLabel}>Email</h2>
                    <Input value={email} onValueChange={(value) => setEmail(value)}
                        type="email" placeholder="Digite seu email" variant="bordered" isInvalid={!emailValid} className={styles.input}
                        endContent={<MdOutlineMailOutline style={{ fontSize: "1.8em" }} />} />
                    <h2 className={styles.infoLabel}>Senha</h2>
                    <Input value={password} onValueChange={(value) => setPassword(value)}
                        type="password" placeholder="Digite sua senha" variant="bordered" isInvalid={!passwordValid} className={styles.input}
                        endContent={<MdLockOutline style={{ fontSize: "1.8em" }} />} />
                    <Button color="success" className={styles.button} onClick={handleLogin}>
                        ENTRAR
                    </Button>
                    {/* <input type="submit" value="Submit" />
                </form> */}
                <div className={styles.googleContainer}>
                    <div className={styles.googleTitleContainer}>
                        <span className={styles.horizontalLine}></span>
                        <p className={styles.googleLoginText}>Ou continue com:</p>
                        <span className={styles.horizontalLine}></span>
                    </div>

                    <Button className={styles.googleBtn} onClick={handleGoogleLogin}>
                        <FaGoogle className={styles.googleIcon} /></Button>
                </div>
                {/* <div className={styles.recoveryContainer}>
                    <p className={styles.text}>Esqueceu a senha?</p> <span style={{ marginRight: "0.5em" }} />
                    <Link href="" className={styles.link}>Clique aqui!</Link>
                </div> */}
            </div>
        </div>
    );


}


export default Login