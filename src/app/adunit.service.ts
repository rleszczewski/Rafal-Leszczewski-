import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }

  addAdUnit(first_name, surname, email, password) {
    const obj = {
      first_name: first_name,
      surname: surname,
	  email: email,
	  password: password
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
}

editAdUnit(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

updateAdUnit(first_name, surname, email, password, id) {

  const obj = {
      first_name: first_name,
      surname: surname,
	  email: email,
	  password: password
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

  deleteAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
