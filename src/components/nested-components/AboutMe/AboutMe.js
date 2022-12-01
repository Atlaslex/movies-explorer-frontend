import React from "react";
import "./AboutMe.css";
import avatar from "../../../images/owner.png";

export const AboutMe = () => {
  return (
    <section className='project-owner sp' id='student'>
      <h2 className='project-owner__title section-title section-title_owner'>
        Студент
      </h2>
      <hr className='line'></hr>

      <article className='owner__resume'>
        <div className='owner__about-self'>
          <p className='owner__name'>Алексей</p>
          <p className='owner__description'>Фронтенд-разработчик</p>
          <blockquote className='owner__quote'>
            Я родился под Новосибирском живу и работаю в Петропавловске-Камчатском Учусь на курсе "Веб-разработчик" на
            платформе "Яндекс.Практикум".
          </blockquote>
          <ul className='social-nets'>
            <li className='social-nets__item'>
              <a
                href='https://github.com/Atlaslex'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>

        <img
          className='main-foto'
          src={avatar}
          alt='Фотография исполнителя проекта'
        />
      </article>
    </section>
  );
};
