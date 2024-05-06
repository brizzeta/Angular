import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import path from 'path';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'shop', component: ShopComponent},
  { path: '', redirectTo: '/admin-panel', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
