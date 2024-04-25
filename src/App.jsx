import React from 'react'
import { Main } from './sections/Main'
import { Opportunities } from './sections/Opportunities'
import { Slider } from './sections/Slider'
import { Scenarios } from './sections/Scenarios'
import { QA } from './sections/QA'
import { Footer } from './sections/Footer'
import { Calculator } from './sections/Calculator'
function App() {
  return (
    <>
    <Main/>
    <Opportunities/>
    <Slider/>
    <Scenarios/>
    <Calculator />
    <QA/>
    <Footer/>
    </> 
  )
}

export default App