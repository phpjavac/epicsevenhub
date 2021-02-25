import { Injectable } from '@angular/core';
import axios from 'axios';

const http = axios.create({
  baseURL: '',
});
@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  // constructor() {}
  axiosGet(api: string): any {
    return new Promise((resolve, reject) => {
      http
        .get(api)
        .then((res) => {
          resolve(res.data.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
