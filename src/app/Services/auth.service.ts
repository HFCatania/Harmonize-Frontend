import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { User } from '../Model/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'


// @Injectable({
//   providedIn: 'root'
// })

// export class AuthService {

//   public authUrl: string;
//   public newUserUrl: string;

//   constructor(private http: HttpClient, private tokenService: TokenService) {
//     this.authUrl = environment.baseURL + '/login'; 
//     this.newUserUrl = environment.baseURL + '/register';
//    }

//    createUser(user: User): Observable<string> {
//     return this.http.post(this.newUserUrl, user, {responseType: 'text'}); 
//   }

//   logIn(email: string, password: string): Observable<string> {
//     return this.http.post(this.authUrl, {}, {
//       params: {email, password}, 
//       responseType: 'text'
//     })
//   }

  
// }


@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    logIn(username: string, password: string) {
        console.log('login');
        return this.http.post<any>(`${environment.baseURL}/login`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log(user)
                console.log("XXXXX")
                this.currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    createUser(user: User){
        return this.http.post(`${environment.baseURL}/signup`, user)
    }
}
