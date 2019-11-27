import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from "rxjs/operators";
import { throwError } from "rxjs";
import { Router } from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    /**
     *
     */
    constructor(private router:Router) {
    }
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        
        
        const idToken = localStorage.getItem("id_token");

        if(idToken){
            const cloned = req.clone({
                headers : req.headers.set("Authorization","Bearer "+idToken)
            });

            return next.handle(cloned).pipe(
                //retry(1),
                catchError((error) =>{
                    this.ErrorHandler(error);
                    return throwError(error);
                })
            )
        }
        else{
            return next.handle(req).pipe(
                //retry(1),
                catchError((error) => {
                    this.ErrorHandler(error);
                    return throwError(error);
                })
            )
        }
    }

    ErrorHandler(err){
        if(err instanceof HttpErrorResponse){
            if(err.error instanceof ErrorEvent){
                console.log('error event');
            }
            else{
                console.log(`error status : ${err.status} ${err.statusText}`);
                switch(err.status){
                    case 401:   
                        this.router.navigateByUrl("/unauthorized");
                        break;
                    case 403:
                        this.router.navigateByUrl("/unauthorized");
                        break;
                    case 404:
                        this.router.navigateByUrl("/notfound");
                        break;
                }
            }
        }
        else{
            console.log('other error');
        }
    }

}