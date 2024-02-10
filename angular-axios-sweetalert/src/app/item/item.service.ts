import { Injectable } from '@angular/core';
import axios from 'axios';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {  }

  getAllItens(): Promise<any>{
    return axios.get('/api/items');
  }
  getItemDetail(id: number): Promise<any>{
    return axios.get(`/api/items/${id}`);
  }
  createItem(request: any): Promise<any>{
   let reqData = {
    title:request.title,
    description:request.description,

   }
    return axios.post(`/api/items`, reqData);
  }
  updateItem(request: any): Promise<any>{
   let reqData = {
    title:request.title,
    description:request.description,
   }
    return axios.put(`/api/items/${request._id}`, reqData);
  }
  deleteItem(id:number): Promise<any>{
   
    return axios.delete(`/api/items?id=${id}`);
  }

}
