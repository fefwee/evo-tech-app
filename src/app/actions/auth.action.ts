export class AuthUserAction {
    static readonly type = '[User] Get Profile user'
    
    constructor (public payload:{username:string,password:any}){}

}