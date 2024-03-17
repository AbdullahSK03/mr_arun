import React from 'react'
import Image from 'next/image'

const Hero = (props) => {
  return (
    <div className={props.className} id='home'>
        <div className=" hero-text justify-center align-middle flex-1 relative">
        <h2 className='text-2xl font-bold'>
        Welcome to the nexus of narrative and truth, where decades of journalistic integrity meet the digital age.
        </h2>
        </div>
        <div className="flex-1 relative">
        <Image className='hero-img' src={"/hero.png"} height={450} width={480}/>
        </div>
    </div>
  )
}

export default Hero