import React from 'react'
import SolutionsText from './SolutionsText'
import SolutionsCard from './SolutionsCard'

const Solutions = () => {
  return (
    <div className=' w-full solutionsWrapper relative '>
        <SolutionsText/>

        <SolutionsCard side={'left'} title={"Smart Contract"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sapiente praesentium, harum placeat veniam inventore, quasi accusantium molestiae cumque tempore perspiciatis laborum laudantium."}/>
        <SolutionsCard side={'right'} title={"Smart Contract"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sapiente praesentium, harum placeat veniam inventore, quasi accusantium molestiae cumque tempore perspiciatis laborum laudantium."}/>
        <SolutionsCard side={'left'} title={"Smart Contract"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sapiente praesentium, harum placeat veniam inventore, quasi accusantium molestiae cumque tempore perspiciatis laborum laudantium."}/>
        <SolutionsCard side={'right'} title={"Smart Contract"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sapiente praesentium, harum placeat veniam inventore, quasi accusantium molestiae cumque tempore perspiciatis laborum laudantium."}/>
        <SolutionsCard side={'left'} title={"Smart Contract"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sapiente praesentium, harum placeat veniam inventore, quasi accusantium molestiae cumque tempore perspiciatis laborum laudantium."}/>
        <SolutionsCard side={'right'} title={"Smart Contract"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sapiente praesentium, harum placeat veniam inventore, quasi accusantium molestiae cumque tempore perspiciatis laborum laudantium."}/>


    </div>
  )
}

export default Solutions
