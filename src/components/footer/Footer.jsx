import React from 'react'
import style from './footer.module.css'
import Logo from '../../../public/assets/logo-pizza.png'
import { UilFacebook, UilInstagram, UilLinkedin } from '@iconscout/react-unicons'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer ()
{

  const sizeIconsSocial = 45

  return (
    <div className={ style.container }>

      <div className={style.midiaFooter}>
        
        <h1>Mídia social</h1>
        <div className={ style.social }>
          <UilFacebook size={ sizeIconsSocial } />
          <UilLinkedin size={ sizeIconsSocial } />
          <UilInstagram size={ sizeIconsSocial } />
        </div>

      </div>

      <div className={ style.logo }>
        <Image
          src={ Logo }
          width={ 100 }
          height={ 100 }
          alt="Logo da empresa"
        />
        <span>Delicious</span>
      </div>


      <div className={ style.inforFooter } >
        <nav className='nav-logo'>
         
          <div className={ style.departamentos } >
          <h1>Departamentos</h1>
            <Link href="#">Home</Link>
            <Link href="#">Menu</Link>
            <Link href="#">Contato</Link>
          </div>

          <div className={ style.institucional } >
            <h1>Institucional</h1>
            <Link href="#">Código de defesa do consumidor</Link>
            <Link href="#">Política de Privacidade</Link>
            <Link href="#">Sobre Delicius</Link>
            <Link href="#">Nossa Cozinha</Link>
          </div>
        </nav>
        <div className={style.atendimento}>
          <h1>Atendimento</h1>
          <p>Horário de atendimento:</p>
          <p>17:00 às 00:00</p>
          <p>Terça a Domingo</p>
          <p>Telefone: (11) 2114-4444</p>
          <p>Whatsapp: (11) 99145-2255</p>
          <p>Endereço: <span>Av. Nova York, 1321</span></p>
          <p>São Paulo/SP - CEP: 14456-020</p>

        </div>

      </div>

    </div>
  )
}
