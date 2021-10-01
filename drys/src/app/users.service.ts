import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(){
    let url = 'https://gorest.co.in/public/v1/users?page=67';
    return this.http.get(url);
  }

  getSingleUser(id:number){
    let url = 'https://gorest.co.in/public/v1/users/'+id;
    return this.http.get(url);
  }

  createuser(){
    let url = 'https://gorest.co.in/public/v1/users';
    var data = {
      "name":"drys6",
      "email":"drys6@gmail.com",
      "gender":"male",
      "status":"active"
    }
    let headerData = {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}
    return this.http.post(url,data, {headers: headerData});
  }

  updateuser(id:number){
    let url = 'https://gorest.co.in/public/v1/users/'+id;
    var data = {
      "name":"syed",
      "email":"syed@gmail.com",
      "gender":"male",
      "status":"active"
    }
    let headerData = {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}

    return this.http.put(url,data, {headers: headerData});
  }
  
  deleteUser(id:number){
    let headerData = {'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'}

    let url = 'https://gorest.co.in/public/v1/users/'+id;
    return this.http.delete(url, {headers: headerData});

  }

}
