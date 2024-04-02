import React ,{useRef} from 'react';
import LanguageContext from './LanguageContext';

///consumer of the provider named language context
const DisplaySelectedLanguage = function() 
{

  // useContext('language')
  //value.abc
   return(
    
    
  <LanguageContext.Consumer>
    {value=> (  <p> The chosen language is { value.language } </p>) }
    
  </LanguageContext.Consumer>)
  
};

export default DisplaySelectedLanguage;
