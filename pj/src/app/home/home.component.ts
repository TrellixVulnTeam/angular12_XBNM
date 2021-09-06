import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  availableUsers:any = [
    {
      img: 'https://i.picsum.photos/id/925/200/200.jpg?hmac=GRls_CYMB5cOj1RE3IwjOC0zUwiPc25idJNavVPWbtM',
      name: 'Mahesh'
    },
    {
      img: 'https://i.picsum.photos/id/139/201/201.jpg?hmac=hYNwT9OErpsKaIyVKwAToQ8m7Hhb2wfDj2roT75L_Us',
      name: 'Naresh'
    },
    {
      img: 'https://i.picsum.photos/id/200/202/202.jpg?hmac=uKsRChsuzkLDpByDc19cKA0-ZBlUaFzKco_2eBMcCpY',
      name: 'Suresh'
    },
    {
      img: 'https://i.picsum.photos/id/329/203/203.jpg?hmac=5kEpgv5INtWYOxrLj3mScigq9vXPUAZCKkI9RfCj8aU',
      name: 'Lokesh'
    },
    {
      img: 'https://i.picsum.photos/id/1012/204/204.jpg?hmac=zalz2Dos6ETKZOukU7Th81dSiLBUGC4ulHMx6q6qjLQ',
      name: 'Rajesh'
    },
    {
      img: 'https://i.picsum.photos/id/588/205/205.jpg?hmac=Z8oSg7JS2rP1Ue0YzOlOiz9ac-MDoGXmpZvS607i8bc',
      name: 'Roopesh'
    },
    {
      img: 'https://i.picsum.photos/id/215/207/207.jpg?hmac=rYmQCEC2cLHu4YvluvJ3ooDjSCW5z1R-Gg0bpqxITPM',
      name: 'somesh'
    },
    {
      img: 'https://i.picsum.photos/id/626/206/206.jpg?hmac=UQF2mOt7eOzI1YU--ItZSVplZH8I0E17vPOBZ081FFA',
      name: 'kumar'
    },
  ];
  selectUsers:any = [];
  constructor() { }

  availUser(index:number){
    this.selectUsers.push(this.availableUsers[index]);
    this.availableUsers.splice(index, 1);
  }

  selUser(index:number){
    this.availableUsers.push(this.selectUsers[index]);
    this.selectUsers.splice(index, 1);
  }
}