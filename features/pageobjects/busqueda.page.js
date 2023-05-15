class Busquedapage {
    
    //WebElement Locators

  get inputBuscarArticulos() {
    return $('input[id="gh-ac"]');
  }

  get buttonSubmit() {
    return $('input[type="submit"]');
  }

   //Actions
   
   async hacerLaBusqueda(Pilas) {
    await this.inputBuscarArticulos.setValue(Pilas);
    await this.buttonSubmit.click();    
   }

}

export default new Busquedapage();
