import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
    UserHeaderTop,
    UserHeaderMiddle,
    UserHeaderBottom

} from ".";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        UserHeaderTop,
        UserHeaderMiddle,
        UserHeaderBottom
    ],
    exports: [
        UserHeaderTop,
        UserHeaderMiddle,
        UserHeaderBottom
    ]
})
export class UserCoreModule {

}