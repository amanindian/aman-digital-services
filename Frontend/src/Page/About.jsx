import React from 'react'
import Welocme from '../Components/Welcome'
import Tabs from '../Components/Tabs'

export default function About() {
  return (
   <React.Fragment>
        <Welocme button={false}/>
        <Tabs/>
   </React.Fragment>
  )
}
