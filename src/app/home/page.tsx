import React from 'react'
import styles from './styles.module.scss';
import Navbar from '@/app/components/navbar/Navbar';
import Welcome from './tabs/welcome';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  );
}


export default Home