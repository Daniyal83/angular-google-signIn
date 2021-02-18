export class SignIn {
    static readonly type = '[User] Sign In'
    constructor(public payload: any) {}
}

export class SignOut {
    static readonly type = '[User] Sign Out'
}