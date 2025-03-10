import React from 'react'
import Hero from '../components/Hero'
import PizzaGuy from '@/components/PizzaGuy'
import HowToBuy from '@/components/HowToBuy'
import PizzaNomix from '@/components/PizzaNomics'
import ClickToEarn from '@/components/ClickToEarn'
import PeperuneyToons from '@/components/PeperuneyToons'

const page = () => {
  return (
    <div>
      <Hero />
      <PizzaGuy />
      <HowToBuy />
      <PizzaNomix />
      <ClickToEarn />
      <PeperuneyToons/>
    </div>
  )
}

export default page
