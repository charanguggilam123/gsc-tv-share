import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule, Router } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { MaterialModule } from '../material.module';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { RatingComponent } from '../shared/rating/rating.component';

const tvRoutes: Routes=[
  // {path:'',redirectTo:'/tv-shows/list',pathMatch:'full'}
  {path:'',component:ListComponent},
  {path:':id/detail',component:DetailComponent},
  {path:':id/rate',component:RatingComponent}
]

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(tvRoutes)
  ]
})
export class TvShowsModule { }
