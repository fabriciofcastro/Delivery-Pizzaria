import style from './header.module.css'
import Logo from '../../../public/assets/Logo-pizza.png'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UilShoppingBag } from '@iconscout/react-unicons'

export default function Header ()
{
  return (
    <header className={ style.header }>
      <div className={ style.logo }>
        <Image src={ Logo } width={ 100 } height={ 100 } alt="Logo da empresa" />
        <span>Delicius</span>
      </div>
      <nav className={ style.menu }>
        <Link href='/' >Home</Link>
        <Link href='menu'>Menu</Link>
        <Link href='contato'>Contato</Link>
      </nav>
      <div className={ style.rightSide }>
        <div className={ style.cart }>
          <UilShoppingBag size={ 35 } color="#2E2E2E" />
          <div className={ style.badge } >1</div>
        </div>
      </div>

    </header>
  )
}
