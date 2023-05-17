class Busquedapage {
    
    //WebElement Locators

  get inputBuscarArticulos() {
    return $('input[id="gh-ac"]');
  }

  get buttonSubmit() {
    return $('input[type="submit"]');
  }

   //Actions
   
   async hacerLaBusqueda(product) {
    await this.inputBuscarArticulos.setValue(product);
    await this.buttonSubmit.click();    
   }

}

export default new Busquedapage();
