import React from 'react'
import { Header } from '../components/Header/Header'

export const Main = () => {
  return (
    <main>
      <Header />
      <div className={styles.title}>
        <h4 className="caption">Smart Revolution</h4>
        <h1>Незабываемые перемены для вашего комфорта</h1>
        <button className='btn'>Узнать больше</button>
      </div>
      
    </main>
  );
}
