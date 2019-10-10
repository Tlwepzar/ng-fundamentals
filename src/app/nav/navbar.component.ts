import { Component } from '@angular/core'
import { AuthService } from '../events/user/auth.service';
import { ISession, EventService } from '../events/shared/index';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size 15px;}
    #searchForm {margin-right: 100px;}
    #searchButton {margin-left: 20px;}
    @media (max-width:1200px) {#searchForm {displya:none}}
    li > a.active { color: rgb(0, 0, 0); }
    `
    ]
})

export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];
     
    constructor(public auth:AuthService, private eventService:EventService){
        
    }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        })
    }
}