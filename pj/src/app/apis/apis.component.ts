import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  usersList:any = [];
  userInfo:any = {};
  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.users.getUses().subscribe((res:any)=>{
      //sucess
      this.usersList = res.data;
    }, (err:any)=>{
      //failure
    })
  }

  createUser(){
    this.users.createUser().subscribe((res:any)=>{
      //sucess
      this.userInfo = res;
      this.getUsers();
    }, (err:any)=>{
      //failure
    })
  }
  viewUser(id:any){
    this.users.getSingleUser(id).subscribe((res:any)=>{
      //sucess
      this.userInfo = res;
    }, (err:any)=>{
      //failure
    })
  }
  editUser(id:any){
   this.users.editUser(id).subscribe((res:any)=>{
      //sucess
      this.userInfo = res;
      this.getUsers();
    }, (err:any)=>{
      //failure
    })
  }
  deleteUser(id:any){
    this.users.deleteUser(id).subscribe((res:any)=>{
      //sucess
      this.userInfo = res;
      this.getUsers();
    }, (err:any)=>{
      //failure
    })
  }
}
