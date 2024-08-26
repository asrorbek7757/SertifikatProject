import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // i18n ob'ektini olish

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // changeLanguage metodini chaqirish
  };

  return (
    <Menu mode="horizontal" className="language-switcher">
      <Menu.Item key="en" onClick={() => handleLanguageChange('en')}>
        English
      </Menu.Item>
      <Menu.Item key="uz" onClick={() => handleLanguageChange('uz')}>
        Uzbek
      </Menu.Item>
    </Menu>
  );
};

export default LanguageSwitcher;
