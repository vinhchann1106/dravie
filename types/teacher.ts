export interface Teacher {
  id: string;
  name: string;
  title: string;
  // hỗ trợ cả string hoặc string[] (nếu string sẽ tự tách theo newline/comma/semicolon)
  bio: string | string[];
  avatar: string;
}
