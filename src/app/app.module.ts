import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { QueryShortcutComponent } from './components/query-shortcut/query-shortcut.component';
import { WorklistComponent } from './components/worklist/worklist.component';
import { WorklistShellComponent } from './components/worklist-shell/worklist-shell.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { ViewerShellComponent } from './components/viewer-shell/viewer-shell.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    QueryShortcutComponent,
    WorklistComponent,
    WorklistShellComponent,
    NavigationComponent,
    ViewerComponent,
    ViewerShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
