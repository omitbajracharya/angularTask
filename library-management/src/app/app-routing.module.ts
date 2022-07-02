import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';  
import { AddBookInventoryComponent } from './component/librarian/add-book-inventory/add-book-inventory.component';
import { BookSearchComponent } from './component/librarian/book-search/book-search.component';
import { StudentPageComponent } from './component/librarian/student-page/student-page.component';
import { BorrowRequestComponent } from './component/librarian/borrow-request/borrow-request.component';
// import { LibrarianComponent } from './component/librarian/librarian.component';
import { StudentComponent } from './component/student/student.component';
import { DashpageComponent } from './component/dashpage/dashpage.component';


const routes: Routes = [
  {path:'',component:DashpageComponent},
  // {path:'librarian-component',component: LibrarianComponent},
  // {path:'students-component',component:StudentComponent }
  {path:'librarian',loadChildren:() => import('./component/librarian/librarian.module').then(mod => mod.LibrarianModule)},
  {path:'students-component',component:StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [AddBookInventoryComponent, BookSearchComponent, StudentPageComponent, BorrowRequestComponent]
