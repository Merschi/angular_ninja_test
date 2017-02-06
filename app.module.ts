/**
 * Created by stephan on 25.01.17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PonyRacerAppComponent } from './app.component';
// do not forget to import the component
import { RacesComponent } from './races.component';
@NgModule({
    imports: [BrowserModule],
    declarations: [PonyRacerAppComponent, RacesComponent],
    bootstrap: [PonyRacerAppComponent]
})
export class AppModule {
}
