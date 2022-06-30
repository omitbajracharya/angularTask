import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { FeatureComponent } from './component/feature/feature.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'gotoProduct',
    component:ProductComponent
  },
  {
    path:'gotoContact',
    component:ContactComponent
  },
  {
    path:'gotoFeature',
    component:FeatureComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
