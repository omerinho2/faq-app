import React from 'react'

export default function Accordion({title,active,setActive}) {
  return (
    <div className='accordion'>
      <div className='accordionHeading'>
        <div className='container'>
            <p>{title}</p>
            <span onClick={()=> setActive(title)}>CLİCK ME</span>
        </div>
      </div>
      <div className={(active===title ? "show" : "")+ "accordionContent"}>
        <div className='container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis cursus tincidunt. Nam sed nulla eleifend, viverra leo eu, porttitor felis. Quisque eu est id enim condimentum consequat. Mauris venenatis quis arcu sodales tempor. Fusce pretium posuere eros eget sodales. Curabitur lacinia ut urna sed sollicitudin. Nunc ut sem tellus.</p>
        </div>
      </div>
    </div>
  )
}
