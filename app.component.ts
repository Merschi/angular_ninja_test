/**
 * Created by stephan on 25.01.17.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'ponyracer-app',
    template: `<h1>PonyRacer</h1>
    <h2>Number of users: {{user.count}}</h2>
     <ns-races></ns-races>`

})
export class PonyRacerAppComponent {
    user: any = {
        'count': 1234
    }
}