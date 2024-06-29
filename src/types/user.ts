/** 유저 */
export interface User {
  memberId: number;
  password: string;
  memberName: string;
}

/**
 * 회원가입 할 때 필요한 리퀘스트
 */
export interface SignupRequest {
  password: string;
  memberName: string;
}

/**
 * 로그인 할 때 필요한 리퀘스트
 */

export interface LoginRequest {
  memberName: string;
  password: string;
}
