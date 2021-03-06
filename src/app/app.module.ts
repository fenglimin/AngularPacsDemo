import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { QueryShortcutComponent } from './components/query-shortcut/query-shortcut.component';
import { WorklistComponent } from './components/worklist/worklist.component';
import { WorklistShellComponent } from './components/worklist-shell/worklist-shell.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ViewerShellComponent } from './components/viewer-shell/viewer-shell.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewerToolbarComponent } from './components/viewer-toolbar/viewer-toolbar.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { LayoutViewerComponent } from './components/layout-viewer/layout-viewer.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    QueryShortcutComponent,
    WorklistComponent,
    WorklistShellComponent,
    NavigationComponent,
    ViewerShellComponent,
      ViewerToolbarComponent,
      ThumbnailComponent,
      LayoutViewerComponent,
      ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
