let showSuccessMessage = (message) => {
   console.log(message)
}

let showErrorMessage = (message) => {
   console.error(message)
}

let checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
   text = 'Привет! Как дела! Давно мы с тобой не виделись.';
   errorSymbol = text['a'];
   let errorCallback = () => {
      console.log(`Найден запрещенный символ "${errorSymbol}" под индексом ${errorSymbol}`);
   }
   let successCallback = () => {
      console.log('В данном тексте нет запрещенных символов')
   }
   
   
   if (text >= errorSymbol) {
      return errorCallback ();
   } 
   
   
   
}
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);