import styles from '../style/project.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';

const projects = [
  {
    title:"Web Development (Sudoku)",
    image: "sudoku.png",
    description:"Designed and coded a website (using CSS, Python, HTML, and JavaScript) where sudoku players could play and keep a record of their scores.",
    link:"http://sudoku-2022.herokuapp.com"
  },
  {
    title:"Data Analysis (Mine Injury)",
    image: "mine.png",
    description:"Performed data visualisation (using R) to discovery insights of the data. Built classification models to predict injuries. Utilised hierarchical clustering to explore data similarity.",
    link:"https://github.com/21982644/DataViz-model_building-R"
  },
  {
    title:"Data Analysis (CIFAR-10)",
    image: "dnn.png",
    description:"Built deep learning models (MLP and CNN using TensorFlow, Keras and Scikit-learn) for CIFAR-10 dataset.",
    link:"https://github.com/21982644/Machine-learning"
  }
]

const Project = () => {
  return (
    <div className= {styles.project} >
       {projects.map((project, key) => {
          return (
            <a href= { project.link } target="_blank" className= {styles.imgLink} key= {key}>
              <Card className= {styles.card} >
                <CardMedia
                    component="img"
                    height="300"
                    image={require(`../images/${project.image}`)}
                />
                <CardContent style= {{height:"150px"}}>
                    <h4>
                        {project.title}
                    </h4>
                    <p>
                        {project.description}
                    </p>
                </CardContent>
              </Card>
            </a>
            )
          })}
    </div>
  )
};

export default Project;
