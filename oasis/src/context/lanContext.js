import React, {useState} from 'react';
import { IntlProvider } from 'react-intl';
import EnglishMessage from '../lang/en-US.json'
import SpanishMessage from '../lang/es-ES.json'
  const langContext = React.createContext();

  const LangProvider = ({children}) =>{
  const [mensajes, establecerMensajes] = useState(SpanishMessage);
  const [locale, establecerLocale] = useState('es-ES');
  const establecerLenguaje = (lenguaje) =>{
        
    switch(lenguaje){
        case 'es-ES':
                establecerMensajes(SpanishMessage)
                establecerLocale('es-ES')
                return locale
        case 'en-US':
                establecerMensajes(EnglishMessage)
                establecerLocale('en-US')
                return locale
        default:
                establecerMensajes(SpanishMessage)
                establecerLocale('es-ES')
                return locale
    };
};
return(
    <div>
        <langContext.Provider value = {{establecerLenguaje: establecerLenguaje}}>
        <IntlProvider locale={locale} messages={mensajes}>
                {children}
        </IntlProvider>
        </langContext.Provider>
    </div>
    );
};   

export {LangProvider ,langContext}