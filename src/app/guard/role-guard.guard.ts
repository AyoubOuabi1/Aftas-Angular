import { CanActivateFn, Router } from '@angular/router';
import { ResponseDto } from "../entities/user/responseDto.module";
import {inject} from "@angular/core";

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const responseString: string | null = localStorage.getItem('user');
  const response: ResponseDto = responseString ? JSON.parse(responseString) : {};

  console.log(response.role);
 if (response.active){
   if (response.role === 'MANAGER') {
     if(state.url.startsWith('/competitions') || state.url.startsWith('/hunts') || state.url.startsWith('/podium') || state.url.startsWith('/participations')  || state.url.startsWith('/fishs')  || state.url.startsWith('/users')){
       return true;
     }else{
       router.navigate(['/unauthorized']);
       return false;
     }
   }else if (response.role === 'JURY') {
     if(state.url.startsWith('/competitions') || state.url.startsWith('/hunts') || state.url.startsWith('/podium') || state.url.startsWith('/participations') || state.url.startsWith('/fishs') ){
       return true;
     }else{
       router.navigate(['/unauthorized']);
       return false;
     }
   }else if (response.role === 'USER') {
     if(state.url.startsWith('/competitions') || state.url.startsWith('/podium') || state.url.startsWith('/participations')){
       return true;
     }else{
       router.navigate(['/unauthorized']);
       return false;
     }
   }
 }else {
    router.navigate(['/status']);
    return false;
 }


  return false;
};

