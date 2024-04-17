import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sobre.module.scss';
import Image from 'next/image';
import Perfil from '../../public/perfil.jpg'
import { useLanguage } from '../Context/Language';
import IconIntagram from '../Svgs/instagram';
import IconLinkedin from '../Svgs/linkedin';

export default function Sobre() {
  const { content } = useLanguage();
  let cx = classNames.bind(styles);

  return (
    <section className={cx('sectionSobre')} id='sobre'>

      <div className={cx('containerImage')}>
        <Image src={Perfil} alt='Foto de perfil Beatriz Dantas' title='Foto de perfil Beatriz Dantas'/>

      </div>

      <div className={cx('words')}>
        <h2>{content && content.sobre?.title}</h2>
        
        <p>{content && content.sobre?.description}</p>

        <div className={cx('socialIcons')}>
          <IconIntagram url="https://www.instagram.com/bdantas_adv/" color="#F5F5F5"/>
          <IconLinkedin url="https://www.linkedin.com/in/beatriz-helena-dantas/" color="#F5F5F5"/>
        </div>
      </div>
    </section>
  );
}
