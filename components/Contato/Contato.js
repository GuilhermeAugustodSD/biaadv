import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Contato.module.scss';
import Image from 'next/image';
import IconPhone from "../Svgs/phone"
import IconEmail from "../Svgs/email"
import IconPin from "../Svgs/pin"
import { useLanguage } from '../Context/Language';

import ImageContato from '../../public/image-3.jpg'
// https://wa.me/5561983144615?text=


export default function Contato() {
  let cx = classNames.bind(styles);
  const { language } = useLanguage();

  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de submissão do formulário
    let text;
    // Monta a mensagem
    if (language == 'pt') {
      text = `Olá, meu nome é ${nome}. Estou interessado(a) em assistência legal. Aqui estão meus detalhes:
        Nome: ${nome}
        Mensagem: ${mensagem}`;
    } else {
      text = `Hello my name is ${nome}. I am interested in legal assistance. Here are my details:
        Name: ${nome}
        Message: ${mensagem}`;
    }

    // Codifica a mensagem para URL
    let mensagemCodificada = encodeURIComponent(text);

    // Cria e abre o link do WhatsApp
    let whatsappLink = `https://wa.me/5561983144615?text=${mensagemCodificada}`; // Substitua 'seuNumeroAqui' pelo seu número de WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className={cx('sectionContato')} id='Contato'>
      <h2>
        {
          language == "pt" ?
          "Precisando de Assistência Legal ?" :
          "In need of legal assistance ?"
        }
      </h2>
      <div className={cx('bgYellow')}>
        <div className={cx('words')}>

          <div className={cx('boxIcons')}>
            <IconPhone url="https://wa.me/5561983144615" />
            <div className={cx('words')}>
              <strong>{language == "pt" ? "Telefone" : "Telephone"}</strong>
              <span>+55 (61) 98314-4615</span>
            </div>
          </div>

          <div className={cx('boxIcons')}>
            <IconEmail url="mailto:biatriz.helena.21@gmail.com" />
            <div className={cx('words')}>
              <strong>E-mail</strong>
              <span>biatriz.helena.21@gmail.com</span>
            </div>
          </div>

          <div className={cx('boxIcons')}>
            <IconPin url="https://www.google.com/maps/place//@-15.8554587,-47.8734478,19.5z?entry=ttu" />
            <div className={cx('words')}>
              <strong>{language == "pt" ? "Localização" : "Location"}</strong>
              <span>SHIS QI 16 Conjunto 5 Lago Sul Brasília - DF</span>
            </div>
          </div>
        </div>
        <div className={cx('formRelation')}></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>{ language == "pt" ? "Contato" : "Contact"}</h3>
        <div className={cx('containerNomeEmail')}>
          <div className={cx('inputContainer')}>
            <input placeholder={language == "pt" ? 'Nome' : 'Name'} type='text' value={nome} onChange={(e) => setNome(e.target.value)} required/>
          </div>

          <div className={cx('inputContainer')}>
            <input placeholder='E-mail' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
        </div>

        <div className={cx('inputContainer')}>
          <textarea placeholder={language == "pt" ? 'Mensagem' : 'Message'} type='text' value={mensagem} onChange={(e) => setMensagem(e.target.value)} required/>
        </div>

        <button type='submit'>{language == "pt" ? 'Enviar' : 'Submit'}</button>

      </form>

    </section>
  );
}