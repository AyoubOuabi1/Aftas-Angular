import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModule} from "../../entities/member/userModule";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = "http://localhost:8080/api/v1/user";
  constructor(private httpClient:HttpClient) { }

  public getMembers(competitionId : number|null):Observable<Array<UserModule>>{
    return this.httpClient.get<Array<UserModule>>(this._url+"/competitions?competitionId="+`${competitionId}`)
  }

  public getMembersByCompetitions(competitionId : number|null):Observable<Array<UserModule>>{
    return this.httpClient.get<Array<UserModule>>(this._url+"/competitions/rank?competitionId="+`${competitionId}`)
  }

  public getAllUsers():Observable<Array<UserModule>>{
    return this.httpClient.get<Array<UserModule>>(this._url)
  }

  public updateUser(id: number):Observable<Array<UserModule>>{
    return this.httpClient.put<Array<UserModule>>(this._url+"/updatestatus/"+id, null)
  }
}
