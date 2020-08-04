<<<<<<< HEAD
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> 901581493f8dd814da39abe5b56a448aa6e2ba1c
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
<<<<<<< HEAD
  exports: [ComponentAComponent, ComponentBComponent, SidenavComponent, ContentAreaComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

=======
  exports: [ComponentAComponent, ComponentBComponent, SidenavComponent, ContentAreaComponent]
>>>>>>> 901581493f8dd814da39abe5b56a448aa6e2ba1c
})
export class LayoutModule { }
