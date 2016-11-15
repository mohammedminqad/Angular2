import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import routing from './restaurant.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import CoreComponent from './core/core.component';
import HomeComponent from './home/home.component';
import MenuComponent from './menu/menu.component';
import TableComponent from './table/table.component';
import AboutComponent from './about/about.component';
import ContactComponent from './contact/contact.component';
import ServicesComponent from './services/services.component';
import BlogComponent from './blog/blog.component';
import AnalyticsComponent from './analytics/analytics.component';

@NgModule({
    imports: [BrowserModule, FormsModule,routing, HttpModule],
    providers:[],
    declarations: [
        CoreComponent,
        HomeComponent ,
        MenuComponent,
        TableComponent,
        AboutComponent,
        ContactComponent,
        ServicesComponent,
        BlogComponent,
        AnalyticsComponent
    ],
    bootstrap: [CoreComponent]
})

export default class RestaurantModule {
}
