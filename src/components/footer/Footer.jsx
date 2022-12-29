import React from 'react'
import style from './footer.module.css'
import Logo from '../../../public/assets/logo-pizza.png'
import { UilFacebook, UilInstagram, UilLinkedin } from '@iconscout/react-unicons'
import Image from 'next/image'

export default function Footer() {

  const sizeIconsSocial = 45

  return (
    <div className={style.container}>
      <span>Todos os Direitos Reservados</span>
      <div className={style.social}>
        <UilFacebook size={sizeIconsSocial} color="red" />
        <UilLinkedin size={sizeIconsSocial} />
        <UilInstagram size={sizeIconsSocial} />
      </div>
      <div className={ style.logo }>
      <Image src={ Logo } width={ 100 } height={ 100 } alt="Logo da empresa" />
      <span>Delicius</span>
    </div>
    </div>
  )
}
