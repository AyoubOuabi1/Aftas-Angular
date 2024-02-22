import {Time} from "@angular/common";

export interface UserModule {

  id: number;
  username: string;
  email: string;
  num: number;
  name: string;
  familyName: string;
  accessionDate: Time;
  nationality: string;
  identityDocument: string;
  identityNumber: string;
}

