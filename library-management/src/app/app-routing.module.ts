import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';  
import { AddBookInventoryComponent } from './component/librarian/add-book-inventory/add-book-inventory.component';
import { BookSearchComponent } from './component/librarian/book-search/book-search.component';
import { StudentPageComponent } from './component/librarian/student-page/student-page.component';
import { BorrowRequestComponent } from './component/librarian/borrow-request/borrow-request.component';
// import { LibrarianComponent } from './component/librarian/librarian.component';
import { StudentComponent } from './component/student/student.component';
import { DashpageComponent } from './component/dashpage/dashpage.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'',canActivate: [AuthGuard],component:DashpageComponent},
  {path:'dash-page',canActivate: [AuthGuard],component:DashpageComponent},
  // {path:'librarian-component',component: LibrarianComponent},
  // {path:'students-component',component:StudentComponent }
  {path:'librarian',canActivate: [AuthGuard],loadChildren:() => import('./component/librarian/librarian.module').then(mod => mod.LibrarianModule)},
  {path:'students-component',canActivate: [AuthGuard],component:StudentComponent }
  // ########
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [AddBookInventoryComponent, BookSearchComponent, StudentPageComponent, BorrowRequestComponent]
