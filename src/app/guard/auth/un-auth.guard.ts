import {CanActivateFn, Router} from '@angular/router';
import {ResponseDto} from "../../entities/user/responseDto.module";

export const unAuthGuard: CanActivateFn = (route, state) => {
  const router: Router = new Router();
  const responseString: string | null = localStorage.getItem('user');

  if (!responseString) {
    return true;
  }

  const response: ResponseDto = JSON.parse(responseString);

  if (!response.accessToken) {
    return true;
  } else {
    router.navigate(['/competitions']);
    return false;
  }
};
