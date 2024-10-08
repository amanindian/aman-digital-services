import React from 'react'
import Welcome from '../Components/Welcome'
import Counter from '../Components/Counter'
import Tabs from '../Components/Tabs'
import FAQ from '../Components/FAQ'
import NewArrival from '../Components/NewArrival'

export default function Home() {
  return (  
   <React.Fragment>
    <Welcome button={true}/>
    <NewArrival />
    <Tabs/>
    <Counter/>
    <FAQ/>
   </React.Fragment>
  )
}
