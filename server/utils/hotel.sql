-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 09, 2023 lúc 12:10 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `khachsan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chukhachsan_khachsan`
--

CREATE TABLE `chukhachsan_khachsan` (
  `IDKhachSan` int(11) NOT NULL,
  `IDChuKhachSan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhgia`
--

CREATE TABLE `danhgia` (
  `ID` int(11) NOT NULL,
  `IDKhachSan` int(11) NOT NULL,
  `IDKhachHang` int(11) NOT NULL,
  `TieuDe` char(50) NOT NULL,
  `NoiDung` text NOT NULL,
  `Diem` int(11) NOT NULL,
  `ThoiGian` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhsachyeuthich`
--

CREATE TABLE `danhsachyeuthich` (
  `IDKhachHang` int(11) NOT NULL,
  `IDKhachSan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `diadiem`
--

CREATE TABLE `diadiem` (
  `ID` int(11) NOT NULL,
  `TenDiaDiem` varchar(255) NOT NULL,
  `HinhAnh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `diadiem`
--

INSERT INTO `diadiem` (`ID`, `TenDiaDiem`, `HinhAnh`) VALUES
(1, 'An Giang', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/0040_0048_HDR_Pano_1_NEW.jpg'),
(2, 'Bà Rịa-Vũng Tàu', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/vung-tau.png'),
(3, 'Bạc Liêu', 'https://kenhhomestay.com/wp-content/uploads/2019/06/Dia-diem-du-lich-Bac-Lieu-13.jpg'),
(4, 'Bắc Kạn', 'https://ik.imagekit.io/tvlk/blog/2021/09/kinh-nghiem-du-lich-bac-kan.jpg?tr=dpr-2,w-675'),
(5, 'Bắc Giang', 'https://ik.imagekit.io/tvlk/blog/2022/09/dia-diem-check-in-o-bac-giang-1.jpg?tr=dpr-2,w-675'),
(6, 'Bắc Ninh', 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-bac-ninh-cover.jpg'),
(7, 'Bến Tre', 'https://ik.imagekit.io/tvlk/blog/2022/03/du-lich-sinh-thai-ben-tre-cover.jpeg'),
(8, 'Bình Dương', 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-binh-duong-cover-1.jpg'),
(9, 'Bình Định', 'https://ik.imagekit.io/tvlk/blog/2022/06/dia-diem-du-lich-quy-nhon-1.jpg?tr=dpr-2,w-675'),
(10, 'Bình Phước', 'https://cdn.tgdd.vn/Files/2021/07/07/1366326/ke-ten-10-dia-diem-du-lich-dep-nhat-tai-binh-phuoc-ma-ban-khong-the-bo-lo-202107071044346567.jpg'),
(11, 'Bình Thuận', 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-binh-thuan.jpg'),
(12, 'Cà Mau', 'https://ik.imagekit.io/tvlk/blog/2021/10/du-lich-ca-mau-4.jpg?tr=dpr-2,w-675'),
(13, 'Cao Bằng', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/BanGioc_8715_zing.jpg'),
(14, 'Cần Thơ', 'https://statics.vinpearl.com/ben-ninh-kieu-canh-dep-viet-nam_1637643228.jpg'),
(15, 'Đà Nẵng', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/danang.png'),
(16, 'Đắk Lắk', 'https://vcdn1-dulich.vnecdn.net/2022/04/20/thacDakLak02-1650454521-7409-1650455161.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=6vZa8c69p_IJvwjcOJE3hg'),
(17, 'Đắk Nông', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/0334_0351_HDR_Pano_zing.jpg'),
(18, 'Điện Biên', 'https://ik.imagekit.io/tvlk/blog/2022/03/dia-diem-du-lich-dien-bien-1.jpg?tr=dpr-2,w-675'),
(19, 'Đồng Nai', 'https://media.gody.vn//images/hinh-tong-hop/12-khu-du-lich-tai-dong-nai-gody/6-2017/560488-20170615071509-hinh-tong-hop-12-khu-du-lich-tai-dong-nai-gody.png'),
(20, 'Đồng Tháp', 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/02/anh6-8.png'),
(21, 'Gia Lai', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/0559_0594_HDR_Pano_zing.jpg'),
(22, 'Hà Giang', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/ThitranQuanBa_Hagiang_zing.jpg'),
(23, 'Hà Nam', 'https://statics.vinpearl.com/du-lich-ha-nam-10_1623851980.jpg'),
(24, 'Hà Nội', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hanoi.png'),
(25, 'Hà Tây', 'https://mytourcdn.com/upload_images/Image/Location/19_2_2015/du-lich-ha-tay-1-ngay-1.jpg'),
(26, 'Hà Tĩnh', 'https://statics.vinpearl.com/dia-diem-du-lich-ha-tinh-5_1623852446.jpg'),
(27, 'Hải Dương', 'https://kinhnghiemdulich.gody.vn/wp-content/uploads/2022/06/dia-diem-du-lich-hai-duong-3.jpg'),
(28, 'Hải Phòng', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hai-phong.png'),
(29, 'Hòa Bình', 'https://ik.imagekit.io/tvlk/blog/2022/03/dia-diem-du-lich-hoa-binh-1.jpg'),
(30, 'Hồ Chí Minh', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hochiminh.png'),
(31, 'Hậu Giang', 'https://onetour.vn/Media/Images/Disneyland-du-lich-hau-giang.jpg'),
(32, 'Hưng Yên', 'https://ik.imagekit.io/tvlk/blog/2022/03/dia-diem-du-lich-hung-yen-2.jpg?tr=dpr-2,w-675'),
(33, 'Khánh Hòa', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/DJI_0780_04_zing_1.jpg'),
(34, 'Kiên Giang', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/Ha_Tien_2.jpg'),
(35, 'Kon Tum', 'https://danangaz.com/wp-content/uploads/2019/07/1-min-20.jpg'),
(36, 'Lai Châu', 'https://cdn.tgdd.vn/Files/2022/02/18/1416263/10-diem-du-lich-checkin-noi-tieng-nhat-tai-tinh-lai-chau-202303281553481660.jpg'),
(37, 'Lào Cai', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/lao_cai_2_zing.jpg'),
(38, 'Lạng Sơn', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/Bacson_LangSon_zing.jpg'),
(39, 'Lâm Đồng', 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-lam-dong-6.jpg?tr=dpr-2,w-675'),
(40, 'Long An', 'https://statics.vincom.com.vn/xu-huong/0-0-0-du-lich-long-an/image13.png'),
(41, 'Nam Định', 'https://vcdn1-dulich.vnecdn.net/2022/05/12/HaiNhuan11606299130-1652359419-5468-1652359452.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=_N34MNnzWE_dbn64sBwK0Q'),
(42, 'Nghệ An', 'https://vcdn1-dulich.vnecdn.net/2022/04/26/den-Chung-Son-Nghe-An-5679-1650971137.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=dM82jT9JTugGzNwC1sCdgw'),
(43, 'Ninh Bình', 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/07/dia-diem-du-lich-ninh-binh-1-e1531726367396.jpg'),
(44, 'Ninh Thuận', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/vinh_Vinh_Hy_zing.jpg'),
(45, 'Phú Thọ', 'https://i-dulich.vnecdn.net/2022/05/11/125212393-2662478530668276-794-4227-9339-1652263483.jpg'),
(46, 'Phú Yên', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/DJI_0637_zing.jpg'),
(47, 'Quảng Bình', 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-quang-binh-1.jpg?tr=dpr-2,w-675'),
(48, 'Quảng Nam', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/8483_zing.jpg'),
(49, 'Quảng Ngãi', 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/thac-minh-long.jpg'),
(50, 'Quảng Ninh', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/Tuan_Chau_1.jpg'),
(51, 'Quảng Trị', 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/Con-Co.jpg'),
(52, 'Sóc Trăng', 'https://thamhiemmekong.com/wp-content/uploads/2020/02/chonoinganam.jpg'),
(53, 'Sơn La', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/Untitled_Panorama1_2.jpg'),
(54, 'Tây Ninh', 'https://statics.vinpearl.com/canh-dep-viet-nam-ho-dau-tieng_1637901143.jpg'),
(55, 'Thái Bình', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/dong_chau_zing_6.jpg'),
(56, 'Thái Nguyên', 'https://dankogroup.com.vn/pic/News/images/1.png'),
(57, 'Thanh Hóa', 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-thanh-hoa-12.jpg?tr=dpr-2,w-675'),
(58, 'Thừa Thiên - Huế', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/SAM1010_zing.jpg'),
(59, 'Tiền Giang', 'https://tourcantho.vn/wp-content/uploads/du-lich-tien-giang-bang-xe-may.jpg'),
(60, 'Trà Vinh', 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-tra-vinh-cover.jpeg'),
(61, 'Tuyên Quang', 'https://www.vtr.org.vn/FileManager/Anh%20web%202022/Thang%2010/1120/Day%20manh%20du%20lich%20sinh%20thai%20ho%20Na%20Hang%20(1).jpg'),
(62, 'Vĩnh Long', 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-vinh-long-18.jpg?tr=dpr-2,w-675'),
(63, 'Vĩnh Phúc', 'https://sayhi.vn/blog/wp-content/uploads/2020/03/dia-diem-du-lich-vinh-phuc-1_optimized.jpg'),
(64, 'Yên Bái', 'https://znews-photo.zingcdn.me/w1920/Uploaded/lerl/2020_08_28/yen_bai_1_zing.jpg'),
(65, 'Phú Quốc', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/phu-quoc.png'),
(66, 'Nha Trang', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/nha-trang.png'),
(67, 'Đà Lạt', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/da-lat.png'),
(68, 'Sa Pa', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/sa-pa.png'),
(69, 'Phan Thiết', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/phan-thiet.png'),
(70, 'Hạ Long', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/ha-long.png'),
(71, 'Hội An', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hoi-an.png'),
(72, 'Singapore', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/singapore.png'),
(73, 'Bangkok, Thailand', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/bangkok.png'),
(74, 'Phuket, Thailand', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/phuket.png'),
(75, 'Kuala Lumpur, Malaysia', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/malaysia.png'),
(76, 'Seoul, South Korea', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/seoul.png'),
(77, 'Tokyo', 'https://img.tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/tokyo.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dondatphong`
--

CREATE TABLE `dondatphong` (
  `MaDatPhong` varchar(10) NOT NULL,
  `ThoiGianDat` date NOT NULL,
  `NgayNhanPhong` date NOT NULL,
  `NgayTraPhong` date NOT NULL,
  `SoLuongPhong` int(100) NOT NULL,
  `TongTien` decimal(10,0) NOT NULL,
  `TrangThai` int(11) NOT NULL,
  `IDKhachHang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giuong`
--

CREATE TABLE `giuong` (
  `ID` int(11) NOT NULL,
  `LoaiGiuong` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `giuong`
--

INSERT INTO `giuong` (`ID`, `LoaiGiuong`) VALUES
(1, 'Giường đơn'),
(2, 'Giường đôi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giuong_phong`
--

CREATE TABLE `giuong_phong` (
  `IDPhong` int(11) NOT NULL,
  `IDGiuong` int(11) NOT NULL,
  `SoLuongGiuong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhanh_khachsan`
--

CREATE TABLE `hinhanh_khachsan` (
  `IDKhachSan` int(11) NOT NULL,
  `HinhAnh` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhanh_phong`
--

CREATE TABLE `hinhanh_phong` (
  `IDPhong` int(11) NOT NULL,
  `HinhAnh` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachsan`
--

CREATE TABLE `khachsan` (
  `ID` int(11) NOT NULL,
  `Ten` varchar(50) NOT NULL,
  `DiaChi` varchar(100) NOT NULL,
  `ChinhSach` varchar(100) NOT NULL,
  `GioiThieu` text NOT NULL,
  `TrangThai` int(10) NOT NULL,
  `IDDiaDiem` int(11) NOT NULL,
  `Nhan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khunggio`
--

CREATE TABLE `khunggio` (
  `ID` int(11) NOT NULL,
  `GioBatDau` datetime NOT NULL,
  `GioKetThuc` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khuyenmai`
--

CREATE TABLE `khuyenmai` (
  `ID` int(11) NOT NULL,
  `TieuDe` varchar(100) NOT NULL,
  `IDKhachSan` int(11) NOT NULL,
  `PhanTramKM` int(11) NOT NULL,
  `SoLuongSD` int(100) NOT NULL,
  `MaKhuyenMai` varchar(20) DEFAULT NULL,
  `BatDau` datetime NOT NULL,
  `KetThuc` datetime NOT NULL,
  `MoTa` text DEFAULT NULL,
  `DieuKien` text DEFAULT NULL,
  `SoLuongKM` int(11) DEFAULT NULL,
  `IDKhungGio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaitiennghikhachsan`
--

CREATE TABLE `loaitiennghikhachsan` (
  `ID` int(11) NOT NULL,
  `TenLoai` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `loaitiennghikhachsan`
--

INSERT INTO `loaitiennghikhachsan` (`ID`, `TenLoai`) VALUES
(1, 'Phương tiện đi lại'),
(2, 'Giải trí'),
(3, 'Thể thao'),
(4, 'Internet'),
(5, 'Dịch vụ lễ tân'),
(6, 'Dịch vụ lau dọn'),
(7, 'Hỗ trợ người khuyết tật'),
(8, 'Thư giãn và làm đẹp'),
(9, 'Dịch vụ nhà hàng'),
(10, 'Dịch vụ trẻ em'),
(11, 'Dịch vụ cho doanh nhân'),
(12, 'Tiện ích tổng quát cho khách sạn'),
(13, 'Vật nuôi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaitiennghiphong`
--

CREATE TABLE `loaitiennghiphong` (
  `TenLoai` varchar(50) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `loaitiennghiphong`
--

INSERT INTO `loaitiennghiphong` (`TenLoai`, `ID`) VALUES
('Phòng tắm và vật dụng phòng tắm', 1),
('Tiện Nghi', 2),
('Vật dụng an toàn và an ninh', 3),
('Quần áo và giặt ủi', 4),
('Bố trí và nội thất', 5),
('Ăn uống', 6),
('Điểm đặc trưng', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `ID` int(11) NOT NULL,
  `HoTen` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `SoDienThoai` varchar(10) DEFAULT NULL,
  `DiaChi` varchar(100) DEFAULT NULL,
  `MatKhau` varchar(100) NOT NULL,
  `PhanQuyen` int(11) NOT NULL,
  `TenCongTy` varchar(100) DEFAULT NULL,
  `MaSoThue` varchar(10) DEFAULT NULL,
  `QuyMo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`ID`, `HoTen`, `Email`, `SoDienThoai`, `DiaChi`, `MatKhau`, `PhanQuyen`, `TenCongTy`, `MaSoThue`, `QuyMo`) VALUES
(3, 'Nguyễn Đăng Mạnh Tú', 'manhtu2272002@gmail.com', '', '', '$2a$10$UAdFFtuw/24puqwJ.BYUtufh3k9yhjb7tTCjZcJLw4LUIBnoP79xW', 0, '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoinhanphong`
--

CREATE TABLE `nguoinhanphong` (
  `ID` int(11) NOT NULL,
  `HoTen` varchar(255) NOT NULL,
  `Sdt` varchar(10) NOT NULL,
  `IDKhachHang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phong`
--

CREATE TABLE `phong` (
  `ID` int(11) NOT NULL,
  `TênLoaiPhong` varchar(50) NOT NULL,
  `IDKhachSan` int(11) NOT NULL,
  `SoPhongTrong` int(11) NOT NULL,
  `SoNguoi` int(11) NOT NULL,
  `DienTich` int(11) NOT NULL,
  `Gia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phong_dondatphong`
--

CREATE TABLE `phong_dondatphong` (
  `IDPhong` int(11) NOT NULL,
  `MaDonDatPhong` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoanthanhtoan`
--

CREATE TABLE `taikhoanthanhtoan` (
  `IDKhachHang` int(11) NOT NULL,
  `ID` int(11) NOT NULL,
  `HoTenTK` varchar(100) NOT NULL,
  `SoTaiKhoan` varchar(50) NOT NULL,
  `NgayHetHan` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongtinhuuich`
--

CREATE TABLE `thongtinhuuich` (
  `ID` int(11) NOT NULL,
  `ThongTin` varchar(255) NOT NULL,
  `HinhAnh` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `thongtinhuuich`
--

INSERT INTO `thongtinhuuich` (`ID`, `ThongTin`, `HinhAnh`) VALUES
(1, 'Khoảng cách tới trung tâm', '<svg width=\"20\" height=\"20\" fill=\"none\"><path d=\"M4.166 19.166H2.333a1.5 1.5 0 01-1.5-1.5v-5.333a1.5 1.5 0 011.5-1.5h1.833M7.5 13.333h1.667M7.5 15.833h1.667M7.5 10.833h1.667\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M10.833 5V3.683a1.5 1.5 0 011.93-1.437l5.334 1.6a1.5 1.5 0 011.069 1.437v12.383a1.5 1.5 0 01-1.5 1.5h-12a1.5 1.5 0 01-1.5-1.5V9a1.5 1.5 0 011.5-1.5h5.333A1.5 1.5 0 0112.5 9v10.166M15.833 15.833V7.5\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>'),
(2, 'Khoảng cách tới sân bay', '<svg width=\"20\" height=\"20\" fill=\"none\"><path d=\"M2.047 11.896h15.906M4.014 15.021h1.282M7.435 15.021h1.282M10.855 15.021h1.284M14.276 15.021h1.283M13.642 1.367a1.482 1.482 0 011.148 1.43 1.467 1.467 0 01-.685 1.272L5.653 9.32a.52.52 0 01-.573-.017L1.98 7.126a.286.286 0 01.006-.451l1.3-1.147a.286.286 0 01.277-.047l1.629.97L7.26 5.01 3.343 2.583a.357.357 0 01.017-.556l.957-.709a.357.357 0 01.333-.048l5.398 2.01 2.5-1.704a1.386 1.386 0 011.094-.209v0zM11.25 8.77h4.879a1.29 1.29 0 011.259.947l1.948 7.5a1.26 1.26 0 01-1.26 1.554H1.925a1.26 1.26 0 01-1.258-1.554l1.705-6.565\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>'),
(3, 'Khoảng cách tới trung tâm thị trấn', '<svg width=\"20\" height=\"20\" fill=\"none\"><path d=\"M15.833 6.667c0 3.6-5.834 9.479-5.834 9.479s-5.833-5.88-5.833-9.48c0-3.69 3.014-5.833 5.833-5.833 2.82 0 5.834 2.142 5.834 5.834z\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M10 8.333A1.667 1.667 0 1010 5a1.667 1.667 0 000 3.333zM15 14.57c2.508.447 4.166 1.22 4.166 2.097 0 1.38-4.104 2.5-9.166 2.5-5.063 0-9.167-1.12-9.167-2.5 0-.878 1.658-1.65 4.167-2.096\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>'),
(4, 'Năm khách sạn xây dựng', '<svg width=\"20\" height=\"20\" fill=\"none\"><path d=\"M15 4.167H5c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667h10c.92 0 1.666-.746 1.666-1.667v-10c0-.92-.746-1.667-1.666-1.667zM13.333 2.5v3.333M6.667 2.5v3.333M3.333 9.166h13.333\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>'),
(5, 'Số quán bar\r\n', '<svg width=\"20\" height=\"20\" fill=\"none\"><path d=\"M4.167 6.212h12.121M10.228 12.273c-3.334 0-6.061-2.728-6.061-6.061V1.667h12.121v4.545c0 3.333-2.727 6.06-6.06 6.06zM10.227 12.273v6.06M6.44 18.333h7.575\" stroke=\"#1A202C\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>'),
(6, 'Số phòng khách sạn', '<svg width=\"20\" height=\"20\" fill=\"none\"><path d=\"M3.334 9.445V7.778a1.111 1.111 0 011.111-1.111H8.89A1.111 1.111 0 0110 7.778v1.667\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M10 9.445V7.778a1.111 1.111 0 011.111-1.111h4.445a1.111 1.111 0 011.11 1.111v1.667\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M3.148 9.445h13.704a1.481 1.481 0 011.482 1.481v3.519H1.667v-3.519a1.482 1.482 0 011.481-1.481v0zM1.667 14.445v2.222M18.334 14.445v2.222\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M16.667 9.445v-5a1.111 1.111 0 00-1.11-1.112H4.444a1.111 1.111 0 00-1.111 1.112v5\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>'),
(7, 'Số nhà hàng', '<svg width=\"20\" height=\"20\" fill=\"none\"><path d=\"M14.167 15l2.5 2.5M3.334 4.167l6.667 6.666M5 2.5l4.167 4.167L5.834 10 1.667 5.833M3.334 17.5L17.501 3.334A6.761 6.761 0 0115.834 10c-2.947 2.947-5 3.334-5 3.334\" stroke=\"#1A202C\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>'),
(8, 'Số tầng khách sạn\r\n', '<svg width=\"20\" height=\"20\" fill=\"none\"><path d=\"M8.542 12.5h4.791a.417.417 0 01.417.417v6.458H8.125v-6.458a.417.417 0 01.417-.417z\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M13.75 19.375h4.375v-10a.625.625 0 00-.625-.625h-5.625a.625.625 0 00-.625.625V12.5M8.125 19.375h-1.25M19.375 19.375h-1.25M11.25 15h2.5M16.25 12.5h1.875M16.25 15h1.875M16.25 8.75V6.875\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M19.375 1.25a.625.625 0 00-.625-.625H1.25a.625.625 0 00-.625.625v17.5a.625.625 0 00.625.625h2.5a.625.625 0 00.625-.625V4.375H18.75a.625.625 0 00.625-.625v-2.5zM3.125 9.375h1.25M3.125 14.375h1.25M9.375 4.375v-1.25M14.375 4.375v-1.25\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M.625 4.375h3.75V.625\" stroke=\"#1A202C\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongtinhuuich_ks`
--

CREATE TABLE `thongtinhuuich_ks` (
  `IDKhachSan` int(11) NOT NULL,
  `IDThongTin` int(11) NOT NULL,
  `NoiDung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tiennghichung_ks`
--

CREATE TABLE `tiennghichung_ks` (
  `ID` int(11) NOT NULL,
  `Icon` varchar(200) NOT NULL,
  `TenTienNghi` varchar(50) NOT NULL,
  `IDLoai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tiennghichung_ks`
--

INSERT INTO `tiennghichung_ks` (`ID`, `Icon`, `TenTienNghi`, `IDLoai`) VALUES
(1, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/phuongtiendilai/san-bay.png', 'Đưa/đón khách sân bay', 1),
(2, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/ferry_transfer.png', 'Đưa/đón khách bến phà', 1),
(3, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/car_for_hire.png', 'Cho thuê xe hơi', 1),
(4, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/bike_for_hire.png', 'Cho thuê xe máy', 1),
(5, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/car_for_hire.png', 'Bãi đỗ xe', 1),
(11, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/giaitri/bai-tam-rieng.png', 'Bãi tắm riêng', 2),
(12, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/giaitri/karaok.png', 'Karaoke', 2),
(21, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/thethao/gym.png', 'Phòng gym', 3),
(22, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/thethao/tennis.png', 'Sân tennis', 3),
(23, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/thethao/bong-ban.png', 'Bóng bàn', 3),
(31, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/internet/Amenities_wifi.png', 'Internet miễn phí', 4),
(41, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/letan/reception-hotel-24h.svg', 'Lễ tân 24h', 5),
(42, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/special_aid.png', 'Trợ giúp đặc biệt', 5),
(43, ' https://storage.googleapis.com/tripi-assets/images/hotels/amenities/letan/doi-ngoai-te.png', 'Thu đổi ngoại tệ', 5),
(44, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/letan/giu-hanh-ly.png', 'Giữ hành lý', 5),
(45, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/letan/dat-tour.png', 'Bán tour', 5),
(46, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/letan/bao-thuc.png', 'Báo thức', 5),
(47, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/letan/ket-sat.png', 'Két an toàn', 5),
(51, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/vesinh/don-dep-hang-ngay.png', 'Dọn phòng hàng ngày', 6),
(52, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/vesinh/giat-la.png', 'Dịch vụ giặt là', 6),
(53, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/vesinh/la-do.png', ' Ủi đồ', 6),
(61, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/khuyettat/loi-vao-xe-lan.png', 'Lối vào người khuyết tật', 7),
(62, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/toilet_for_the_disabled.png', 'Toilet người khuyết tật', 7),
(63, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/khuyettat/bon-rua-mat-thap-hon.png', 'Bồn rửa mặt thấp hơn', 7),
(71, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/thuagianlamdep/massage.png', 'Massage', 8),
(72, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/thuagianlamdep/spa-stone 1.png', 'Spa', 8),
(73, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/thuagianlamdep/xong-hoi.png', 'Phòng xông hơi khô', 8),
(81, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/nhahanganuong/bua-sang-tru-toi.png', 'Bữa sáng', 9),
(82, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/nhahanganuong/bua-sang-tru-toi.png', 'Bữa trưa', 9),
(83, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/nhahanganuong/bua-sang-tru-toi.png', 'Bữa tối', 9),
(84, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/nhahanganuong/ruou-sam-pang.png', 'Rượu vang/Sâm panh', 9),
(85, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/nhahanganuong/nha-hang.png', 'Nhà hàng', 9),
(86, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/bar.png', 'Quầy bar', 9),
(91, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/treem/khu-vui-choi.png', 'Khu vui chơi cho trẻ em', 10),
(92, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/treem/bua-an-tre-em.png', 'Bữa ăn trẻ em', 10),
(101, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/doanhnhanh/phong-hop.png', 'Phòng họp', 11),
(102, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/doanhnhanh/phong-hop.png', 'Tổ chức sự kiện', 11),
(103, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/doanhnhanh/printer%201.png', 'Máy fax/Photocopy', 11),
(111, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/tongquat/thang-may.png', 'Thang máy', 12),
(112, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/smoking_room.png', 'Không hút thuốc', 12),
(113, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/balcony.png', 'Ban công', 12),
(114, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/air_conditioner.png', 'Điều hoà nhiệt độ', 12),
(115, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/tongquat/san-vuon.png', 'Sân vườn', 12),
(116, 'https://storage.googleapis.com/tripi-assets/images/hotels/amenities/tongquat/san-thuong.png', 'Sân thượng', 12),
(121, 'https://storage.googleapis.com/tripi-assets/images/hotel/amenity/allow_pet.png', 'Được mang vật nuôi', 13);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tiennghichung_phong`
--

CREATE TABLE `tiennghichung_phong` (
  `ID` int(11) NOT NULL,
  `TenTienNghi` varchar(50) NOT NULL,
  `Icon` varchar(50) NOT NULL,
  `IDLoai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tiennghichung_phong`
--

INSERT INTO `tiennghichung_phong` (`ID`, `TenTienNghi`, `Icon`, `IDLoai`) VALUES
(1, 'Áo Choàng tắm', 'shirt', 1),
(2, 'Gương', 'face-smile', 1),
(3, 'Vật dụng tắm rửa', 'soap', 1),
(4, 'Phòng tắm vòi sen', 'shower', 1),
(5, 'Dầu gội', 'pump-soap', 1),
(6, 'Bộ vệ sinh cá nhân', 'box-tissue', 1),
(54, 'Dép đi trong nhà', 'shoe-prints', 2),
(55, 'Điều hòa', 'wind', 2),
(56, 'Rèm che ánh sáng', 'virus-slash', 2),
(57, 'Đồng hồ báo thức', 'bell', 2),
(58, 'Wifi miễn phí trong phòng', 'wifi', 2),
(59, 'Khóa điện tử', 'lock', 2),
(60, 'Quạt', 'fan', 2),
(61, 'Sản phẩm vệ sinh', 'soap', 2),
(62, 'Đầu báo khói', 'smog', 3),
(63, 'Két sách trong phòng', 'hard-hat', 3),
(64, 'Cách âm', 'satellite-dish', 3),
(65, 'Bình chữa cháy', 'fire-extinguisher', 3),
(66, 'Giá treo quần áo', 'hat-cowboy-side', 4),
(67, 'Tủ quần áo', 'door-closed', 4),
(72, 'Ghế làm việc', 'chair', 5),
(73, 'Ghế sofa', 'couch', 5),
(74, 'Phòng khách riêng', 'person-booth', 5),
(75, 'Sàn gỗ', 'leaf', 5),
(76, 'Nước đóng chai miễn phí', 'wine-bottle', 6),
(77, 'Đồ uống mới khách miễn phí', 'tint', 6),
(78, 'Tủ lạnh nhỏ trong phòng', 'wind', 6),
(79, 'Quầy bar mini', 'cocktail', 6),
(80, 'Máy pha sinh tố', 'blender', 6),
(81, 'Máy pha cà phê', 'coffee', 6),
(82, 'Diện tích phòng', 'home', 7),
(83, 'Wifi miễn phí', 'wifi', 7),
(84, 'Ban công/ sân hiên', 'shop', 7),
(85, 'Không hút thuốc', 'smoking-ban', 7),
(86, 'Phòng tắm vòi sen & bồn tắm', 'bath', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tiennghi_khachsan`
--

CREATE TABLE `tiennghi_khachsan` (
  `IDKhachSan` int(11) NOT NULL,
  `IDTienNghi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tiennghi_phong`
--

CREATE TABLE `tiennghi_phong` (
  `IDPhong` int(11) NOT NULL,
  `IDTienNghi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `uudai`
--

CREATE TABLE `uudai` (
  `ID` int(11) NOT NULL,
  `NoiDung` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `uudai_phong`
--

CREATE TABLE `uudai_phong` (
  `IDPhong` int(11) NOT NULL,
  `IDUuDai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chukhachsan_khachsan`
--
ALTER TABLE `chukhachsan_khachsan`
  ADD PRIMARY KEY (`IDKhachSan`,`IDChuKhachSan`),
  ADD KEY `Fk_CKSKS_ND` (`IDChuKhachSan`);

--
-- Chỉ mục cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `DanhGia_fk0` (`IDKhachSan`),
  ADD KEY `DanhGia_fk1` (`IDKhachHang`);

--
-- Chỉ mục cho bảng `danhsachyeuthich`
--
ALTER TABLE `danhsachyeuthich`
  ADD PRIMARY KEY (`IDKhachHang`,`IDKhachSan`),
  ADD KEY `DanhSachYeuThich_fk1` (`IDKhachSan`);

--
-- Chỉ mục cho bảng `diadiem`
--
ALTER TABLE `diadiem`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `dondatphong`
--
ALTER TABLE `dondatphong`
  ADD PRIMARY KEY (`MaDatPhong`),
  ADD KEY `DonDatPhong_fk0` (`IDKhachHang`);

--
-- Chỉ mục cho bảng `giuong`
--
ALTER TABLE `giuong`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `giuong_phong`
--
ALTER TABLE `giuong_phong`
  ADD PRIMARY KEY (`IDPhong`,`IDGiuong`),
  ADD KEY `Giuong_Phong_fk1` (`IDGiuong`);

--
-- Chỉ mục cho bảng `hinhanh_khachsan`
--
ALTER TABLE `hinhanh_khachsan`
  ADD PRIMARY KEY (`IDKhachSan`,`HinhAnh`);

--
-- Chỉ mục cho bảng `hinhanh_phong`
--
ALTER TABLE `hinhanh_phong`
  ADD PRIMARY KEY (`IDPhong`,`HinhAnh`);

--
-- Chỉ mục cho bảng `khachsan`
--
ALTER TABLE `khachsan`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `KhachSan_fk0` (`IDDiaDiem`);

--
-- Chỉ mục cho bảng `khunggio`
--
ALTER TABLE `khunggio`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `khuyenmai`
--
ALTER TABLE `khuyenmai`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `KhuyenMai_fk0` (`IDKhachSan`),
  ADD KEY `KhuyenMai_KG_fk1` (`IDKhungGio`);

--
-- Chỉ mục cho bảng `loaitiennghikhachsan`
--
ALTER TABLE `loaitiennghikhachsan`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `loaitiennghiphong`
--
ALTER TABLE `loaitiennghiphong`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `nguoinhanphong`
--
ALTER TABLE `nguoinhanphong`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `NguoiNhanPhong_fk0` (`IDKhachHang`);

--
-- Chỉ mục cho bảng `phong`
--
ALTER TABLE `phong`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Phong_fk0` (`IDKhachSan`);

--
-- Chỉ mục cho bảng `phong_dondatphong`
--
ALTER TABLE `phong_dondatphong`
  ADD PRIMARY KEY (`IDPhong`,`MaDonDatPhong`),
  ADD KEY `Phong_DonDatPhong_fk1` (`MaDonDatPhong`);

--
-- Chỉ mục cho bảng `taikhoanthanhtoan`
--
ALTER TABLE `taikhoanthanhtoan`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `TaiKhoanThanhToan_fk0` (`IDKhachHang`);

--
-- Chỉ mục cho bảng `thongtinhuuich`
--
ALTER TABLE `thongtinhuuich`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `thongtinhuuich_ks`
--
ALTER TABLE `thongtinhuuich_ks`
  ADD PRIMARY KEY (`IDKhachSan`,`IDThongTin`),
  ADD KEY `ThongTinHuuIch_KS_fk1` (`IDThongTin`);

--
-- Chỉ mục cho bảng `tiennghichung_ks`
--
ALTER TABLE `tiennghichung_ks`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `TienNghiChung_KS_fk0` (`IDLoai`);

--
-- Chỉ mục cho bảng `tiennghichung_phong`
--
ALTER TABLE `tiennghichung_phong`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `TienNghiChung_Phong_fk0` (`IDLoai`);

--
-- Chỉ mục cho bảng `tiennghi_khachsan`
--
ALTER TABLE `tiennghi_khachsan`
  ADD PRIMARY KEY (`IDKhachSan`,`IDTienNghi`),
  ADD KEY `TienNghi_KhachSan_fk1` (`IDTienNghi`);

--
-- Chỉ mục cho bảng `tiennghi_phong`
--
ALTER TABLE `tiennghi_phong`
  ADD PRIMARY KEY (`IDPhong`,`IDTienNghi`),
  ADD KEY `TienNghi_Phong_fk1` (`IDTienNghi`);

--
-- Chỉ mục cho bảng `uudai`
--
ALTER TABLE `uudai`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `uudai_phong`
--
ALTER TABLE `uudai_phong`
  ADD PRIMARY KEY (`IDPhong`,`IDUuDai`),
  ADD KEY `UuDai_Phong_fk1` (`IDUuDai`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `diadiem`
--
ALTER TABLE `diadiem`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT cho bảng `hinhanh_khachsan`
--
ALTER TABLE `hinhanh_khachsan`
  MODIFY `IDKhachSan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `khachsan`
--
ALTER TABLE `khachsan`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `khunggio`
--
ALTER TABLE `khunggio`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `khuyenmai`
--
ALTER TABLE `khuyenmai`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `loaitiennghikhachsan`
--
ALTER TABLE `loaitiennghikhachsan`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `loaitiennghiphong`
--
ALTER TABLE `loaitiennghiphong`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `nguoinhanphong`
--
ALTER TABLE `nguoinhanphong`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `phong`
--
ALTER TABLE `phong`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `taikhoanthanhtoan`
--
ALTER TABLE `taikhoanthanhtoan`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `thongtinhuuich`
--
ALTER TABLE `thongtinhuuich`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `tiennghichung_ks`
--
ALTER TABLE `tiennghichung_ks`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT cho bảng `tiennghichung_phong`
--
ALTER TABLE `tiennghichung_phong`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT cho bảng `uudai`
--
ALTER TABLE `uudai`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chukhachsan_khachsan`
--
ALTER TABLE `chukhachsan_khachsan`
  ADD CONSTRAINT `Fk_CKSKS_KS` FOREIGN KEY (`IDKhachSan`) REFERENCES `khachsan` (`ID`),
  ADD CONSTRAINT `Fk_CKSKS_ND` FOREIGN KEY (`IDChuKhachSan`) REFERENCES `nguoidung` (`ID`);

--
-- Các ràng buộc cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  ADD CONSTRAINT `DanhGia_fk0` FOREIGN KEY (`IDKhachSan`) REFERENCES `khachsan` (`ID`),
  ADD CONSTRAINT `DanhGia_fk1` FOREIGN KEY (`IDKhachHang`) REFERENCES `nguoidung` (`ID`);

--
-- Các ràng buộc cho bảng `danhsachyeuthich`
--
ALTER TABLE `danhsachyeuthich`
  ADD CONSTRAINT `DanhSachYeuThich_fk0` FOREIGN KEY (`IDKhachHang`) REFERENCES `nguoidung` (`ID`),
  ADD CONSTRAINT `DanhSachYeuThich_fk1` FOREIGN KEY (`IDKhachSan`) REFERENCES `khachsan` (`ID`);

--
-- Các ràng buộc cho bảng `dondatphong`
--
ALTER TABLE `dondatphong`
  ADD CONSTRAINT `DonDatPhong_fk0` FOREIGN KEY (`IDKhachHang`) REFERENCES `nguoidung` (`ID`);

--
-- Các ràng buộc cho bảng `giuong_phong`
--
ALTER TABLE `giuong_phong`
  ADD CONSTRAINT `Giuong_Phong_fk0` FOREIGN KEY (`IDPhong`) REFERENCES `phong` (`ID`),
  ADD CONSTRAINT `Giuong_Phong_fk1` FOREIGN KEY (`IDGiuong`) REFERENCES `giuong` (`ID`);

--
-- Các ràng buộc cho bảng `hinhanh_khachsan`
--
ALTER TABLE `hinhanh_khachsan`
  ADD CONSTRAINT `HinhAnh_KhachSan_fk0` FOREIGN KEY (`IDKhachSan`) REFERENCES `khachsan` (`ID`);

--
-- Các ràng buộc cho bảng `hinhanh_phong`
--
ALTER TABLE `hinhanh_phong`
  ADD CONSTRAINT `HinhAnh_Phong_fk0` FOREIGN KEY (`IDPhong`) REFERENCES `phong` (`ID`);

--
-- Các ràng buộc cho bảng `khachsan`
--
ALTER TABLE `khachsan`
  ADD CONSTRAINT `KhachSan_fk0` FOREIGN KEY (`IDDiaDiem`) REFERENCES `diadiem` (`ID`);

--
-- Các ràng buộc cho bảng `khuyenmai`
--
ALTER TABLE `khuyenmai`
  ADD CONSTRAINT `KhuyenMai_KG_fk1` FOREIGN KEY (`IDKhungGio`) REFERENCES `khunggio` (`ID`),
  ADD CONSTRAINT `KhuyenMai_fk0` FOREIGN KEY (`IDKhachSan`) REFERENCES `khachsan` (`ID`);

--
-- Các ràng buộc cho bảng `nguoinhanphong`
--
ALTER TABLE `nguoinhanphong`
  ADD CONSTRAINT `NguoiNhanPhong_fk0` FOREIGN KEY (`IDKhachHang`) REFERENCES `nguoidung` (`ID`);

--
-- Các ràng buộc cho bảng `phong`
--
ALTER TABLE `phong`
  ADD CONSTRAINT `Phong_fk0` FOREIGN KEY (`IDKhachSan`) REFERENCES `khachsan` (`ID`);

--
-- Các ràng buộc cho bảng `phong_dondatphong`
--
ALTER TABLE `phong_dondatphong`
  ADD CONSTRAINT `Phong_DonDatPhong_fk0` FOREIGN KEY (`IDPhong`) REFERENCES `phong` (`ID`),
  ADD CONSTRAINT `Phong_DonDatPhong_fk1` FOREIGN KEY (`MaDonDatPhong`) REFERENCES `dondatphong` (`MaDatPhong`);

--
-- Các ràng buộc cho bảng `taikhoanthanhtoan`
--
ALTER TABLE `taikhoanthanhtoan`
  ADD CONSTRAINT `TaiKhoanThanhToan_fk0` FOREIGN KEY (`IDKhachHang`) REFERENCES `nguoidung` (`ID`);

--
-- Các ràng buộc cho bảng `thongtinhuuich_ks`
--
ALTER TABLE `thongtinhuuich_ks`
  ADD CONSTRAINT `ThongTinHuuIch_KS_fk0` FOREIGN KEY (`IDKhachSan`) REFERENCES `khachsan` (`ID`),
  ADD CONSTRAINT `ThongTinHuuIch_KS_fk1` FOREIGN KEY (`IDThongTin`) REFERENCES `thongtinhuuich` (`ID`);

--
-- Các ràng buộc cho bảng `tiennghichung_ks`
--
ALTER TABLE `tiennghichung_ks`
  ADD CONSTRAINT `TienNghiChung_KS_fk0` FOREIGN KEY (`IDLoai`) REFERENCES `loaitiennghikhachsan` (`ID`);

--
-- Các ràng buộc cho bảng `tiennghichung_phong`
--
ALTER TABLE `tiennghichung_phong`
  ADD CONSTRAINT `TienNghiChung_Phong_fk0` FOREIGN KEY (`IDLoai`) REFERENCES `loaitiennghiphong` (`ID`);

--
-- Các ràng buộc cho bảng `tiennghi_khachsan`
--
ALTER TABLE `tiennghi_khachsan`
  ADD CONSTRAINT `TienNghi_KhachSan_fk0` FOREIGN KEY (`IDKhachSan`) REFERENCES `khachsan` (`ID`),
  ADD CONSTRAINT `TienNghi_KhachSan_fk1` FOREIGN KEY (`IDTienNghi`) REFERENCES `tiennghichung_ks` (`ID`);

--
-- Các ràng buộc cho bảng `tiennghi_phong`
--
ALTER TABLE `tiennghi_phong`
  ADD CONSTRAINT `TienNghi_Phong_fk0` FOREIGN KEY (`IDPhong`) REFERENCES `phong` (`ID`),
  ADD CONSTRAINT `TienNghi_Phong_fk1` FOREIGN KEY (`IDTienNghi`) REFERENCES `tiennghichung_phong` (`ID`);

--
-- Các ràng buộc cho bảng `uudai_phong`
--
ALTER TABLE `uudai_phong`
  ADD CONSTRAINT `UuDai_Phong_fk0` FOREIGN KEY (`IDPhong`) REFERENCES `phong` (`ID`),
  ADD CONSTRAINT `UuDai_Phong_fk1` FOREIGN KEY (`IDUuDai`) REFERENCES `uudai` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
