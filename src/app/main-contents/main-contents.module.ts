import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentsRoutingModule } from './main-contents-routing.module';
import { MainContentsComponent } from './main-contents.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BackgroundImageLoadedDirective } from '../directives/backgroundImageLoaded.directive';
import { BusyConfig, NgBusyModule } from 'ng-busy';
import { AppBusyComponent } from '../element/app-busy.component';
import { BusyService } from '../services/busy,service';
import { ShareFacadeService } from '../services/shareFacade.service';
import { AchievementsComponent } from './achievements/achievements.component';
import { SwiperModule } from "swiper/angular";
import { ResumeComponent } from './resume/resume.component';
import { MathjaxModule } from 'mathjax-angular';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    MainContentsComponent,
    TopbarComponent,
    HomeComponent,
    BackgroundImageLoadedDirective,
    AchievementsComponent,
    ResumeComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    MainContentsRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressBarModule,
    FontAwesomeModule,
    SwiperModule,
    NgBusyModule.forRoot(new BusyConfig({
      template: AppBusyComponent,
      wrapperClass: 'app-busy',
      disableAnimation: true,
    })),
    MathjaxModule.forRoot({
      "config": {
        "loader": {
          "load": ["output/svg", "[tex]/require", "[tex]/ams"]
        },
        "tex": {
          "inlineMath": [["$", "$"]],
          "packages": ["base", "require", "ams"]
        },
        "svg": { "fontCache": "global" }
      },
      "src": "https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/startup.js"
    })
  ],
  providers: [
    ShareFacadeService,
    BusyService
  ]
})
export class MainContentsModule { }
