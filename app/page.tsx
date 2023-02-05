'use client'

import {useState, useRef} from 'react';
import Form from './components/form/form';
import Subs from './components/subs/Subs';

import {Sub} from './types'


interface AppState {
  subs: Sub[]
  newSubsNumber: number
}

export default function Home() {

  const [subs , setSubs] = useState<AppState["subs"]>([
    {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
    },
    {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
    description: 'Sergio de moderador a veces'
    },
  ]
  )
  const divRef = useRef<HTMLDivElement>(null)

  const handleNewSub = (newSub: Sub):void =>{
    setSubs(subs => [... subs , newSub])
  }

  return (
    <main>
      <h1 className='text-center p-10 text-xl text-orange-300'>Aplicación de subscripción! TailWindCSS , DaisyUI , Next13 , Typescript5</h1>
      <div ref={divRef}>
        <Subs subs={subs}/>
        <Form onNewSub={handleNewSub}/>
      </div>
    </main>
  )
}
