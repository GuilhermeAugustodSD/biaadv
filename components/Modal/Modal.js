import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { FaX  } from "react-icons/fa6";
import { useLanguage } from '../Context/Language';

let cx = classNames.bind(styles);

export default function Modal(props) {
  const [isModalShown, setIsModalShown] = useState(props.isActive);
  const { language, setLanguage } = useLanguage();
  
  useEffect(() => {
    setIsModalShown(props.isActive)
    console.log(isModalShown);
  }, [props.isActive]);

  return (
    <div className={cx('offcanvas', isModalShown == true ? "active" : "")}>
      <FaX size={20}/>
      <div className={cx('containerLinguagem')}>
        <span onClick={() => setLanguage('pt')}>PT</span>
        <span>|</span>
        <span onClick={() => setLanguage('en')}>EN</span>
      </div>

      <nav className={cx('navMenu')}>
        <ul>
          <li><a href='/#home'>Home</a></li>
          <li><a href='/#visao'>Visão</a></li>
          <li><a href='/#area-de-atuacao'>Áreas de Atuação</a></li>
          <li><a href='/#sobre'>Sobre</a></li>
          <li><a href='/#contato'>Entre em Contato</a></li>
        </ul>
      </nav>
    </div>
  );
}
