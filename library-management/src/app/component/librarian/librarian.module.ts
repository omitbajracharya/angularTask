import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianComponent } from './librarian.component';
import { AddBookInventoryComponent } from './add-book-inventory/add-book-inventory.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { BorrowRequestComponent } from './borrow-request/borrow-request.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpLoaderFactory } from 'src/app/app.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApiService } from '../../shared/api.service';
import { LibnavComponent } from './libnav/libnav.component';
import { DashpageComponent } from '../dashpage/dashpage.component';


const routes: Routes = [
  {
    path: '',
    component: LibrarianComponent,
    children: [
      { path: 'home', component: AddBookInventoryComponent },
      { path: 'book-search', component: BookSearchComponent },
      { path: 'student-page', component: StudentPageComponent },
      { path: 'borrow-request', component: BorrowRequestComponent },

      //redirect to Librarian component
      { path: '', redirectTo: '/librarian/home', pathMatch: 'full' },
      // Setting up wildcard route for 404 page
      { path: '**', component: PagenotfoundComponent },
    ]
  }
];

// for Internationalization
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [LibrarianComponent, AddBookInventoryComponent, BookSearchComponent, StudentPageComponent, BorrowRequestComponent, PagenotfoundComponent, LibnavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ApiService
  ],
  exports: [RouterModule]
})
export class LibrarianModule {
  constructor() {
    console.log('Librarian module loaded..');
  }
}
