class ResultadoBusquedapage {
    
    //WebElement Locators

    get todosLosAnuncios() {
        return $("(//span[@class='srp-format-tabs-h2'])[1]");
      }

      get compraloAhora() {
        return $("(//a[contains(@href,'BIN=1')])[2]");
      }

      get cantidadBusqueda() {
        return $("(//span[contains(@class,'BOLD')])[3]");
      }
}

export default new ResultadoBusquedapage();
