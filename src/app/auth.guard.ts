import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GetTokenService } from './get-token.service';



export const authGuard: CanActivateFn = async (route, state,): Promise<any> => {
  
  const getItemService = inject(GetTokenService)
  const router = inject(Router)
  const response = await getItemService.getItemLocalStorage<string>('token')
  if(response ){
    return true
  }
  else {
  console.log(2);
  
  router.navigate(['sing-in'])
  return false
  }
  }; 