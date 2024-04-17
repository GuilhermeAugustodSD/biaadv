import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SectionHeader.module.scss';
import { useTranslation } from 'next-i18next';
import { useLanguage } from '../Context/Language';

export default function SectionHeader() {
  let cx = classNames.bind(styles);
  const { content } = useLanguage()

  return (
    <section className={cx('sectionHeader')} id='home'>
      <div className={cx('words')}>
        <h1>{content && content.header?.title}</h1>
        <hr />
        <p>{content && content.header?.firstDescription}</p>
        <p>{content && content.header?.secondDescription}</p>
      </div>
    </section>
  );
}
