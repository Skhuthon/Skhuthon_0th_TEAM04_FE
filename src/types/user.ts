export interface User {
  memberId: number;
  password: string;
  memberName: string;
}

export interface SignupRequest {
  getmemberName: string;
  password: string;
  name: string;
}
