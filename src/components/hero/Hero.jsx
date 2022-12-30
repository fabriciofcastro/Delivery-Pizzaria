import Image from 'next/image'
import React from 'react'
import style from './hero.module.css'
import entregaNinja from '../../../public/assets/entraga-ninja.png'
import HeroImage from '../../../public/assets/HeroImage.png'
import {uilPhone} from '@iconscout/react-unicons'
import Pizza from '../../../public/assets/p1.jpg'

export default function Hero ()
{
  return (
    <div className={ style.container }>

      <div className={ style.left }>
        <div className={ style.ninjaDiv }>
          <span className=''>Entraga ninja ultra rápido</span>
          <Image src={ entregaNinja } width={ 70 } height={ 80 } alt="entrega ninja ultra rápida" />
        </div>


        <div className={ style.heroText }>
          <span>Entraga ninja</span>
          <span>Piscou chegou!</span>
          <span>Sua <span style={ { color: "var(--themeRed)" } }>pizza</span> super quente</span>
        </div>

        <span className={ style.miniText }>
          <p>
            nossa missão é encher sua barriga com comida  
            deliciosa e com entrega grátis
          </p>
        </span>

        <button className={`btn ${style.btn}`}>
          Iniciar
        </button>

      </div>


      <div className={ style.right } >
        <div className={style.imageContainer} >
         <Image src={HeroImage} alt="mulher comendo pedaço de pizza" layout='intrinsic'/>
        </div>

        <div className={style.contatos} >
        <span>Contato</span>
        <div>
        <uilPhone /></div>
        </div>

      </div>
    </div>
  )
}
