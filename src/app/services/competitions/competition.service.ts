import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompetitionModule} from "../../entities/competition/competition.module";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private _url = "http://localhost:8080/api/v1/competition";
  constructor(private httpClient:HttpClient) { }

  public getComps() : Observable<Array<CompetitionModule>>{
    return this.httpClient.get<Array<CompetitionModule>>(this._url);
  }

  public save(comp : CompetitionModule) : Observable<CompetitionModule>{
    return  this.httpClient.post<CompetitionModule>(this._url,comp)
  }

  public delete(comp : CompetitionModule) : Observable<CompetitionModule>{
    return this.httpClient.delete<CompetitionModule>(this._url+`\${comp.id}`)
  }

  public update(comp : CompetitionModule) : Observable<CompetitionModule>{
      return this.httpClient.patch<CompetitionModule>(this._url,comp)
  }
}
