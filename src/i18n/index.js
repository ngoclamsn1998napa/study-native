import {I18n} from 'i18n-js';

import en from './locales/en.json';
import vi from './locales/vi.json';

const LANGUAGES = {
  en,
  vi,
};

const i18n = new I18n(LANGUAGES);
i18n.defaultLocale = 'en';
i18n.locale = 'en';

export default i18n;
