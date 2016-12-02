import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIRouter, UIRouterModule } from 'ui-router-ng2'; 
import { HttpModule } from '@angular/http';
import { MyUiRouterConfigService } from './shared/services/my-ui-router-config.service';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

let loginState = { name: 'login', url: '/',  component: LoginComponent };
let dashboardState = { name: 'dashboard', url: '/dashboard',  component: DashboardComponent }; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    UIRouterModule.forRoot({ states: [loginState, dashboardState], useHash: true, configClass: MyUiRouterConfigService }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
