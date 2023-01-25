/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img2.png'
import IMG2 from '../../assets/img.png'
import IMG3 from '../../assets/img3.png'

const data = [
  {
    id: 1,
    image:IMG1,
    title:'Order Manangemet System',
    github: "https://github.com/Chidinma6/Bittess-Order-Mgt",
    demo: "https://google.com"
  },
  {
    id: 2,
    image:IMG2,
    title:'Rock Paper Scissors',
    github: "https://github.com/Chidinma6",
    demo: "https://google.com"
  },
  {
    id: 3,
    image:IMG3,
    title:'Grocery Website',
    github: "https://github.com/Chidinma6/Market-",
    demo: "https://google.com"
  },
  
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio_container">
       {
        data.map(({id,image,title,github,demo}) =>{
          return(
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <div className="porfolio_item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer"> Github</a>
                <a href={demo}className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
              </div>
            </div>
          </article>
          )
        })
       }        
      </div>
    </section>
  )
}

export default Porfolio