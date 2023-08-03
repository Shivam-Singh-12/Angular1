import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'user', component:UserComponent},
  {path:'users',component:UsersComponent},
  {path:'child',component:ChildtoparentComponent},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
