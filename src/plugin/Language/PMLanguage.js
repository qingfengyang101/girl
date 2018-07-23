
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Lodash from '../../external/lodash';
import PMLanguageConfig from './PMLanguageConfig';

let LangEngine = {
  useLanguage: function (locale, languages, fallbackLocale) {
    Vue.use(VueI18n)
    let langConfig = {
      locale: locale,
      messages: languages
    };

    if (Lodash.isString(fallbackLocale)) {
      languages['fallbackLocale'] = fallbackLocale;
    }
    return new VueI18n(langConfig);
  }
};

const i18n = LangEngine.useLanguage(PMLanguageConfig.locale, PMLanguageConfig.languages);

Vue.prototype.getLang = (languageKey, params) => {
  if (Lodash.isString(languageKey)) {
    return i18n.t(languageKey, params);
  }
}

export default i18n;