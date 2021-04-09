import { GithubRepositoryComponent } from './github-repository/github-repository.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'user', component: GithubProfileComponent},
{path: 'repository' , component: GithubRepositoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GithubProfileComponent, GithubRepositoryComponent]
