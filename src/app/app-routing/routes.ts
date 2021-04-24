import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
import { CustomerDashboardComponent } from '../customer-dashboard/customer-dashboard.component';
import { CustomerFinancialSheetComponent} from '../customer-financial-sheet/customer-financial-sheet.component';
import { CustomerMasterDataComponent} from '../customer-master-data/customer-master-data.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';

export const routes : Routes = 
        [{ path : 'home' , component : HomeComponent},
        { path : 'about' , component : AboutComponent},
        { path : 'menu' , component : MenuComponent},
        { path : 'dishdetail/:id' , component : DishdetailComponent},
        { path : 'contactus' , component : ContactComponent},
        { path : 'profile' , canActivate : [AuthGuard] ,component : CustomerProfileComponent},
        { path : 'dashboard' , component : CustomerDashboardComponent},
        { path : 'finance_sheet' , component : CustomerFinancialSheetComponent},
        { path : 'master_data' , component : CustomerMasterDataComponent},
        {path : '' , redirectTo : '/home' , pathMatch : 'full'}];