import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LayoutComponent } from './layout/layout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    LayoutComponent,
    
    
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],

  
  // exports:[ HeaderComponent,
  //   FooterComponent,
  //   LoginComponent,
  //   LogoutComponent,
  //   LayoutComponent

  // ]
})
// providers:[{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
export class CoreModule { }
