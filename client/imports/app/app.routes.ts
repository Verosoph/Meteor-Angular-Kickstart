import { Route } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { BoardComponent } from "./board/board.component";

export const routes: Route[] = [
    { path: '', component: HomeComponent},
    { path: 'board', component: BoardComponent}
];