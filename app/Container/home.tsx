import React from 'react'
// import Intro from './intro'
import Introduc from './introduc'
import Details from  '@/app/Container/details'
function home() {
  return (
    <div className=' flex flex-col md:flex-row mt-[100px] items-start w-[95%] mx-auto justify-start'>
      <Introduc></Introduc>
      <Details></Details>
    </div>
  )
}

export default home
