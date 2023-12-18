import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MemberModule} from "../../entities/member/member.module";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private _url = "http://localhost:8080/api/v1/member";
  constructor(private httpClient:HttpClient) { }

  public getMembers():Observable<Array<MemberModule>>{
    return this.httpClient.get<Array<MemberModule>>(this._url)
  }
}
