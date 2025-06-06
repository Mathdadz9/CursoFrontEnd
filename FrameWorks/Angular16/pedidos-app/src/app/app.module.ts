import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form.component';
import { PedidoFormComponent } from './componentes/pedido-form/pedido-form.component';
import { PedidoListComponent } from './componentes/pedido-list/pedido-list.component';
import { ProdutoFormComponent } from './componentes/produto-form/produto-form.component';
import { FormsModule } from '@angular/forms';
import { DadosService } from './services/dados.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    PedidoFormComponent,
    PedidoListComponent,
    ProdutoFormComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
