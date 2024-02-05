import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {

  signedInUser: string = '';
  constructor() { }
}
