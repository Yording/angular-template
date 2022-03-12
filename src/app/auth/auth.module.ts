import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule
  ]
})
export class AuthModule { }
