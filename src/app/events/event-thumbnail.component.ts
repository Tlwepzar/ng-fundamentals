import { Component, Input} from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
    template: `    
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase}}</h2>
    <div>Date: {{event?.date | date:'dd/MM/y'}}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">( Early Start )</span>
        <span *ngSwitchCase="'10:00 am'">( Late Start )</span>
        <span *ngSwitchDefault>( Normal Start )</span>
    </div>
    <div>Price: {{event?.price  | currency:'R'}}</div>
    <div [hidden]="!event?.location?.address">
        <span> Location: {{event?.location?.address}}</span>
        <span class="pad-left"> {{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
    </div>
</div>
`,
styles: [`
.thumbnail { min-height: 205px; }
.well div { color: grey; }
`]
})
export class EventThumbnailComponent {
    @Input() event:IEvent;
    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold'}
        else if (this.event && this.event.time === '9:00 am')
            return { color: '#FF7B2E', 'font-weight': 'bold'} 
        else if (this.event && this.event.time === '10:00 am')
            return { color: '#FF0000', 'font-weight': 'bold'} 
        return{}
    }
}
