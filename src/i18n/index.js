import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

// idiomas locales
import en from "./en";
import es from "./es";

const locales = RNLocalize.getLocales();

// establecer idioma inicial de que tendra la app
if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}else{
    I18n.locale = 'en'; // default lenguaje
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  es,
};

export default I18n;