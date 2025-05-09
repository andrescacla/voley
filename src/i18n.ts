import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es/traslation.json';


const resources = {
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources, 
  fallbackLng: 'es',
  debug: false,
  interpolation: {
    formatSeparator: ',',
  },
})

export default i18n;