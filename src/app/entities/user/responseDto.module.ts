
export interface ResponseDto {
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  role: string;
  active : boolean;
  permissions: string[];
}

