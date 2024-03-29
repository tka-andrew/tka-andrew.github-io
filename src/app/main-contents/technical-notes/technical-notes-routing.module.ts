import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingGeneralComponent } from './coding/coding-general/coding-general.component';
import { CppNotesPart2Component } from './coding/cpp-notes-part2/cpp-notes-part2.component';
import { CppNotesComponent } from './coding/cpp-notes/cpp-notes.component';
import { DataStructuresComponent } from './coding/data-structures/data-structures.component';
import { JavascriptNotesComponent } from './coding/javascript-notes/javascript-notes.component';
import { NpmNotesComponent } from './miscellaneous/npm-notes/npm-notes.component';
import { TechnicalNotesComponent } from './technical-notes.component';
import { PostgresqlNotesComponent } from './webDevelopment/postgresql-notes/postgresql-notes.component';
import { SequelizeNotesComponent } from './webDevelopment/sequelize-notes/sequelize-notes.component';
import { WebDevelopmentGeneralComponent } from './webDevelopment/web-development-general/web-development-general.component';
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

const routes: Routes = [{
  path:'',
  component:TechnicalNotesComponent,
  children: [
    {
      path: 'coding/general',
      component: CodingGeneralComponent
    },
    {
      path: 'coding/dataStructures',
      component: DataStructuresComponent
    },
    {
      path: 'coding/cpp',
      component: CppNotesComponent
    },
    {
      path: 'coding/cpp-part2',
      component: CppNotesPart2Component
    },
    {
      path: 'coding/cpp-basics',
      component: CppBasicsComponent
    },
    {
      path: 'coding/cpp-intermediate',
      component: CppIntermediateComponent
    },
    {
      path: 'coding/cpp-code-optimization',
      component: CppCodeOptimiationComponent
    },
    {
      path: 'coding/python-notes',
      component: PythonNotesComponent
    },
    {
      path: 'coding/javaScript',
      component: JavascriptNotesComponent
    },
    {
      path: 'algorithms/breadth-first-search',
      component: BreadthFirstSearchComponent
    },
    {
      path: 'algorithms/backtracking',
      component: BacktrackingComponent
    },
    {
      path: 'algorithms/dynamic-programming',
      component: DynamicProgrammingComponent
    },
    {
      path: 'algorithms/dijkstra',
      component: DijkstraAlgorithmComponent
    },
    {
      path: 'algorithms/bellman-ford',
      component: BellmanFordAlgorithmComponent
    },
    {
      path: 'algorithms/a-star-search',
      component: AStarAlgorithmComponent
    },
    {
      path:'robotics/ROS',
      component: RosNotesComponent
    },
    {
      path:'robotics/ROS2',
      component: Ros2NotesComponent
    },
    {
      path:'robotics/TurtleBot2',
      component: Turtlebot2NotesComponent
    },
    {
      path:'robotics/Localization',
      component: LocalizationNotesComponent
    },
    {
      path:'robotics/Mapping',
      component: MappingNotesComponent
    },
    {
      path:'robotics/PathPlanning',
      component: PathPlanningComponent
    },
    {
      path:'robotics/CommunicationProtocols',
      component: CommunicationProtocolsComponent
    },
    {
      path:'robotics/ElectronicsNotes',
      component: ElectronicsNotesComponent
    },
    {
      path:'robotics/UsefulResources',
      component: UsefulResourcesComponent
    },
    {
      path:'ai/general',
      component: AiGeneralComponent
    },
    {
      path: 'webDevelopment/general',
      component: WebDevelopmentGeneralComponent
    },
    {
      path: 'webDevelopment/sequelize',
      component: SequelizeNotesComponent
    },
    {
      path: 'webDevelopment/postgresql',
      component: PostgresqlNotesComponent
    },
    {
      path: 'webDevelopment/django',
      component: DjangoNotesComponent
    },
    {
      path: 'webDevelopment/html-css',
      component: HtmlCssNotesComponent
    },
    {
      path: 'miscellaneuos/npm',
      component: NpmNotesComponent
    },
    {
      path: 'miscellaneuos/GitNotes',
      component: GitNotesComponent
    },
    {
      path: 'miscellaneuos/GitLabCICD',
      component: GitlabCiCdNotesComponent
    },
    {
      path: 'miscellaneuos/DockerNotes',
      component: DockerNotesComponent
    },
    {
      path: 'miscellaneuos/CMakeNotes',
      component: CmakeNotesComponent
    },
    {
      path: 'miscellaneuos/learning_cmake',
      component: LearningCmakeComponent
    },
    {
      path: 'miscellaneuos/wxWidgets',
      component: WxwidgetsNotesComponent
    },
    {
      path: 'miscellaneuos/unixNotes',
      component: UnixNotesComponent
    },
    {
      path: 'miscellaneuos/maths',
      component: MathsComponent
    },
    {
      path: 'miscellaneuos/networkingNotes',
      component: NetworkingNotesComponent
    },
    {
      path: 'miscellaneuos/codingMath',
      component: CodingMathComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalNotesRoutingModule { }
