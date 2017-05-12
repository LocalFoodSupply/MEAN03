import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/**
 * Modules
 */
import {CartModule} from './cart/cart.module';
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';
import {LocationStrategy, HashLocationStrategy , PathLocationStrategy} from '@angular/common';
/*
 * Components
 */
import {CheckoutViewComponent} from './checkout/checkout-view.component';
import {AppComponent}  from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import {productaddcomponent} from  "./product/product-add.component"

/*
 * Routing
 */
import {AppRoutes}  from './app.routes';

import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,AuthenticationModule,HttpModule,
            RouterModule.forRoot(AppRoutes), CartModule, CategoryModule, ProductModule],
  declarations: [AppComponent, NavbarComponent, FooterComponent,CheckoutViewComponent,
                WelcomeComponent,productaddcomponent],
    providers: [AuthenticationService,{provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
