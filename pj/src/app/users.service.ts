import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUses(){
    var url:string = 'https://gorest.co.in/public/v1/users?page=69';
    const headers:any = {'Authorization':'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'};
    return this.http.get(url,{headers: headers});
  }

  getSingleUser(id:string){
    var url = 'https://gorest.co.in/public/v1/users/' + id;
    const headers:any = {'Authorization':'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'};
    return this.http.get(url,{headers: headers});
  }
  
  createUser(){
    var url = 'https://gorest.co.in/public/v1/users';
    const apiHeaders:any = {'Authorization':'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'};
    var data = {
      "name":"Pjsss",
      "gender":"male", 
      "email":"tpjsss@angular.com",
      "status":"active"
    }
    return this.http.post(url, data,{headers: apiHeaders});
  }
  
  editUser(id: string){
    var url = 'https://gorest.co.in/public/v1/users/'+ id;
    const headers:any = {'Authorization':'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'};

    var data = {
      "id":id,
      "name":"Pj editss",
      "gender":"female", 
      "email":"tpj-editss@angular.com",
      "status":"active"
    }
    return this.http.put(url, data,{headers: headers});
  }
  
  deleteUser(id:string){
    var url = 'https://gorest.co.in/public/v1/users/' + id;
    const headers:any = {'Authorization':'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'};
    return this.http.delete(url,{headers: headers});
  }
}
