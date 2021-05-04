import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/Modules/home/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class IsSaveGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(component.isSave){
        return true;
      }
      let cf= confirm('Do you want to exit this page?')
      if(cf){
        return true;
      }
    return false;
  }
  
}
