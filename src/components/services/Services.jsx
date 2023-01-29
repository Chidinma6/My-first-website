import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3> WEB DEVELOPMENT</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Designing user interfaces and navigation menus.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Writing and reviewing code for sites, typically HTML, CSS, or JavaScript.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Integrating multimedia content onto a site.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Testing web applications.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service_head">
            <h3> APP DEVELOPMENT</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Developing software solutions to meet customer needs.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Creating and implementing the source code of new applications.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Testing source code and debugging code.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Evaluating existing applications and performing updates and modifications.</p>
            </li>

          </ul>
        </article>
        {/* END OF APP DEVELOPMENT */}

        <article className='service'>
          <div className="service_head">
            <h3> DATA SCIENCE</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Data mining or extracting usable data from valuable data sources.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Processing, cleansing, and validating the integrity of data to be used for analysis.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Creating data visualizations and reports to communicate their findings.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Developing prediction systems and machine learning algorithms.</p>
            </li>

          </ul>
        </article>
        {/* END OF DATA SCIENCE */}
      </div>
    </section>
  )
}

export default services