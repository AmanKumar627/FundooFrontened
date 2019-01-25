import { Injectable } from '@angular/core';
import { register } from './models/register.model';

import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { userOtp } from './models/opt.model';
import { login } from './models/login.model';



const httpOptions={
  headers: new HttpHeaders({'Access-Control-Allow-Origin ': 'http://localhost:4200','Content-Type': 'application/json' }),
 
};

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8080/fundoo/';

  public createUser(user: register) :any {
    console.log(this.userUrl+'sendOtp')
    return this.http.post<register>(this.userUrl+'sendOtp',user);
   
  }
  public verifyUser(otpUser : userOtp) : any{
    return this.http.post<userOtp>(this.userUrl+'otpVerify',otpUser);
  }
  public verifyLogin(logIn : login) : any{
    console.log(logIn)
    return this.http.post<login>(this.userUrl+'login',logIn,{headers: new HttpHeaders().set("jwtTokenxxx","")
    ,observe:'response'});
  }
}


