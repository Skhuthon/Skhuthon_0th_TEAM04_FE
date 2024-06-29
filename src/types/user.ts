/** 유저 */
export interface User {
  senderId: number;
  senderName: string;
  tokenResponseDto: {
    accessToken: string;
  };
}

/**
 * 회원가입 할 때 필요한 리퀘스트
 */
export interface SignupRequest {
  password: string;
  senderName: string;
}

/**
 * 회원가입 한 후 response
 */
export interface SingupResponse {
  senderId: number;
  senderName: string;
}

/**
 * 로그인 할 때 필요한 리퀘스트
 */

export interface LoginRequest {
  senderName: string;
  password: string;
}

/**
 * 로그인 한 후 response
 */
export interface LoginResponse {
  senderId: number;
  senderName: string;
  tokenResponseDto: {
    accessToken: string;
  };
}
