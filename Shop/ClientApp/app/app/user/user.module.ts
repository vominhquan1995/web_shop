import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { UserRouting } from "./user.routing";
import { UserCoreModule } from "./core/user-core.module";
@NgModule({
    imports: [
        CommonModule,
        UserRouting,
        //import core 
        UserCoreModule
    ],
    exports: [],
    declarations: [
        UserComponent,
    ]
})
export class UserModule { }