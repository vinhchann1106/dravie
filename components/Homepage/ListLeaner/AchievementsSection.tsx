import StudentShowcaseCarousel from "./student-showcase-carousel";

export default function AchievementsSection() {
  const learners = [
    {
      name: "Nguyễn Trần Ngân Giang",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/e4cca935_ca8d_48e2_8942_adad36acb627_Ngan_Giang_1_3a0c84919d.jfif",
    },
    {
      name: "Đặng Cẩm Nhung",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_chup_Man_hinh_2024_08_08_luc_10_06_11_984eef2653.png",
    },
    {
      name: "Trần Mạnh Duy ",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Manh_Duy_1_14f817d1d5.jpg",
    },
    {
      name: "Trần Mỹ Tâm ",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/436736eea845780e3c5efaccdb0fd33b8de7e676_3abaa15868.jpeg",
    },
    {
      name: "Bùi Ngọc Anh",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Ngoc_Anh_c418ddbe62.jpg",
    },
    {
      name: "Nguyễn Lê Nhật Nam",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/IMG_2068_cf87cf6f39.jpg",
    },
    {
      name: "Trần Lê Phúc Hà ",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Phuc_Ha_01_c1ffc36410.jpg",
    },
    {
      name: "Nguyễn Nhật Minh",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Nhat_Minh_8_0_8ec4f8d7a8.png",
    },
    {
      name: "Võ Ngọc Như Ý",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_chup_Man_hinh_2024_08_08_luc_11_50_25_f120b6faaf.png",
    },
    {
      name: "Hải Triều",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/hai_trieu_hvdc_64b2c597a2.jpg",
    },
    {
      name: "Nguyễn Trần Yến Nhi",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/b78ba5743864d12a8139fd26bf38a894619a078d_9acb8ca660.jpg",
    },
    {
      name: "Đoàn Thị Khánh Linh ",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/4d67c26d17e17dac7b854000af21ca2209d360bb_928566db26.jpg",
    },
    {
      name: "Vũ Gia Linh ",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Bang_diem_Gia_Linh_c71ad741ba.jpg",
    },
    {
      name: "Tiêu Vân Giang ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/z3029788623346_e5151402e89a69efbd9795cb81945abd_c85bbc7e39.jpg",
    },
    {
      name: "Gia Phú",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_chup_Man_hinh_2024_08_27_luc_13_48_48_5626a3f556.png",
    },
    {
      name: "Yến Nhi",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/yen_nhi_hvdc_4e1528cc04.jpg",
    },
    {
      name: "Phan Thùy Dương",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Thuy_Duong_hvdc_80494603c4.png",
    },
    {
      name: "Hoàng Phan Bảo Hân",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/fff63121893353ced17d1ac82dbd704fa616a96b_663b1d4c8c.jpg",
    },
    {
      name: "Phạm Thị Thu Hương ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/9c667421be94482054f5af64f394c2986943dc0e_a0071cc519.jpg",
    },
    {
      name: "Nguyễn Ngọc Diễm ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/1c4775c77a11664ec4a26e3917d3b11af5ddc9f0_dc2f291ae2.jpg",
    },
    {
      name: "Đỗ Hồng Ân ",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/604342e02daa1bf6e0a069d8813a692b953990b4_65c9759260.jpg",
    },
    {
      name: "Nguyễn Thị Bích Hậu",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/09_F6_A37_C_5027_4_A5_A_92_B7_D35_BF_1_B6_E2_B4_50dcd13da3.JPG",
    },
    {
      name: "Lê an nhiên ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/bang_diem_An_Nhien_0d23bd4e2f.jpg",
    },
    {
      name: "Võ Ngọc Yến ",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/d2ad7f33a16e7c30257f_be58712a83.jpg",
    },
    {
      name: "Nguyễn Đỗ Phương Anh ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Nguyen_Do_Phuong_Anh_bao_diem_be6a341685.jpg",
    },
    {
      name: "Lê Nguyễn Bảo Lâm ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/d23b3b049abd544e788e98d63fbb6e18b445e752_2788d58aab.jpg",
    },
    {
      name: "Lê Thị Quỳnh",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/20bb52750a30102556b230f0116dc08bdce52f82_b86a1bff5d.jpg",
    },
    {
      name: "Hà Thị Hoa",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/c2fa5d2298bd02ab889004a4167ccad15b19eec0_13f548f0d3.jpg",
    },
    {
      name: "Nguyễn Lê Ngọc Huyền ",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/anh_Huyen_2_a268cbb2f8.jpg",
    },
    {
      name: "Vũ Thu Trang ",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/e4a7d12d0cf7e8f322d2b3f910f491ee23541975_c048966fed.gif",
    },
    {
      name: "Nguyễn Võ Minh Tùng ",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/173604071204690f0006b8ef3cd6b00c744ec5e5_e9d2471430.jpg",
    },
    {
      name: "Nguyễn Phương Mai ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/04f9065cc39ac7155c8a6a48b7b1a4aa327920ac_5240be8356.jpg",
    },
    {
      name: "Lê Song Nhật Văn",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/4ecd9f62094313b62a01b16ecd4123a65e0b81d6_05f03acef7.jpg",
    },
    {
      name: "Nguyễn Việt Hương",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/anh_Viet_Huong_3_b6e7c0b841.jpg",
    },
    {
      name: "Phạm Thị Nhật Ngân",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/anh_Nhat_Ngan_0e2a6c5805.jpg",
    },
    {
      name: "Phan Thị Yến",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/d2d73318a5c4719d4f33b3d012ebcab7febf6cf5_b94983a862.jpg",
    },
    {
      name: "Bùi Thục Tâm Đoan",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/e2f9b4006d39cbb63e4efe3aa733f042a4dc4e15_e0b03f0c1e.jpg",
    },
    {
      name: "Nguyễn Phương Linh ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/z3029816144236_dd5cdecb1c2a84110fc6aea822374d46_ace553b963.jpg",
    },
    {
      name: "Nguyễn Đức Khải ",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Nguyen_Duc_Khai_964768206_4c172c6270.JPG",
    },
    {
      name: "Vũ Thị Thu Thảo ",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Vu_Thi_Thu_Thao_909790303_744505bd42.jpg",
    },
    {
      name: "Bùi Thái Hà Anh",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/z3140716704574_3bc8e4ff9fcce9895fe5f639ab52a9e5_3079ddf0d8.jpg",
    },
    {
      name: "Lê Hương Thảo ",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/z3103050636210_e5a0c7b7f0d10726ef00b63d5cb55642_b2af749538.jpg",
    },
    {
      name: "Đồng Thị Giang Thu ",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/z3145167735782_006011203afb99a86c1be00f8cbeb27e_7d7ecda50e.jpg",
    },
    {
      name: "Phạm Thị Kim Huệ ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/z3144925128064_b68e3895b8f11526bdaaca45770d3cf5_4c7fc6e164.jpg",
    },
    {
      name: "Trần Thu Trang",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Tran_Thu_Trang_b2dcb31e1a.png",
    },
    {
      name: "Lê thảo Nguyên",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/52ba0b7c2265de117c3c332e3265c7972bbe1cb5_4c94e31805.gif",
    },
    {
      name: "Kim Châu Anh",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Chau_Anh_1_488b10c329.jpg",
    },
    {
      name: "Nguyễn Nhật Bảo Trúc ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/a93d61df23b4e9eab0a5_7f18fcafea.jpg",
    },
    {
      name: "Nguyễn Vũ Tường Nguyên",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Tuong_nguyen_abea52a75f.jpg",
    },
    {
      name: "Lê Hữu Thắng",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Huu_Thang_ab916b145a.jpg",
    },
    {
      name: "Huỳnh Minh Phương ",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/IMG_4798_3a4123983b.JPG",
    },
    {
      name: "Lê Châu Giang ",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Chau_Giang_3_e2f50d94ff.jpg",
    },
    {
      name: "Nguyễn Huỳnh Nhật Tân",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Nhat_Tan_1_da12632a61.jpg",
    },
    {
      name: "Mỹ Tiên",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/My_Tien_06ec9644fd.jpg",
    },
    {
      name: "Vũ Quỳnh Mai",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Quynh_Mai_75fadbf974.jpg",
    },
    {
      name: "Phạm Hoàng Giang",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Giang_1_09d6dd2e03.jpg",
    },
    {
      name: "Bùi Phương Thảo",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Phuong_Thao_1_2616cedbcd.jpg",
    },
    {
      name: "Lê Phương Uyên",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Phuong_Uyen_1_10a353fde6.jpg",
    },
    {
      name: "Phạm Quỳnh Anh",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Quynh_Anh_1_96524275d9.jpg",
    },
    {
      name: "Huỳnh Vũ Phương Khanh",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Phuong_Khanh_2_adb79fd170.jpg",
    },
    {
      name: "Nguyễn Lê Thảo Vy",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/e34926c12b3ef260ab2f_6eaf1b91ce.jpg",
    },
    {
      name: "Huỳnh Lê Thanh Phương",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/HTP_1_2abff02e2b.jpg",
    },
    {
      name: "Nguyễn Quốc Thắng",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Nguyen_Quoc_Thang_a71f8cf946.jpg",
    },
    {
      name: "Lê Anh Thư",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/anhthu3_ac63ae1ae7.jpg",
    },
    {
      name: "Hồ Anh Thư",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Thu_5d93f43345.jpg",
    },
    {
      name: "Nguyễn Phạm Thiên Phúc",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Thien_Phuc_1_79674ba7da.jpg",
    },
    {
      name: "Nguyễn Nhất Phát",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Phat_2_efc505e059.jpg",
    },
    {
      name: "Nguyễn Việt Nhân",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Viet_Nhan_1_6c90ef4ce2.JPG",
    },
    {
      name: "Vũ Tuyết Anh",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/ta_240880e7d2.jpg",
    },
    {
      name: "Nguyễn Hữu Minh Duy",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/d14ddc17b720824e494fcec2cd00404a1e59eba8_91c3260397.jpg",
    },
    {
      name: "Hà Quang Huy",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/72b77820ea5030772d57963234bbaedd98f860ff_ff51f27133.jpg",
    },
    {
      name: "Nông Thị Trang Nhung",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/trangnhung2_def0f39681.jpg",
    },
    {
      name: "Trần Lan Anh ",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Bang_diem_Lan_Anh_38fb8d4aba.jpg",
    },
    {
      name: "Nguyễn Khánh Huyền",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/khanhhuyen3_d65ce46552.jpg",
    },
    {
      name: "Nguyễn Bảo Trúc",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Bao_Truc_1_b7870e5f0e.jpg",
    },
    {
      name: "Hồ Thị Thanh Tâm",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/6d373fa07e984444e4a35544ac8f7381a869115a_4c5c5cbd5e.jpg",
    },
    {
      name: "Trần Thị Minh Nguyệt ",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Minh_Nguyet_3_4c3d355255.jpg",
    },
    {
      name: "Vũ Hoàng Anh",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Bang_diem_Hoang_Anh_33f9b1e9e4.jpg",
    },
    {
      name: "Phạm Lê Quỳnh Anh",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Quynh_Anh_2_1_c5178ded28.jpg",
    },
    {
      name: "Phạm Bảo N.",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Bang_diem_Bao_Ngan_c47d20d899.jpg",
    },
    {
      name: "Hoàng Thuý Nga",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/563594f927e02b88a5dd97ee2efd5e048069f099_cb88226aff.jpg",
    },
    {
      name: "Phùng Thị Thuỳ Trang",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/ada8499734f4394e875a7bd9f66f0cc0b7eaecda_872a7d3c0a.jpg",
    },
    {
      name: "Nguyễn Khánh Vân",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/26e3a8770cd2acba32903e59dfeac6c735def949_5c7475622c.jpg",
    },
    {
      name: "Vũ Lý Hương T.",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/5350cd00e5e88b9864cae170042c91adff5ae7a8_683ea47dc4.jpg",
    },
    {
      name: "Nguyễn Đình Đạt",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/dd87b49bfd50b264cf493302d5b0a14630c3c7b2_ee160eef71.jpg",
    },
    {
      name: "Hoàng Thị Hải Xuân",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/z4388377062019_3c3d1776cc892b0262fb7f31300e1519_ef680ded10.jpg",
    },
    {
      name: "Nguyễn Thu Trang",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/8355093e605b53baaec28c5ebf8322afe2eea04b_600066a865.jpg",
    },
    {
      name: "Huỳnh Ngọc Bích",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Ngoc_Bich_1_5ff9019a74.jpeg",
    },
    {
      name: "Nguyễn Anh Khôi",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/00f6bd6b8ec1d9b8af76c73bcdac2d151a4ce1f4_1_479980bf76.jpg",
    },
    {
      name: "Ngô Bảo Điền",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Ngo_Bao_Dien_bbbd2cf210.jpg",
    },
    {
      name: "Lê Nguyễn Phương Anh",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/d5aa6489696b91001d819882e755cfa4449990c1_290ab0e124.jpg",
    },
    {
      name: "Phan Thị Bảo Trâm",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/df15e6a064243dce40ae73785005a5d36256d517_1_7d6691195d.jpg",
    },
    {
      name: "Nguyễn Đặng Thuỳ Trang",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/024f0fac2a745cc5a01c1c9814bdcb9e3351da1c_1_2250799591.jpg",
    },
    {
      name: "Tôn Quang Minh",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/34972f1f326884b3422dd93d2d24791b040c6042_81130c605b.jpg",
    },
    {
      name: "Nguyễn Hồ Khánh Huyền",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/IMG_6172_1_99228c5d30.HEIC",
    },
    {
      name: "Phan Nguyễn Nam Anh",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/418f364a2094f2caab85_1_bebac23cae.jpg",
    },
    {
      name: "Phạm Tường Nguyên",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Tuong_Nguyen_e4141a8243.jpg",
    },
    {
      name: "Lý Gia Hân",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_chup_Man_hinh_2022_05_15_luc_15_09_57_9b3c83fe46.png",
    },
    {
      name: "Cẩm Ly",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/cam_ly_f8cffcefd2.png",
    },
    {
      name: "Đỗ Bá Trần Khánh",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Khanh_Tran_644dab904c.jpg",
    },
    {
      name: "Trần Ngọc Thư",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Ngoc_Thu_e9d4cb5014.jpg",
    },
    {
      name: "Minh Khuê",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/photo_2022_05_19_15_54_21_7556526cd4.jpeg",
    },
    {
      name: "Yến Nhi ",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Yen_Nhi_bf1e843417.jpg",
    },
    {
      name: "Đình Dương",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/b74c59a86299a2c7fb88_0c1b98a91e.jpg",
    },
    {
      name: "Đỗ Mai Lan",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/mai_lan_1_851661a072.jpg",
    },
    {
      name: "Kiều Anh",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Kieu_Anh_2_b430f5975e.jpg",
    },
    {
      name: "Nguyễn Huỳnh Ngọc Hương",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/KIEU_ANH_1_6c417ebd98.png",
    },
    {
      name: "Như Hảo",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Nhu_Hao_8e3caf3c62.jpg",
    },
    {
      name: "Phúc Hà",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Phuc_Ha_1_d16d0358a6.jpg",
    },
    {
      name: "Thanh Bình",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Thanh_Binh_1_8230f36e46.jpg",
    },
    {
      name: "Nguyễn Lâm Bảo Phúc",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/985e5e82c15902075b48_88ace7cfeb.jpg",
    },
    {
      name: "Nguyễn Thành Đạt",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Thanh_Dat_3_ef49bac750.jpg",
    },
    {
      name: "Thảo Nhi",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Thao_Nhi_1_828d352f7d.jpg",
    },
    {
      name: "Minh Thư",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_1_7845289bcd.jpg",
    },
    {
      name: "Vân Anh",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Van_Anh_2_40cfe60f8d.jpeg",
    },
    {
      name: "Thu Giang",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Giang_6a1b8a35e5.jpg",
    },
    {
      name: "Diễm Mi",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Diem_Mi_b0a2e2a2c8.jpg",
    },
    {
      name: "Mỹ Linh",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/My_Linh_9f6975ecc7.jpg",
    },
    {
      name: "Hoàng Thị Anh Thư",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Hoang_Thu_7c7a7ef4f6.jpg",
    },
    {
      name: "Kiều Trinh",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Kieu_Trinh_1_eca7e0a606.jpg",
    },
    {
      name: "Mỹ Nhung",
      score: "6.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/My_Nhung_b71c5be9cb.jpg",
    },
    {
      name: "Lê Trần Phương Nghi",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Phuong_Nghi_0a043ac3a7.jpg",
    },
    {
      name: "Nguyễn Tiểu Thanh Nguyệt",
      score: "7 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/phuong_nghi_1_84ddd0db55.png",
    },
    {
      name: "Hà Ngô Gia Đạt",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/gia_dat_e5494b818b.png",
    },
    {
      name: "Thanh Mai",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/Phuong_Mai_4a97b5aebd.png",
    },
    {
      name: "Đặng Phương Anh",
      score: "7.5 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/NTD_00393_Anh_Dangg_1_0d8acb6efa.JPG",
    },
    {
      name: "Đinh Gia Huệ",
      score: "8 IELTS",
      img: "https://static-assets.prepcdn.com/content-management-system/image_1251987185844544_ba696c9ef1.jpeg",
    },
    {
      name: "Bảo Trân",
      score: "990 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_chup_Man_hinh_2024_08_08_luc_11_40_42_fbe554f7fb.png",
    },
    {
      name: "Đặng Thị Thanh Thảo ",
      score: "945 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_ca_nhan_Dang_Thi_Thanh_Thao_7f660f7ef4.jpg",
    },
    {
      name: "Lê Nhật Minh",
      score: "915 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/anh_Le_Nhat_Minh_effad024d7.jpg",
    },
    {
      name: "Nguyễn Bùi Mẫn Nhi",
      score: "910 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Nguyen_Bui_Man_Nhi_8292ec1449.jpg",
    },
    {
      name: "Nguyễn Lan Anh",
      score: "935 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/lan_anh_4c00c9c3ea.png",
    },
    {
      name: "Phạm Thị Huyền ",
      score: "850 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Pham_Thi_Huyen_5a04e89bf8.jpg",
    },
    {
      name: "Lê Phương Mai",
      score: "780 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Phuong_Mai_41cb38df17.png",
    },
    {
      name: "Trương Khả Duy",
      score: "860 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Kha_Duy_608b211e95.png",
    },
    {
      name: "Nguyễn Thị Hồng Ngọc",
      score: "870 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Nguyen_Thi_Hong_Ngoc_59c0b08aae.jpg",
    },
    {
      name: "Lê Hoàng Kim Ngân ",
      score: "830 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Nguyen_Thi_Kim_Ngan_1_b0c12d6128.jpg",
    },
    {
      name: "Huỳnh Thị Quỳnh Nhi",
      score: "840 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/anh_3_huynh_thi_quynh_nhi_500x549_6513fc5690.png",
    },
    {
      name: "Trần Khánh Chi",
      score: "845 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_3_Tran_Khanh_Chi_d674b7d539.jpg",
    },
    {
      name: "Nguyễn Hữu Linh",
      score: "890 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/hvdc_prep_huu_linh_890_toeic_6998fd2dc2.jpg",
    },
    {
      name: "Lâm Mỹ Phượng ",
      score: "825 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Lam_My_Phuong_312cfd388c.jpg",
    },
    {
      name: "Đoàn Thị Yến Nhi ",
      score: "805 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_1_Doan_Thi_Yen_Nhi_e4428e14f7.jpg",
    },
    {
      name: "Nguyễn Hà Trang ",
      score: "800 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_1_Nguyen_Ha_Trang_82601e166f.jpg",
    },
    {
      name: "Phan Uyên Phương",
      score: "750 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Phan_Uyen_Phuong_910abc1d1e.jpg",
    },
    {
      name: "Lê Thành Linh Thoại",
      score: "885 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/ba_ng_die_m_le_thanh_linh_thoa_i_500x250_69f96a3a0f.jpg",
    },
    {
      name: "Trương Hoàng Dũng",
      score: "710 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_2_Truong_Hoang_Dung_90779e3ea5.jpg",
    },
    {
      name: "Lê Ngọc Huyền Anh",
      score: "790 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_2_Le_Ngoc_Huyen_Anh_eca2aeb907.jpg",
    },
    {
      name: "Nguyễn Ngọc Tú Quyên ",
      score: "960 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Nguyen_Ngoc_Tu_Quyen_89168d5a20.jpg",
    },
    {
      name: "Nguyễn Khánh Ly",
      score: "830 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Nguyen_Khanh_Ly_1dac5f6aac.jpg",
    },
    {
      name: "Vũ Hiền Thanh",
      score: "850 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Vu_Hien_Thanh_6145ebb2dd.jpg",
    },
    {
      name: "Nguyễn Diệu Linh",
      score: "805 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_Nguyen_Dieu_Linh_fc83870ad7.jpg",
    },
    {
      name: "Phạm Thành Tài",
      score: "845 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_2_Thanh_Tai_811af88b49.jpg",
    },
    {
      name: "Nguyễn Thị Minh Hiếu",
      score: "820 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh2_Nguyen_Thi_Minh_Hieu_f5b6cdf951.jpg",
    },
    {
      name: "Lâm Thị Thảo Uyên",
      score: "830 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Thao_Uyen_3e4b364642.png",
    },
    {
      name: "Hồ Ngọc Quỳnh Anh",
      score: "805 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_chup_Man_hinh_2024_08_01_luc_14_48_50_8e35e20a90.png",
    },
    {
      name: "Quốc Huy",
      score: "960 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/Anh_chup_Man_hinh_2024_08_24_luc_16_53_24_45f2f340b6.png",
    },
    {
      name: "Võ Tuyết My",
      score: "855 TOEIC",
      img: "https://static-assets.prepcdn.com/content-management-system/anh_Vo_Tuyet_My_1_6e0a6eaab7.jpeg",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto py-12 mt-12">
      <div className="text-center text-balance">
        <h2 className="text-3xl font-extrabold text-secondary-foreground">
          <span className="text-accent text-4xl">100.000+</span> Học viên
        </h2>
        <p className="text-[#334155] text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          đạt <strong>thành tích cao</strong> sau khi học tại DraVie
        </p>
      </div>
      <StudentShowcaseCarousel learners={learners} />
    </section>
  );
}
