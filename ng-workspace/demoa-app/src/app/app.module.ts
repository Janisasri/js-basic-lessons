import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { AppHeaderComponent } from './app.headercomponent';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { BookformComponent } from './bookform/bookform.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';

const routes: Routes=[
  {path: '', component:HomeComponent},
  {path: 'news', component:NewsComponent},
  {path: 'books', component:BookCatlogComponent},
  {path: 'addbooks', component:BookformComponent},



];
@NgModule({
  declarations: [
    HomeComponent,AppComponent,
    AppHeaderComponent,BoxaComponent,
    CustomerFormComponent,CountDisplayComponent,
    HitButtonComponent,CountDisplayComponent,  
    EmployeeFormComponent,BookListComponent,
    PriceDiscountPipe,BookComponent,
    TabComponent,BookCatlogComponent,
    NewsComponent,MenuComponent,
    BookformComponent,
    LifeCycleComponent,
    LifeCycleChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }