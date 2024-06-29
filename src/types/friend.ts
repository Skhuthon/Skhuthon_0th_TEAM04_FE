/**
 * 메인 책장
 */
export interface FriendInfo {
  senderId: number;
  receiverId: number;
  senderName: string;
  receiverName: string;
  status: string;
  title: string;
  friendId: number;
}

/**
 * 요청보낸친구리스트
 */

export interface AcceptFriendList {
  memberId: number;
  receiverId: number;
  status: string;
  title: string;
  friendId: number;
}
