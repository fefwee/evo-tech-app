import { ProductGet } from "../models/ProductGetModel"

export class AuthUserAction {
    static readonly type = '[User] Get Profile user'
    
    constructor (public payload:ProductGet[]){}

}


