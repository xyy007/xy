import styles from '../style/home.module.css';
import cv from './resume.pdf';
import React from 'react';

const Home = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.about}>
        <p style={{fontSize:20}}>_____ Xiaoyu Yin _____</p>
        <p>
          Skilled multitasker with superior work ethic and good teamwork, problem-solving and organizational skills.
          Willing to take on any task to help team. Reliable and dedicated team player with hardworking and resourceful approach.
        </p>
      </div>
    <div className={styles.share}>
      <a href={cv} download='xiaoyu_resume.pdf' className={styles.download}>Download CV</a>
    </div>
    <div className={styles.share + ' ' + styles.contact}>
      <a href="https://www.linkedin.com/in/xiaoyu-yin-a51032181" rel="noreferrer" className={styles.download} target='_blank'>Contact</a>
    </div>

    </div>
  )
};

export default Home; 