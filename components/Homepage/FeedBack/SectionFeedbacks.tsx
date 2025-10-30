import ReviewCarousel from "./ReviewCarousel";

const mockReviews = [
  {
    id: 1,
    name: "Lê Anh Thư",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Le_Anh_Thu_720b860559.png",
    likeCount: 365,
    bodyContent:
      "<p>Kh&oacute;a TOEIC của DraVie dạy rất kh&aacute;c biệt nhờ video hoạt cảnh, t&igrave;nh huống h&agrave;i hước. C&aacute;ch học tiếng anh n&agrave;y gi&uacute;p em ghi nhớ từ vựng, ngữ ph&aacute;p tự nhi&ecirc;n, dễ hiểu m&agrave; kh&ocirc;ng &aacute;p lực, học xong thấy rất hiệu quả.</p>",
  },
  {
    id: 2,
    name: "Hoàng Tuấn Linh",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Hoang_Tuan_Linh_befb010288.png",
    likeCount: 179,
    bodyContent:
      "<p>Em th&iacute;ch nhất kh&oacute;a IELTS của DraVie v&igrave; b&agrave;i giảng c&ocirc; đọng, dễ hiểu. Đặc biệt với kh&oacute;a học tiếng Anh n&agrave;y, t&iacute;nh năng chấm chữa chi tiết gi&uacute;p em biết lỗi ngữ ph&aacute;p, từ vựng v&agrave; điểm mạnh để cải thiện hiệu quả.</p>",
  },
  {
    id: 3,
    name: "Lý Thu Hương",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Ly_Thu_Huong_3854745832.png",
    likeCount: 79,
    bodyContent:
      '<p><span style="font-family: Lexend,Arial;">V&igrave; chỉ c&ograve;n hơn 3 th&aacute;ng học để tiếng Anh v&agrave; cần 600+ để ra trường n&ecirc;n em chọn học TOEIC ở DraVie. Qủa kh&ocirc;ng sai v&igrave; ở đ&acirc;y em được nạp đủ những kiến thức cần thiết, luyện c&ugrave;ng ph&ograve;ng ảo.</span></p>',
  },
  {
    id: 4,
    name: "Phạm Kim Oanh",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Pham_Thi_Kim_Oanh_981425af97.png",
    likeCount: 174,
    bodyContent:
      "<p>Trước học tiếng Anh online nhiều nhưng kh&ocirc;ng hiệu quả v&igrave; qu&aacute; khu&ocirc;n mẫu. Học DraVie thấy th&uacute; vị hơn, d&ugrave; chưa hết kh&oacute;a nhưng em đ&atilde; nắm kiến thức cơ bản, nhớ nhiều bộ thủ v&agrave; từ vựng hơn hẳn!</p>",
  },
  {
    id: 5,
    name: "Phạm Đặng Minh",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Pham_Dang_Minh_e3a6ae2b9c.png",
    likeCount: 260,
    bodyContent:
      "<p>M&igrave;nh th&iacute;ch nhất ph&ograve;ng ảo nhập vai DraVie AI v&igrave; kh&ocirc;ng bị g&ograve; b&oacute; theo kịch bản cố định, c&oacute; thể thoải m&aacute;i ph&aacute;t triển hội thoại theo &yacute; tưởng ri&ecirc;ng, gi&uacute;p luyện n&oacute;i tự nhi&ecirc;n v&agrave; học ngoại ngữ hiệu quả hơn.</p>",
  },
  {
    id: 6,
    name: "Hoàng Thu Hiền",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Hoang_Thu_Hien_1_26c632b283.jpg",
    likeCount: 98,
    bodyContent:
      "<p>C&aacute;c kh&oacute;a học tiếng Anh của DraVie rất hợp với mấy người duy mỹ như m&igrave;nh, thiết kế kh&oacute;a học rất th&ocirc;ng minh, gọn g&agrave;ng v&agrave; th&acirc;n thiện, chương tr&igrave;nh c&oacute; thể giống nhau nhưng đầu tư giao diện đẹp l&agrave; m&igrave;nh đ&aacute;nh gi&aacute; cao.</p>",
  },
  {
    id: 7,
    name: "Lê Thị Hương",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Le_Thi_Huong_3_37e1814d1a.jpg",
    likeCount: 112,
    bodyContent:
      "<p>Em đang học DraVie TOEIC thấy hiệu quả n&ecirc;n thử th&ecirc;m cả DraVieTalk để r&egrave;n speaking. Học xong thấy th&iacute;ch v&igrave; được luyện n&oacute;i với AI thoải m&aacute;i, kh&ocirc;ng g&ograve; theo 1 kịch bản cố định. Sẽ mua g&oacute;i d&ugrave;ng để học ngoại ngữ l&acirc;u d&agrave;i ạ!</p>",
  },
  {
    id: 8,
    name: "Thảo Giang",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Giang_Thanh_Thao_1_20dd5e3582.jpg",
    likeCount: 80,
    bodyContent:
      "<p>Sau khi học kh&oacute;a HSK của DraVie, em thấy thầy c&ocirc; giảng cực kỳ chi tiết. Điều em th&iacute;ch nhất l&agrave; DraVie lu&ocirc;n quan t&acirc;m tiến độ học vi&ecirc;n. Đ&acirc;y cũng l&agrave; nơi học tiếng Trung online đầu ti&ecirc;n m&agrave; em thấy chỉn chu từ A-Z.</p>",
  },
  {
    id: 9,
    name: "Đỗ Thị Hảo",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Do_Thi_Thu_Ha_517691ccb4.png",
    likeCount: 190,
    bodyContent:
      "<p>Em đạt 425 TOEIC Listening nhờ DraVie ph&acirc;n loại dạng b&agrave;i, dạy chi tiết từng phần v&agrave; c&oacute; ph&ograve;ng Luyện đề ảo để &ocirc;n tập. Nhờ luyện đề nhiều lần, kỹ năng nghe tiếng Anh của em cải thiện r&otilde; rệt!</p>",
  },
  {
    id: 10,
    name: "Vũ Thị Phương",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Vu_Thi_Phuong_2_637e756a32.jpg",
    likeCount: 219,
    bodyContent:
      '<p><span style="font-family: Lexend,Arial;">S&aacute;ng nay em học b&agrave;i đầu Listening chuy&ecirc;n s&acirc;u b&ecirc;n m&igrave;nh. Cảm nhận của em l&agrave; kh&aacute; h&agrave;i l&ograve;ng về trải nghiệm học tiếng Anh n&agrave;y. Điều em th&iacute;ch nhất l&agrave; b&agrave;i tập nhiều, đ&aacute;p &aacute;n chi tiết, giải th&iacute;ch cặn kẽ v&agrave; note rất dễ thương.</span></p>',
  },
  {
    id: 11,
    name: "Đỗ Đình Vũ",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Do_Dinh_Vu_18840cbbc8.png",
    likeCount: 301,
    bodyContent:
      '<p><span style="font-family: Lexend,Arial;">Lộ tr&igrave;nh học tiếng Anh TOEIC 2 kỹ năng của DraVie chi tiết từng ng&agrave;y xen kẽ Listening v&agrave; Reading gi&uacute;p em tiến bộ đồng đều cả 2 kỹ năng n&ecirc;n khi đi thi em được tr&ograve;n 400 cho cả 2 kỹ năng lu&ocirc;n!</span></p>',
  },
  {
    id: 12,
    name: "Phương An",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Luong_Phuong_An_f932d6d725.png",
    likeCount: 48,
    bodyContent:
      "<p>App d&ugrave;ng mượt, đầu tư quay dựng video hoạt cảnh 100% người nước ngo&agrave;i, củng cố với &ocirc;n lại b&agrave;i kiểu chơi game vừa sức, kh&ocirc;ng dễ qu&aacute; g&acirc;y nh&agrave;m ch&aacute;n hay kh&oacute; qu&aacute; bị nản trong qu&aacute; tr&igrave;nh học ngoại ngữ.&nbsp;</p>",
  },
  {
    id: 13,
    name: "Đinh Trọng Nghĩa",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Dinh_Trong_Nghia_37458d4bc5.png",
    likeCount: 79,
    bodyContent:
      "<p>Em thi khối D n&ecirc;n chọn học IELTS online ở DraVie v&igrave; gi&uacute;p em x&acirc;y dựng lộ tr&igrave;nh học tiếng Anh r&otilde; r&agrave;ng, kiến thức c&ocirc; đọng, ngắn gọn, gi&uacute;p tiết kiệm thời gian. Về phần b&agrave;i tập th&igrave; cũng c&oacute; đ&aacute;p &aacute;n v&agrave; sửa lỗi rất chi tiết.</p>",
  },
  {
    id: 14,
    name: "Ngọc Nga",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Ngoc_Nga_76166e7b2a.png",
    likeCount: 172,
    bodyContent:
      "<p>Em thấy gi&aacute;o vi&ecirc;n giảng rất kỹ, chỉ r&otilde; lỗi sai hay gặp. App c&oacute; nhiều slide h&igrave;nh ảnh sinh động, dễ nhớ. Lần đầu học ngoại ngữ online qua video m&agrave; c&oacute; b&agrave;i tập tương t&aacute;c gi&uacute;p em nắm kiến thức nhanh ch&oacute;ng.</p>",
  },
  {
    id: 15,
    name: "Phạm Thu Thảo",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Pham_Thu_Thao_5b16272f6c.png",
    likeCount: 387,
    bodyContent:
      "<p>AI xịn nh&eacute;, học xong từ với mẫu c&acirc;u tiếng Anh th&igrave; được thực h&agrave;nh sửa ph&aacute;t &acirc;m kiểu nhại lại, n&oacute;i r&otilde; rồi th&igrave; đến luyện phản xạ cho nhạy hơn, kh&ocirc;ng phải mất thời gian dịch Việt - Anh trong đầu.&nbsp;</p>",
  },
  {
    id: 16,
    name: "Quang Vinh",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Quang_Vinh_340d4e0f44.png",
    likeCount: 112,
    bodyContent:
      "<p>Em học DraVie khoảng 5 th&aacute;ng trước khi thi. Đầu v&agrave;o 5.0, nhờ DraVie hướng dẫn chiến thuật v&agrave; luyện đề m&agrave; khả năng tiếng Anh của em cải thiện r&otilde;. D&ugrave; kh&oacute;a IELTS aim 6.0 nhưng em thi đạt 7.0 Overall, vượt mong đợi!</p>",
  },
  {
    id: 17,
    name: "Lâm Văn Đô",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Lam_Van_Do_d3b7ce1792.png",
    likeCount: 89,
    bodyContent:
      "<p>DraVie cung cấp cho em c&aacute;c kh&oacute;a học tiếng Anh với kho từ vựng giống với đề thi thật khoảng 90%, thầy c&ocirc; kết hợp th&ecirc;m phương ph&aacute;p CBL nữa n&ecirc;n qu&aacute; tr&igrave;nh học của em nhanh hơn m&agrave; hiệu quả hơn nữa.</p>",
  },
  {
    id: 18,
    name: "Trương Thơ Hiền",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Truong_Thanh_Hien_ba14bbe522.png",
    likeCount: 391,
    bodyContent:
      "<p>Thấy giao diện bắt mắt rồi cứ vừa học tiếng Anh vừa cười v&igrave; mấy c&aacute;i hoạt cảnh b&ecirc;n n&agrave;y dựng vui lắm, m&agrave; đều l&agrave; người nước ngo&agrave;i đ&oacute;ng n&ecirc;n giống xem sitcom, trải nghiệm kh&aacute; th&uacute; vị.</p>",
  },
  {
    id: 19,
    name: "Lê Hiếu Nhi",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Le_Hieu_Nhi_e1a5628f4f.png",
    likeCount: 258,
    bodyContent:
      "<p>Em th&iacute;ch nhất phần Reading v&agrave; Listening trong kh&oacute;a IELTS của DraVie! Kết quả giải th&iacute;ch r&otilde; r&agrave;ng, b&agrave;i tập tiếng Anh đa dạng, c&oacute; trick cho từng dạng b&agrave;i. Học xong thấy rất hiệu quả v&agrave; cực kỳ oke ạ!</p>",
  },
  {
    id: 20,
    name: "Lâm Mỹ Phượng",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Lam_My_Phuong_430ef7a6c1.png",
    likeCount: 213,
    bodyContent:
      "<p>Em test đầu v&agrave;o chỉ tầm 500, đăng k&yacute; kh&oacute;a TOEIC 600-800+ của DraVie cũng hơi lo nhưng b&agrave;i giảng dễ hiểu, thầy c&ocirc; dạy hay, c&ocirc; đọng. Nhờ lộ tr&igrave;nh r&otilde; r&agrave;ng, chi tiết, em học tiếng Anh kh&ocirc;ng qu&aacute; kh&oacute; khăn nữa.</p>",
  },
  {
    id: 21,
    name: "Nhung Ngô",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Ngo_Nhung_cd29e69cea.png",
    likeCount: 154,
    bodyContent:
      "<p>M&igrave;nh d&ugrave;ng thấy dễ m&agrave; tiện qu&aacute; n&ecirc;n bảo em g&aacute;i học. Bố m&igrave;nh thấy hay cũng học lu&ocirc;n. Giờ cứ đến tối l&agrave; nh&agrave; m&igrave;nh mở DraVieTalk l&ecirc;n luyện n&oacute;i tiếng Anh :'D.</p>",
  },
  {
    id: 22,
    name: "Ngọc Sao",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Phan_Thi_Ngoc_Sao_7f2892ca7f.png",
    likeCount: 258,
    bodyContent:
      "<p>M&igrave;nh được bạn giới thiệu học TOEIC 4 kỹ năng tại DraVie. Thật sự, đ&acirc;y l&agrave; một kh&oacute;a học tiếng Anh online cực kỳ ph&ugrave; hợp với d&acirc;n ph&ograve;ng như m&igrave;nh, c&oacute; thể hoặc mọi l&uacute;c mọi nơi, kh&ocirc;ng giới hạn thời gian, địa điểm. N&oacute;i chung l&agrave; 10 điểm!</p>",
  },
  {
    id: 23,
    name: "Phạm Trà My",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Pham_Tra_My_3fce5d1abf.png",
    likeCount: 188,
    bodyContent:
      "<p>Em thấy DraVie si&ecirc;u tiện lu&ocirc;n ạ! B&igrave;nh thường viết b&agrave;i xong trong 2 ng&agrave;y l&agrave; DraVie đ&atilde; gửi feedback cho r&ugrave;i n&ecirc;n si&ecirc;u si&ecirc;u c&oacute; &iacute;ch &iacute;. DraVie giảng giải chi tiết n&ecirc;n gi&uacute;p em hiểu được vấn đề s&acirc;u v&agrave; học ngoại ngữ hiệu quả hơn.&nbsp;</p>",
  },
  {
    id: 24,
    name: "Hằng Lê",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Hang_Le_24985ec221.png",
    likeCount: 122,
    bodyContent:
      "<p>Em học HSK của DraVie từ th&aacute;ng 6, theo Study Plan. Mới 1/3 kh&oacute;a HSK 1 nhưng ph&aacute;t &acirc;m ok hơn, biết giới thiệu bản th&acirc;n. Nhờ AI chấm b&agrave;i, em nhận ra lỗi sai v&agrave; cải thiện khả năng học tiếng Trung hiệu quả hơn.</p>",
  },
  {
    id: 25,
    name: "Phương Uyên",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Phuong_Uyen_ce69337ffd.png",
    likeCount: 55,
    bodyContent:
      "<p>Đ&atilde; từng đi học tiếng Anh ở c&aacute;c trung t&acirc;m nhưng hướng nội n&ecirc;n m&igrave;nh chả bao giờ n&oacute;i nhiều tr&ecirc;n lớp. Học với DraVieTalk đỡ bị t&acirc;m l&yacute;, thấy tự tin n&oacute;i hơn, giờ m&igrave;nh đ&atilde; n&oacute;i tr&ocirc;i chảy được 1 đoạn hội thoại đơn giản rồi.</p>",
  },
  {
    id: 26,
    name: "Hoàng Nguyễn",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Nguyen_Huy_Hoang_5b3075c80b.png",
    likeCount: 388,
    bodyContent:
      "<p>Học IELTS tại DraVie, em tự tin hơn, biết &aacute;p dụng kiến thức v&agrave;o b&agrave;i v&agrave; tiến bộ r&otilde; rệt. Em sẽ chăm chỉ, duy tr&igrave; th&aacute;i độ học tiếng Anh nghi&ecirc;m t&uacute;c c&ugrave;ng DraVie, hy vọng đạt band điểm cao như mong muốn!</p>",
  },
  {
    id: 27,
    name: "Trần Mỹ Linh",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Phan_Tran_My_Linh_ca26465fdf.png",
    likeCount: 77,
    bodyContent:
      "<p>Em c&oacute; ấn tượng với thầy T&ugrave;ng V nhất khi học kh&oacute;a tiếng Anh IELTS ở DraVie. Em học thầy đầu ti&ecirc;n, v&agrave; em cũng th&iacute;ch c&aacute;ch dạy vui vẻ, kh&ocirc;ng qu&aacute; g&ograve; b&oacute; học thuật đ&ocirc;i khi lại d&iacute; dỏm của thầy.</p>",
  },
  {
    id: 28,
    name: "Lưu Xuân Trường",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Luu_Xuan_Truong_1331dd3779.png",
    likeCount: 261,
    bodyContent:
      "<p>M&igrave;nh học lộ tr&igrave;nh từ 300 - 800+ của DraVie đ&acirc;u đ&oacute; trong c&oacute; 1-2 th&aacute;ng &agrave;! M&igrave;nh chọn học TOEIC ở DraVie l&agrave; v&igrave; kh&oacute;a học tiếng Anh online n&ecirc;n h&egrave; m&igrave;nh ở nh&agrave; thui, kh&ocirc;ng phải ra đường, với cả c&oacute; thời gian học cũng tối ưu.</p>",
  },
  {
    id: 29,
    name: "Hồ Thị Chinh",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Ho_Thi_Chinh_d41e5b3d80.png",
    likeCount: 66,
    bodyContent:
      "<p>M&igrave;nh học TOEIC Speaking - Writing ở DraVie bởi c&oacute; cung cấp m&ocirc;i trường luyện n&oacute;i viết mỗi ng&agrave;y, c&oacute; sự đồng h&agrave;nh của AI. M&igrave;nh thấy học tiếng Anh mới được 5 buổi m&agrave; c&oacute; tiến bộ hơn rồi, trộm v&iacute;a qu&aacute;aa</p>",
  },
  {
    id: 30,
    name: "Ly Ly",
    avatar:
      "https://static-assets.prepcdn.com/content-management-system/Ly_Ly_5c0a74ac13.png",
    likeCount: 344,
    bodyContent:
      "<p>Ri&ecirc;ng phần ngữ điệu v&agrave; ph&aacute;t &acirc;m chấm chữa cực chi tiết lu&ocirc;n, biết được cả những chỗ m&igrave;nh nhấn nh&aacute; kh&ocirc;ng cần thiết lu&ocirc;n ấy chữ kh&ocirc;ng chỉ mỗi phi&ecirc;n &acirc;m đ&acirc;u. Như vậy n&ecirc;n gi&uacute;p m&igrave;nh học ngoại ngữ si&ecirc;u hiệu quả lu&ocirc;n</p>",
  },
];

export default function SectionFeedbacks() {
  return (
    <div className="container mx-auto">
      <ReviewCarousel
        smallTitle="Phản hồi"
        title="Được đánh giá cao bởi hàng trăm nghìn học viên đã và đang theo học"
        description="Đây chính là sự ghi nhận lớn nhất với DraVie để DraVie có động lực cải tiến không ngừng nghỉ và đem đến trải nghiệm học tập tuyệt vời nhất dành cho bạn."
        reviews={mockReviews}
      />
    </div>
  );
}
