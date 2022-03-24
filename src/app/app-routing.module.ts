import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserGuard } from './admin-user.guard';
import { BelsoOldalComponent } from './belso-oldal/belso-oldal.component';
import { LoginComponent } from './login/login.component';
import { NyitoOldalComponent } from './nyito-oldal/nyito-oldal.component';

const routes: Routes = [
  {
    path:'belsoOldal',
    component:BelsoOldalComponent,
    canActivate: [AdminUserGuard]
  },
  {
    path:'**',
    component:NyitoOldalComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
