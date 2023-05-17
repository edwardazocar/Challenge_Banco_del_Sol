import { Given, When, Then } from '@wdio/cucumber-framework';

import page from '../pageobjects/page.js';
import Busquedapage from '../pageobjects/busqueda.page.js';
import ResultadoBusquedapage from '../pageobjects/resultadoBusqueda.page.js';


Given(/^I am on the home page of ebay$/, async () => {
    page.openHomePage();
});

When(/^I search the (\w+) in the search field$/, async (product) => {
    await Busquedapage.hacerLaBusqueda(product)
});

Then(/^A list of batteries is displayed on the screen$/, async () => {
    await expect(ResultadoBusquedapage.todosLosAnuncios).toBePresent();
    await expect(ResultadoBusquedapage.todosLosAnuncios).toHaveTextContaining("Todos los anuncios");
    await expect(ResultadoBusquedapage.compraloAhora).toBePresent();
    await expect(ResultadoBusquedapage.compraloAhora).toHaveTextContaining("¡Cómpralo ahora!");
    await expect(ResultadoBusquedapage.cantidadBusqueda).toBePresent();

    //Resultado de la cantidad de la busqueda

    const resultado= await $("(//span[contains(@class,'BOLD')])[3]").getText();
    console.log("La Cantidad De Items De La Busqueda Es: "+resultado)
});

