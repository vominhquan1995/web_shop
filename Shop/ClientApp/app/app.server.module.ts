import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { routing } from './app.routing';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        ServerModule,
        CommonModule,
        routing
    ]
})
export class AppModule {
}
