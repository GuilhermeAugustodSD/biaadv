import React from 'react';
import classNames from 'classnames/bind';
import styles from './Equipe.module.scss';
import Image from 'next/image';
import EquipePicture from '../../public/equipe.jpg'
import { useLanguage } from '../Context/Language';
import IconIntagram from '../Svgs/instagram';
import IconLinkedin from '../Svgs/linkedin';

export default function Equipe() {
  const { content } = useLanguage();
  let cx = classNames.bind(styles);

  return (
    <section className={cx('sectionEquipe')} id='equipe'>

      <div className={cx('words')}>
        <h2>{content && content.equipe?.title}</h2>
        <p>{content && content.equipe?.description}</p>

        <div className={cx('socialIcons')}>
          <IconIntagram url="https://www.instagram.com/bdantas_adv/" color="#191919"/>
          <IconLinkedin url="https://www.linkedin.com/in/beatriz-helena-dantas/" color="#191919"/>
        </div>
      </div>

      <div className={cx('containerImage')}>
        <Image src={EquipePicture} alt='Foto da Equipe Napoleão&Tajra' title='Foto da Equipe Napoleão&Tajra'/>
      </div>
    </section>
  );
}
