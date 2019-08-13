import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    public uname: string,
    public password,
    public email

  ) { }
}
