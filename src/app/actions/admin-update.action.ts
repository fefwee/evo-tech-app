export class AdminUpdateAction {
    static readonly type = '[Admin] update Product'

    constructor (public data:any,public id?:any){
        
    }
}