import {Time} from "@angular/common";

export interface UserModule {

  id: number;
  username: string;
  email: string;
  num: number;
  name: string;
  familyName: string;
  accessionDate: Time;
  active: boolean;
  role: string;
  nationality: string;
  identityDocument: string;
  identityNumber: string;
}

