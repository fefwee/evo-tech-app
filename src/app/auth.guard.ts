import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GetTokenService } from './get-token.service';




export const authGuard: CanActivateFn = async (route, state,):Promise<any> => {

  const getItemService = inject(GetTokenService)
  const router = inject(Router)
  
  return getItemService.getItemLocalStorage('token').then(res =>{
    debugger
    if(res){
      console.log(1);
      
      return true
    }
    else {
      console.log(2);
      
      router.navigate(['sign-in'])
      return false
    }
  })
  
  
};
