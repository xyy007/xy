import styles from '../style/timeline.module.css'
import React from 'react';

export default function Timeline(props) {
    return (
        <article>
        <div className= {styles.inner}>
          <span class={styles.date}>
            <span class={styles.month}> {props.start}</span>
            <span class={styles.year}>-</span>
            <span class={styles.month}>{props.end}</span>
          </span>
          <h2> {props.title} </h2>
          <p style={{ whiteSpace: 'pre-line'}}><strong> { props.degree }</strong><br></br>
              { props.degreeDes }
          </p>
        </div>
      </article>
    )   
}
