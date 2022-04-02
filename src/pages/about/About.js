import React from 'react'
import Card from '../../components/cards/Card'
import './about.css'
import Collaborate from '../../assets/collaborate1.png'
import What from '../../assets/what.png'
import Opportuities from '../../assets/opportunities1.png'
import Community from '../../assets/community.png'
import Reciprocate from '../../assets/reciprocate1.png'
import Benefits from '../../assets/benefits1.png'
function About() {
  const what= {heading:"What ?",image:What,body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ratione temporibus facilis, aut aperiam dicta eligendi laboriosam, maxime dolor magnam cupiditate numquam, ea culpa provident accusamus necessitatibus. Illum, harum adipisci."};
  const benefits = {heading:"Benefits",image:Benefits,body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ratione temporibus facilis, aut aperiam dicta eligendi laboriosam, maxime dolor magnam cupiditate numquam, ea culpa provident accusamus necessitatibus. Illum, harum adipisci."};
  const community = {heading:"Community",image:Community,body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ratione temporibus facilis, aut aperiam dicta eligendi laboriosam, maxime dolor magnam cupiditate numquam, ea culpa provident accusamus necessitatibus. Illum, harum adipisci."};
  const opportunities = {heading:"Opportunities",image:Opportuities,body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ratione temporibus facilis, aut aperiam dicta eligendi laboriosam, maxime dolor magnam cupiditate numquam, ea culpa provident accusamus necessitatibus. Illum, harum adipisci."};
  const reciprocate = {heading:"Reciprocate",image:Reciprocate,body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ratione temporibus facilis, aut aperiam dicta eligendi laboriosam, maxime dolor magnam cupiditate numquam, ea culpa provident accusamus necessitatibus. Illum, harum adipisci."};
  const collaboration = {heading:"Collaboration",image:Collaborate,body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ratione temporibus facilis, aut aperiam dicta eligendi laboriosam, maxime dolor magnam cupiditate numquam, ea culpa provident accusamus necessitatibus. Illum, harum adipisci."};
  return (
    <>
    <div>
    <div className="heading1">About Us</div>
    <div className="one">
      <div className="two">
   <Card heading={what.heading} body={what.body} image={what.image}/>
   </div>
   <div className="two">
   <Card  heading={benefits.heading} body={benefits.body} image={benefits.image}/>
   </div>
   <div className="two">
   <Card heading={community.heading} body={community.body} image={community.image}/>
   </div>
   <div className="two">
   <Card heading={opportunities.heading} body={opportunities.body} image={opportunities.image}/>
   </div>
   <div className="two">
   <Card heading={reciprocate.heading} body={reciprocate.body} image={reciprocate.image}/>
   </div>
   <div className="two">
   <Card heading={collaboration.heading} body={collaboration.body} image={collaboration.image}/>
   </div>
   </div>
   </div>
    </>
  )
}

export default About