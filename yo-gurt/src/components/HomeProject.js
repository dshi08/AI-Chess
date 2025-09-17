import React from 'react'
import './HomeProject.css'
import CardItem from './CardItem'

function HomeProject() {

  return (
    <div className = 'home-cards'>
        <h1>Build Impressive Projects</h1>
        <h2>With zero experience</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/yolo-5.png' 
                    label='Skeleton Project'
                    text='Labeling done by YOLO-5 a computer vision algorithm'
                    path='https://colab.research.google.com/drive/1il8ZUmbvQlxN_ACXs8kOTQbm1qIzoo0V'
                    />
                    <CardItem
                    src='/images/plant-disease.png' 
                    label='Finished Project'
                    text='Using a fine-tuned ResNet18, a convolutional neural network (CNN), the model was able to detect plant diseases with 99.7% accuracy'
                    path='https://colab.research.google.com/drive/1Ph_PLu97_bUQMI5iP40OD8Sk6Tp-pEvs?usp=sharing'
                    />
                    <CardItem
                    src='/images/shakespeare.png' 
                    label='Skeleton Project'
                    text='Using Recurrent Neural Networks (RNNs) the model was able to generate shakespearean like text.'
                    path='https://colab.research.google.com/drive/1tG0HFmAvxklnu-lxXLe_zEWPeh--IfDm?usp=sharing'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default HomeProject;
