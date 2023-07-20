export class AuthUserAction {
    static readonly type = '[User] Get Profile user'
    
    constructor (public payload:any){}

}

export class AdministrationGetUser {
    static readonly type = '[User] get fuul request'
    constructor(public id:any){}
}
