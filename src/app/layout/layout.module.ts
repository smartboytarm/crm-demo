import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentAreaComponent } from './content-area/content-area.component';



@NgModule({
  declarations: [ComponentAComponent, ComponentBComponent, SidenavComponent, ContentAreaComponent],
  imports: [
    CommonModule
  ],
  exports: [ComponentAComponent, ComponentBComponent, SidenavComponent, ContentAreaComponent]
})
export class LayoutModule { }
