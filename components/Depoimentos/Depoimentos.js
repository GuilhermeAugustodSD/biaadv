import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Depoimentos.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLanguage } from '../Context/Language';
import Avatar from '../../public/avatar.png'
import Image from 'next/image';

export default function Depoimentos() {
  let cx = classNames.bind(styles);
  const { language, content } = useLanguage();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };


  return (
    <section className={cx('sectionDepoimentos')} id='depoimentos'>

      <div className={cx('containerDepoimentos')}>
        <h2>{language == 'pt' ? 'Depoimento dos clientes' : 'Customer testimonials'}</h2>
        <Slider {...settings} className={cx('slider')}>
          {content?.depoimentos?.map((depoimento, index) => (
            <div key={index} className={cx('clientes')}>
              <Image src={depoimento.avatar} alt={depoimento.empresa} width={140} height={140}/>
              <div className={cx('words')}>
                <small>{depoimento.empresa}</small>
                <p>{depoimento.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
