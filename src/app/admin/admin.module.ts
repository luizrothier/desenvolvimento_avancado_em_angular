import { AdminRoutingModule } from './admin.routes';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers: [

    ],
    exports: [

    ]
})
export class AdminModule {}