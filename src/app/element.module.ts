import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuybackOrderHistoryComponent } from './buyback-order-history/buyback-order-history.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    BuybackOrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [
    BuybackOrderHistoryComponent
  ],
})
export class ElementModule { 
  constructor(private injector: Injector) {
    // Crea una clase que encapsula el comportamiento del componente y permite levantar instancias del componente
    const buybackOrderHistoryComponent = createCustomElement(BuybackOrderHistoryComponent, { injector: this.injector });
    // Registra la clase constructora y el tag del custom element en CustomElementRegistry del navegador
    customElements.define('ace-order-buyback-order-history', buybackOrderHistoryComponent);
  }
}
