import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';
import { FaX  } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import Logo from "../../public/logo-bia.png"
import LogoIcon from "../../public/logo-bia-icon.png"
import Image from 'next/image';
import { useLanguage } from '../Context/Language';
import { Modal } from '../Modal';

let cx = classNames.bind(styles);

export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);
  const [imageSrc, setImageSrc] = useState(Logo);
  const [imageClass, setImageClass] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se scrollY é maior que a altura do viewport
      if (window.scrollY > window.innerHeight) {
        setImageSrc(LogoIcon);
        setImageClass('logoIcon')
      } else {
        setImageSrc(Logo);
        setImageClass('')
      }
    };

    // Adiciona o ouvinte de evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpeza: remove o ouvinte de evento quando o componente é desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cx('componentHeader')}>
        <div className={cx('componentLogo', imageClass)}>
          <Image src={imageSrc} className={cx('logo')}/>
        </div>

        <nav>
          <ul>
            <li><a href='/#home'>Home</a></li>
            <li><a href='/#visao'>Visão</a></li>
            <li><a href='/#area-de-atuacao'>Áreas de Atuação</a></li>
            <li><a href='/#sobre'>Sobre</a></li>
            <li><a href='/#contato'>Entre em Contato</a></li>
          </ul>
        </nav>

        <div className={cx('containerLinguagem')}>
          <span onClick={() => setLanguage('pt')}>PT</span>
          <span>|</span>
          <span onClick={() => setLanguage('en')}>EN</span>
        </div>

        <MdOutlineMenu size={40} className={cx('menu')} onClick={() => setShowModal(!showModal)}/>

        <Modal isActive={showModal} />
    </header>
  );
}
