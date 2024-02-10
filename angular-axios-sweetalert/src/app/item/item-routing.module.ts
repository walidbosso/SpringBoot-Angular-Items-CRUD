import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo:'items/overview', pathMatch:'full'},
  {path: 'items', redirectTo:'items/overview', pathMatch:'full'},
  {path: 'items/overview', component:OverviewComponent},
  {path: 'items/:id/details', component:DetailComponent},
  {path: 'items/create', component:CreateComponent},
  {path: 'items/:id/edit', component:EditComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
