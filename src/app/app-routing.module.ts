import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';


const routes: Routes = [{ path: 'view', component: ViewComponent },{path:"product",component:SingleproductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
