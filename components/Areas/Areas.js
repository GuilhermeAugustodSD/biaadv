import React from 'react';
import classNames from 'classnames/bind';
import styles from './Areas.module.scss';

export default function Areas() {
  let cx = classNames.bind(styles);

  return (
    <section className={cx('sectionAreas')} id='areas-de-atuacao'>

      <div className={cx('words')}>
        <h2>Áreas de Atuação</h2>
        <ol>
          <li>Contratos Nacionais & Internacionais</li>
          <li>Planejamento e estruturação de novos negócios</li>
          <li>Sociedade Empresarial</li>
          <li>Acessoria para start ups</li>
          <li>Holdings</li>
        </ol>

      </div>

      <div className={cx('blocoMaisAreas')}>
        <h3>Mais áreas de atuação</h3>

        <ul>
          <li>Planejamento Patrimonial</li>
          <li>Marcas e Patente</li>
          <li>Propriedade Intelectual</li>
          <li>Mercado de Capitais</li>
          <li>Fusões e num sei o que</li>
          <li>Fusões Internacionais de capitais e bla</li>
        </ul>
      </div>
    </section>
  );
}
