import {NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicMainComponent } from "./public-main/public-main.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routes:Routes= [{
  path:'',
  component:PublicMainComponent,
  children:[
    {path:'login', component:LoginComponent},
    {path:'home', component: HomeComponent}
  ]

}]

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports:[RouterModule]
})
export class PublicRouting {}

