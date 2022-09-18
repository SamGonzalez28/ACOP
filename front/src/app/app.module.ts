import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { BannerComponent } from './components/shared/banner/banner.component'
import { LoginComponent } from './components/public/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AuthService } from './components/services/auth.service';
import { UsuarioService } from './components/services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/public/home/home.component';
import { RegistroUsuarioComponent } from './components/private/registro-usuario/registro-usuario.component';
import { RegistroCodigoComponent } from './components/private/registro-codigo/registro-codigo.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { PublicMainComponent } from './components/public/public-main/public-main.component';
import { PrivateMainComponent } from './components/private/private-main/private-main.component';
import { BuscarDocumentoComponent } from './components/private/buscar-documento/buscar-documento.component';
import { RegistroPlantillasComponent } from './components/private/registro-plantillas/registro-plantillas.component';
import { ReceptarDocumentoComponent } from './components/private/receptar-documento/receptar-documento.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    RegistroUsuarioComponent,
    RegistroCodigoComponent,
    DashboardComponent,
    PublicMainComponent,
    PrivateMainComponent,
    BuscarDocumentoComponent,
    RegistroPlantillasComponent,
    ReceptarDocumentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
