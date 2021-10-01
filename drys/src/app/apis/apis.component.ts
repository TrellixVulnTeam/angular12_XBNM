import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

  usersList:any;
  userInfo:any;
  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.users.getUsers().subscribe((res:any) => {
      // status code is 200
      this.usersList = res.data;
    },(err:any)=>{
      // status code is not 200
    });

  }
  createuser(){
    this.users.createuser().subscribe((res:any) => {
      this.userInfo = res.data;
      this.getUsers();
    },(err:any)=>{
      alert('user creation failed');
    });
  }

  viewUser(id:any){
    this.users.getSingleUser(id).subscribe((res:any) => {
      this.userInfo = res;
    },(err)=>{
    });
  }

  editUser(id:any){
    this.users.updateuser(id).subscribe((res:any) => {
      this.userInfo = res;
      this.getUsers();
    },(err)=>{
    });
  }

  deleteUser(id:any){
    this.users.deleteUser(id).subscribe((res:any) => {
      this.getUsers();
      this.userInfo = res;
    },(err)=>{
      // status code is not 200
    });
  }
}
