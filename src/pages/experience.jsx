import styles from '../style/timeline.module.css';
import Timeline from '../components/timeline';
import React from 'react';

const Experience = () =>{
	const expDes = {
			cutomerSer: `• Negotiated conflict by providing clear information in a positive and personable manner and proposing a solution that is acceptable to customers.
			• Delivered exceptional customer service to every customer by leveraging extensive knowledge of products and services and creating welcoming, positive experiences.
			• Offered advice and assistance to customers, paying attention to special needs or wants.
			• Recommended products to customers, thoroughly explaining details.`,
			research: `• Gathered, arranged and corrected research data to create representative graphs and charts highlighting results for presentations. 
			• Planned, modified and executed research techniques, procedures and tests.	
			• Assessed data using scientific methods while following important specifications.
			• Completed research, compiled data, updated spreadsheets and produced timely reports.`,
		}

	return(
		<div className={styles.whole}>
			<section id= {styles.timeline}>
				<Timeline title='Shop Assistant' degree='TelecomExpert, Perth' degreeDes= { expDes.cutomerSer } start = '11/2018' end= '03/2022'/>
				<Timeline title='Research Intern' degree='UWA, Perth' degreeDes = { expDes.research } start ='02/2020' end='09/2020'/>
			</section>
	</div>
	)
};

export default Experience;