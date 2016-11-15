import { Routes, RouterModule } from '@angular/router';
import HomeComponent from './home/home.component';
import MenuComponent from './menu/menu.component';
import TableComponent from './table/table.component';
import AboutComponent from './about/about.component';
import ContactComponent from './contact/contact.component';
import  ServicesComponent from './services/services.component';
import BlogComponent from './blog/blog.component';
import AnalyticsComponent from './analytics/analytics.component';
const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuComponent,
        pathMatch: 'full'
    },
    {
        path: 'table',
        component: TableComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
    },
    {
        path: 'services',
        component: ServicesComponent,
        pathMatch: 'full'
    },
    {
        path: 'blog',
        component: BlogComponent,
        pathMatch: 'full'
    },
    {
        path: 'analytics',
        component: AnalyticsComponent,
        pathMatch: 'full'
    }
];

export default RouterModule.forRoot(appRoutes);
