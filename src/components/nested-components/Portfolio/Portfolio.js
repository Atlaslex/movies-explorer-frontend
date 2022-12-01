import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className='project-portfolio sp'>
      <h3 className='section-subtitle'>Портфолио</h3>

      
      <ul className='portfolio'>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://atlaslex.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://atlaslex.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://atlaslex.github.io/sign-in'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
