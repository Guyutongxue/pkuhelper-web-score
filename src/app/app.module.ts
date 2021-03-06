import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { OsuButtonComponent } from './osu-button/osu-button.component';
import { ViewerComponent } from './viewer/viewer.component';
import { FooterComponent } from './footer/footer.component';
import { NewBlockViewerComponent } from './new-block-viewer/new-block-viewer.component';
import { SemesterViewerComponent } from './semester-viewer/semester-viewer.component';
import { OverallViewerComponent } from './overall-viewer/overall-viewer.component';
import { RowLayoutComponent } from './row-layout/row-layout.component';
import { VerticalLayoutComponent } from './vertical-layout/vertical-layout.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ClickHandlerDirective } from './click-handler.directive';
import { MomentModule } from 'ngx-moment';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    OsuButtonComponent,
    ViewerComponent,
    FooterComponent,
    NewBlockViewerComponent,
    SemesterViewerComponent,
    OverallViewerComponent,
    RowLayoutComponent,
    VerticalLayoutComponent,
    CourseViewerComponent,
    ClickHandlerDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
