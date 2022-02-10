import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private _httpClient: HttpClient) { }

  creatcurd(details:any): Observable<any>{
    return this._httpClient.post("http://localhost:3000/crudOperation/create_Data_to_push_in_Database_table",details)
  }
  getcurd(): Observable<any>{
    return this._httpClient.get("http://localhost:3000/crudOperation/get_all_data_from_database_table")
  }
 deletecurd(details:any):Observable<any>{
   return this._httpClient.delete("http://localhost:3000/crudOperation/delete_Data_in_Database_table/"+details)
 }
 viewcurd(details:any):Observable<any>{
   return this._httpClient.get("http://localhost:3000/crudOperation/get_particular_data_from_database_table/"+details)
 }
 updatecurd(id,details:any):Observable<any>{
   return this._httpClient.put("http://localhost:3000/crudOperation/update_Data_in_Database_table/"+id,details)
 }
}
