import styles from '../style/timeline.module.css';
import Timeline from '../components/timeline';
import React from 'react';

const Education =() =>{
  return(
    <div className={styles.whole}>
      <section id= {styles.timeline}>
        <Timeline title='University of Western Australia' degree='Master of Information Technology' degreeDes = 'Software requirement and design, software testing, agile web development, data analysis, cloud computing, machine learning' start = '02/2021' end= 'Present'/>
        <Timeline title='University of Western Australia' degree='Master of Infectious Diseases' degreeDes = 'Research design, thesis writing, immunology, microbiology' start ='02/2019' end='11/2020'/>
        <Timeline title='University of Western Australia' degree='Bachelor of Biomedical Science' degreeDes = 'Pharmacology, pathology, biochemistry' start = '02/2016' end='11/2018'/>
      </section>
    </div>
  )
};

export default Education;