import { Routes } from '@angular/router';
import { CartComponent } from './componant/cart/cart.component';
import { ProductComponent } from './componant/product/product.component';
import { LoginComponent } from './componant/login/login.component';
import { LayoutComponent } from './componant/layout/layout.component';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { AddproductComponent } from './componant/addproduct/addproduct.component';

export const routes: Routes = [
  
    // {
    //     path: '',
    //     component: LoginComponent, pathMatch:"full"
        
    // },


    // {
    //     path: 'login',
    //     component: LoginComponent,
    // },
   
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     children: [
    //         {
    //             path:'dashboard',
    //             component: DashboardComponent
    //         }]
        
        
    // },
   
   
   
    {
        path: '',
        component: ProductComponent,
        title: 'Home',
        
    },


    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart',
        
    },

    {
        path: 'addproduct',
        component: AddproductComponent,
        title: 'Add Product',
        
    }
];
