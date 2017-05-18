import { Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import {ProductListComponent} from  "./product/product-list.component"
import {ProductViewComponent} from './product/product-view.component';
import {CartViewComponent} from './cart/cart-view.component';
import {CheckoutViewComponent} from './checkout/checkout-view.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import {productaddcomponent} from  "./product/product-add.component"
import {ChatComponent } from './chat/chat.component';
import {ChatHelpComponent } from './chat/chat/chat-help.component';


export const AppRoutes: Routes = [
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "welcome", component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductViewComponent },
    { path: 'cart', component: CartViewComponent },
    { path: 'checkout', component: CheckoutViewComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    {path: 'productadd', component: productaddcomponent },
    ];

//只需要导入一个组件