import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { LibrarianComponent} from './component/librarian/librarian.component'; 
// import { AddBookInventoryComponent } from './component/librarian/add-book-inventory/add-book-inventory.component';
// import { BorrowRequestComponent } from './component/librarian/borrow-request/borrow-request.component';
// import { StudentPageComponent } from './component/librarian/student-page/student-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './component/shared/api.service';
// import { BookSearchComponent } from './component/librarian/book-search/book-search.component';

// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DashpageComponent } from './component/dashpage/dashpage.component';
import { SignupComponent } from './component/signup/signup.component';
// import { LibrarianModule } from './component/librarian/librarian.module';

@NgModule({
  declarations: [
    AppComponent, 
    // LibrarianComponent,
    // AddBookInventoryComponent,
    // BookSearchComponent,
    // BorrowRequestComponent,
    // StudentPageComponent,
    DashpageComponent,
    SignupComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // LibrarianModule
    // HttpClientModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  providers: [
    // ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('App module loaded..');
  }
}
