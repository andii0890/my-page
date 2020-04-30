import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './about/about.component';
import { LanguagesComponent } from './languages/languages.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';
import { MouseScrollAnimationComponent } from './mouse-scroll-animation/mouse-scroll-animation.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    LanguagesComponent,
    WorkExperienceComponent,
    ContactComponent,
    MouseScrollAnimationComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    MglTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
