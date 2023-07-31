import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async (route, state): Promise<any> => {
  const router = inject(Router);
  const token = inject(AuthService)
  if (token.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
