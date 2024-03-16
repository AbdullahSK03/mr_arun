import React from 'react'

const HeaderNav = (props) => {
  return (
    <div className={`${props.className} mb-6 flex`}>
        <h1 className='text-3xl font-bold'>Mr. Arun</h1>
        <div className='ms-auto'>
            <button className='btn btn-primary m-2'>About</button>
            <button className='btn btn-primary m-2'>Course</button>
            <button className='btn btn-primary m-2'>Contact</button>
        </div>
    </div>
  )
}

export default HeaderNav