import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { ColorsComponent } from './colors/colors.component';
import { UtilitiesComponent } from './utilities.component';

const routes: Routes = [{ path: '', component: UtilitiesComponent },
{
  path: '',
  children: [
    { path: 'colors', component: ColorsComponent, data: { seoTitle: 'N/A' } },
    { path: 'colors/:type', component: ColorsComponent },
    { path: 'boards', component: BoardsComponent },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
