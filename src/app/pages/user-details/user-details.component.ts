import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { UserState } from 'src/app/shared/app.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SocialAuthService } from 'angularx-social-login';
import { SignOut } from '../../shared/app.actions';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    @Select(UserState.user) user$!: Observable<any>;

    constructor(
        private router: Router, 
        private authService: SocialAuthService,
        private store: Store
    ) { }

    ngOnInit(): void {
        this.user$
            .subscribe(val => {
                if(!val || !Object.keys(val).length) this.router.navigate(['login']);
            })
    }

    signOut(): void {
        this.authService.signOut();
        this.store.dispatch([new SignOut()]);
    }

}
