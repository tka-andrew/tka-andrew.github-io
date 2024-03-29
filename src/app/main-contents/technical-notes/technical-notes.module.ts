import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalNotesRoutingModule } from './technical-notes-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TechnicalNotesComponent } from './technical-notes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDividerModule } from '@angular/material/divider';
import { CodingGeneralComponent } from './coding/coding-general/coding-general.component';
import { SequelizeNotesComponent } from './webDevelopment/sequelize-notes/sequelize-notes.component';
import { JavascriptNotesComponent } from './coding/javascript-notes/javascript-notes.component';
import { WebDevelopmentGeneralComponent } from './webDevelopment/web-development-general/web-development-general.component';
import { NpmNotesComponent } from './miscellaneous/npm-notes/npm-notes.component';
import { CppNotesComponent } from './coding/cpp-notes/cpp-notes.component';
import { CppNotesPart2Component } from './coding/cpp-notes-part2/cpp-notes-part2.component';
import { PostgresqlNotesComponent } from './webDevelopment/postgresql-notes/postgresql-notes.component';
import { DataStructuresComponent } from './coding/data-structures/data-structures.component';
import { GitlabCiCdNotesComponent } from './miscellaneous/gitlab-ci-cd-notes/gitlab-ci-cd-notes.component';
import { GitNotesComponent } from './miscellaneous/git-notes/git-notes.component';
import { RosNotesComponent } from './robotics/ros-notes/ros-notes.component';
import { CmakeNotesComponent } from './miscellaneous/cmake-notes/cmake-notes.component';
import { Turtlebot2NotesComponent } from './robotics/turtlebot2-notes/turtlebot2-notes.component';
import { UsefulResourcesComponent } from './robotics/useful-resources/useful-resources.component';
import { CppBasicsComponent } from './coding/cpp-basics/cpp-basics.component';
import { CppIntermediateComponent } from './coding/cpp-intermediate/cpp-intermediate.component';
import { DockerNotesComponent } from './miscellaneous/docker-notes/docker-notes.component';
import { DijkstraAlgorithmComponent } from './algorithms/dijkstra-algorithm/dijkstra-algorithm.component';
import { BellmanFordAlgorithmComponent } from './algorithms/bellman-ford-algorithm/bellman-ford-algorithm.component';
import { DynamicProgrammingComponent } from './algorithms/dynamic-programming/dynamic-programming.component';
import { LearningCmakeComponent } from './miscellaneous/learning-cmake/learning-cmake.component';
import { AStarAlgorithmComponent } from './algorithms/a-star-algorithm/a-star-algorithm.component';
import { Ros2NotesComponent } from './robotics/ros2-notes/ros2-notes.component';
import { LocalizationNotesComponent } from './robotics/localization-notes/localization-notes.component';
import { MathjaxModule } from 'mathjax-angular';
import { MappingNotesComponent } from './robotics/mapping-notes/mapping-notes.component';
import { BreadthFirstSearchComponent } from './algorithms/breadth-first-search/breadth-first-search.component';
import { BacktrackingComponent } from './algorithms/backtracking/backtracking.component';
import { PathPlanningComponent } from './robotics/path-planning/path-planning.component';
import { CommunicationProtocolsComponent } from './robotics/communication-protocols/communication-protocols.component';
import { WxwidgetsNotesComponent } from './miscellaneous/wxwidgets-notes/wxwidgets-notes.component';
import { CppCodeOptimiationComponent } from './coding/cpp-code-optimiation/cpp-code-optimiation.component';
import { NetworkingNotesComponent } from './miscellaneous/networking-notes/networking-notes.component';
import { ElectronicsNotesComponent } from './robotics/electronics-notes/electronics-notes.component';
import { PythonNotesComponent } from './coding/python-notes/python-notes.component';
import { UnixNotesComponent } from './miscellaneous/unix-notes/unix-notes.component';
import { DjangoNotesComponent } from './webDevelopment/django-notes/django-notes.component';
import { HtmlCssNotesComponent } from './webDevelopment/html-css-notes/html-css-notes.component';
import { CodingMathComponent } from './miscellaneous/coding-math/coding-math.component';
import { MathsComponent } from './miscellaneous/maths/maths.component';
import { AiGeneralComponent } from './AI/ai-general/ai-general.component';

@NgModule({
  declarations: [
    TechnicalNotesComponent,
    CodingGeneralComponent,
    SequelizeNotesComponent,
    JavascriptNotesComponent,
    WebDevelopmentGeneralComponent,
    NpmNotesComponent,
    CppNotesComponent,
    CppNotesPart2Component,
    PostgresqlNotesComponent,
    DataStructuresComponent,
    GitlabCiCdNotesComponent,
    GitNotesComponent,
    RosNotesComponent,
    CmakeNotesComponent,
    Turtlebot2NotesComponent,
    UsefulResourcesComponent,
    CppBasicsComponent,
    CppIntermediateComponent,
    DockerNotesComponent,
    DijkstraAlgorithmComponent,
    BellmanFordAlgorithmComponent,
    DynamicProgrammingComponent,
    LearningCmakeComponent,
    AStarAlgorithmComponent,
    Ros2NotesComponent,
    LocalizationNotesComponent,
    MappingNotesComponent,
    BreadthFirstSearchComponent,
    BacktrackingComponent,
    PathPlanningComponent,
    CommunicationProtocolsComponent,
    WxwidgetsNotesComponent,
    CppCodeOptimiationComponent,
    NetworkingNotesComponent,
    ElectronicsNotesComponent,
    PythonNotesComponent,
    UnixNotesComponent,
    DjangoNotesComponent,
    HtmlCssNotesComponent,
    CodingMathComponent,
    MathsComponent,
    AiGeneralComponent],
  imports: [
    CommonModule,
    TechnicalNotesRoutingModule,
    MatExpansionModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatDividerModule,
    FontAwesomeModule,
    MathjaxModule.forChild()
  ]
})
export class TechnicalNotesModule { }
