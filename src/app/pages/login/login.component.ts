import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { SignIn } from '../../shared/app.actions';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    subscription!: Subscription;

    constructor(
        private authService: SocialAuthService, 
        private store: Store,
        private router: Router) {}

    signInWithGoogle(): void {
        this.subscription = this.authService.authState.pipe(take(1)).subscribe((user) => {
            if(user && Object.keys(user)) {
                this.store.dispatch([new SignIn(user)]);
                this.router.navigate(['user-details']);            
            }
        });
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    ngOnInit(): void {
    }

}
