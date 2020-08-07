import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { ClarityModule } from '@clr/angular/clr-angular.module';



@NgModule({
  declarations: [ComponentAComponent, ComponentBComponent, SidenavComponent, ContentAreaComponent],
  imports: [
    CommonModule,
    // ClarityModule
  ],
  exports: [ComponentAComponent, ComponentBComponent, SidenavComponent, ContentAreaComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class LayoutModule { }
