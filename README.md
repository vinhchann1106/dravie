### 🌐 DraVie – Landing Page Nền Tảng Học Ngoại Ngữ

N24DCCN183 – Nguyễn Ngọc Vinh

DraVie là dự án Landing Page giới thiệu nền tảng học ngoại ngữ, được xây dựng với mục tiêu mang đến trải nghiệm hiện đại, mượt mà và thân thiện với người dùng.
Dự án tập trung vào UI/UX, kèm theo một số tính năng mô phỏng hành vi thực tế như giỏ hàng và skeleton loading.

⸻

## 🚀 Công nghệ sử dụng

Framework
	•	Next.js (TypeScript)

Libraries
	•	TailwindCSS
	•	Shadcn UI
	•	Framer Motion
	•	Zustand
	•	Lenis (smooth scroll)

⸻

## 🧭 Routing & Cấu trúc các trang
- `/`: Trang chủ
- `/free-entry-test`: Kiểm tra đầu vào đánh giá năng lực
- `/about`: Thông tin về chúng tôi
- `/blog`: Trang Blog
- Các trang khoá học:
  1. `/ielts`: IELTS
  2. `/toeic`: TOEIC
  3. `/hsk`: Tiếng Trung HSK
  4. `/jlpt`: Tiếng Nhật JLPT
  5. `/topik`: Tiếng Hàn TOPIK
---------
➡️ Nội dung của các khoá học và blog được render từ mock data trong folder `mock/.`
## ✨ Tính năng nổi bật

🛒 Giỏ hàng khóa học
	•	Thêm / xóa khóa học.
	•	Lưu trữ bằng localStorage.

📰 Skeleton Loading cho Blog
	•	Fake timeout để tạo hiệu ứng loading.

🎨 UI/UX hiện đại
	•	Smooth scroll (Lenis)
	•	Animation trang (Framer Motion)
	•	Component UI đồng nhất (Shadcn)

⸻

## 🛠 Những phần chưa hoàn thiện
	•	Trang /free-entry-test mới hoàn thiện giao diện, chưa có bài test thật.
	•	Chưa phát triển tính năng Authentication.
	•	Chưa phát triển Checkout giỏ hàng
	•	Dự án tập trung vào phần giao diện (frontend showcase).
