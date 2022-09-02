import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }
  
   

  getAll(){
    return this.http.get(environment.API_OUT_URL+"api/v1/users");
  }

  addUser(data: any): Observable<any> {
    let user ={
      userName: data.userName,
      password: data.password,
      employee: data.employee,
      role: data.role,
    }
    console.log(user)
    return this.http.post(environment.API_OUT_URL+"api/auth/signup",user);
  }

  deleteUser(id: any){
    return this.http.delete(environment.API_OUT_URL+"api/v1/users/user/"+id);
  }

  checkPassword(password: any, id: any) {
    let data = {
      "id": id,
      "password": password
    }
    console.log(data)
    return this.http.post(environment.API_OUT_URL+"api/v1/users/password",data);
}

updateUser(password:any,id:any){
  return this.http.patch(environment.API_OUT_URL+"api/auth/update/"+id,password);
}
}
