import {messages} from '@/messages';
import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

export default new VueI18n({
    locale: window.localStorage.getItem('currentLanguage') || navigator.language.split('-')[0] ||
                                        process.env.VUE_APP_I18N_LOCALE || 'en',

    fallbackLocale: window.localStorage.getItem('currentLanguage') ||
                                                process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages,
});
