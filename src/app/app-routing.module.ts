import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModelDemoComponent } from './model-demo/model-demo.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { TemplateFormComponent } from './template-form/template-form.component';


const routes: Routes = [
  {path:'', component:JokeListComponent},
  {path:'modelForm', component:ModelDemoComponent},
  {path:'templateForm', component:TemplateFormComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports:[RouterModule]
})
export class AppRoutingModule { }
