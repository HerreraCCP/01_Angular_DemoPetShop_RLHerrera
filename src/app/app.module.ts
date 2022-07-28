import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { CheckoutPageComponent } from './pages/store/checkout-page/checkout-page.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { SignupPageComponent } from './pages/account/sign-up-page/sign-up-page.component';


@NgModule({
  declarations: [
    MaskDirective,
    AppComponent,
    FramePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ResetPasswordPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ProfilePageComponent,
    PetsPageComponent,
    ProductCardComponent,
    LoadingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), //https://www.npmjs.com/package/ngx-toastr
    AppRoutingModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
