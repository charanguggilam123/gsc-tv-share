import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'/tv-shows',pathMatch:'full'},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(module=>module.AuthModule)},
  {path:'tv-shows',loadChildren:()=>import('./tv-shows/tv-shows.module').then(module=>module.TvShowsModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
