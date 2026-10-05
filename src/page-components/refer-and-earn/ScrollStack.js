'use client'
// import Image from 'next/image';
import './ScrollStack.css';

const ScrollStack = ({CardDataComponent, color, i}) => {

  return (
    <div className="cardContainer12">
      <div 
        className="card card12"
        style={{backgroundColor: color, top:`calc(-5vh + ${i * 20}px)`}}
      >
       <CardDataComponent />
      </div>
    </div>
  )
}

export default ScrollStack