import { Component } from "@angular/core";

@Component({
    selector: 'user-header-top',
    templateUrl: 'header-top.component.html'
})
export class UserHeaderTop {
    info = {
        phone: '0123456789',
        email: 'admin@gmail.com',
        facebook: 'http://facebook.com',
        gmail: 'http://gmail.com',
        instagram: 'http://instagram.com',
        twitter: 'http://twitter.com',
    }
}