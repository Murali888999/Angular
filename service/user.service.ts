import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  users:string[] =['murali','mohan','kal'];
  getFirstUser(){
    return this.users[0];
  }
}
