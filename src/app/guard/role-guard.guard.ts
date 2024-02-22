import {CanActivateFn, Router} from '@angular/router';
import {ResponseDto} from "../entities/user/responseDto.module";

export const roleGuard: CanActivateFn = (route, state) => {

  const router: Router = new Router();
  const responseString: string | null = localStorage.getItem('user');
  const response: ResponseDto = responseString ? JSON.parse(responseString) : {};

  if (response.role === 'MANAGER' && state.url.startsWith('/manager')) {
      return true;
  } else if (response.role === 'USER' && state.url.startsWith('/user')) {
      return true;
  }else if (response.role === 'JURY' && state.url.startsWith('/jury')) {
      return true;
  } else {
      router.navigate(['/login']);
      return false;
  }

};
