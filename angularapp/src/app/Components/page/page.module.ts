import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageRoutingModule } from './page-routing.module';
import { homeComponent } from './Components/home/home.component';
import { leftComponent } from './Components/left/left.component';
import { RightComponent } from './Components/right/right.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    homeComponent,
    leftComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule
  ]
})
export class PageModule { }
