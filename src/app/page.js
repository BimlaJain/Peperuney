import React from 'react'
import Hero from '../components/Hero'
import PizzaGuy from '@/components/PizzaGuy'
import HowToBuy from '@/components/HowToBuy'
import PizzaNomix from '@/components/PizzaNomics'

const page = () => {
  return (
    <div>
      <Hero />
      <PizzaGuy />
      <HowToBuy />
      <PizzaNomix/>
    </div>
  )
}

export default page
