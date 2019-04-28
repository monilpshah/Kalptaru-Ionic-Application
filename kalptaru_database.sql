-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2019 at 07:07 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kalptaru_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart_tbl`
--

CREATE TABLE `cart_tbl` (
  `fk_product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `fk_user_email` varchar(30) NOT NULL,
  `payment_option` varchar(10) NOT NULL,
  `fk_category_id` int(11) NOT NULL,
  `product_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart_tbl`
--

INSERT INTO `cart_tbl` (`fk_product_id`, `qty`, `fk_user_email`, `payment_option`, `fk_category_id`, `product_price`) VALUES
(114, 1, 'monil31199@gmail.com', 'cod', 106, 22499),
(115, 1, 'monil31199@gmail.com', 'cod', 106, 9799),
(114, 1, 'raj@gmail.com', 'cod', 106, 22499),
(121, 1, 'raj@gmail.com', 'cod', 104, 73),
(135, 1, 'bunny@gmail.com', 'cod', 109, 9),
(114, 1, 'bunny@gmail.com', 'cod', 106, 22499),
(148, 1, '', 'CASH', 114, 12);

-- --------------------------------------------------------

--
-- Table structure for table `category_tbl`
--

CREATE TABLE `category_tbl` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_tbl`
--

INSERT INTO `category_tbl` (`category_id`, `category_name`) VALUES
(104, 'SOFAS'),
(105, 'SETTEES & BENCHES'),
(106, 'ACCENT CHAIRS'),
(107, 'TV UNITS'),
(108, 'STOOLS'),
(109, 'DISPLAY UNIT'),
(110, 'CABINET'),
(111, 'SHOE RACKS'),
(112, 'COFFEE TABLES'),
(113, 'BEDS'),
(114, 'WARDROBES');

-- --------------------------------------------------------

--
-- Table structure for table `colour_tbl`
--

CREATE TABLE `colour_tbl` (
  `colour_id` int(11) NOT NULL,
  `colour_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_invoice_tbl`
--

CREATE TABLE `customer_invoice_tbl` (
  `fk_user_email` varchar(30) NOT NULL,
  `fk_user_name` varchar(30) NOT NULL,
  `fk_user_mobileno` varchar(20) NOT NULL,
  `fk_user_address` varchar(100) NOT NULL,
  `user_shipping_address` varchar(100) NOT NULL,
  `fk_category_id` int(11) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `fk_product_qty` int(11) NOT NULL,
  `fk_product_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `employee_tbl`
--

CREATE TABLE `employee_tbl` (
  `employee_email` varchar(30) NOT NULL,
  `employee_password` varchar(30) NOT NULL,
  `employee_name` varchar(50) NOT NULL,
  `employee_joining_date` date NOT NULL,
  `employee_salary` double NOT NULL,
  `employee_designation` varchar(30) NOT NULL,
  `employee_mobileno` double DEFAULT NULL,
  `employee_city` varchar(30) NOT NULL,
  `employee_gender` varchar(6) NOT NULL,
  `employee_address` varchar(100) NOT NULL,
  `salary_status` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_tbl`
--

INSERT INTO `employee_tbl` (`employee_email`, `employee_password`, `employee_name`, `employee_joining_date`, `employee_salary`, `employee_designation`, `employee_mobileno`, `employee_city`, `employee_gender`, `employee_address`, `salary_status`) VALUES
('delievery@gmail.com', '123', 'monu', '2019-03-19', 5000, 'Delievery_Boy', 1234567890, 'vadodara', 'male', 'baroda', 'Done'),
('shahmonil929@gmail.com', 'Monil@123', 'Monil Shah', '2018-12-18', 100000, 'Worker', 9173569994, 'Ahmedbad', 'Male', 'Naroda,Ahmedabad', 'Done'),
('shahprarthit929@gmail.com', 'Bunny@123', 'Prarthit Shah', '2018-12-02', 150000, 'Cashier', 8200773469, 'Surat', 'Male', 'Pal,Surat', 'Done'),
('shahsmit929@gmail.com', 'Smit@123', 'Smit Shah', '2018-12-20', 200000, 'Manager', 9724489177, 'Ahmedabad', 'Male', 'Paldi,Ahmedabad', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `leave_tbl`
--

CREATE TABLE `leave_tbl` (
  `leave_id` int(11) NOT NULL,
  `fk_employee_email` varchar(64) NOT NULL,
  `leave_msg` varchar(250) NOT NULL,
  `leave_days` int(11) NOT NULL,
  `leave_from_date` date NOT NULL,
  `leave_status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leave_tbl`
--

INSERT INTO `leave_tbl` (`leave_id`, `fk_employee_email`, `leave_msg`, `leave_days`, `leave_from_date`, `leave_status`) VALUES
(1, 'shahsmit929@gmail.com', 'ddsfsdfsd', 10, '2019-04-18', 'Accept'),
(3, 'bunny@gmail.com', 'personal', 15, '2019-04-09', 'Accept'),
(4, 'shahmonil929@gmail.com', 'marriage', 7, '2019-04-23', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `loan_tbl`
--

CREATE TABLE `loan_tbl` (
  `loan_id` int(11) NOT NULL,
  `loan_amount` double NOT NULL,
  `fk_employee_email` varchar(30) NOT NULL,
  `loan_issued_date` date NOT NULL,
  `last_installment_date` date NOT NULL,
  `loan_status` varchar(30) NOT NULL,
  `loan_reason` varchar(300) NOT NULL,
  `loan_months` int(11) NOT NULL,
  `rejected_reason` varchar(50) NOT NULL,
  `pay_per_month` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loan_tbl`
--

INSERT INTO `loan_tbl` (`loan_id`, `loan_amount`, `fk_employee_email`, `loan_issued_date`, `last_installment_date`, `loan_status`, `loan_reason`, `loan_months`, `rejected_reason`, `pay_per_month`) VALUES
(1, 500000, 'bunny@gmail.com', '2019-02-13', '2019-02-13', 'accept', 'kai nai', 5, '', 0),
(2, 500000, 'bunny@gmail.com', '2019-02-13', '2019-02-13', 'reject', 'kai nai', 5, '', 0),
(29, 10000, 'shahsmit929@gmail.com', '2019-04-23', '2019-04-23', 'Pending', 'marraige', 12, '', 850);

-- --------------------------------------------------------

--
-- Table structure for table `order_details_tbl`
--

CREATE TABLE `order_details_tbl` (
  `order_details_id` int(11) NOT NULL,
  `fk_order_id` int(11) NOT NULL,
  `fk_product_id` int(20) NOT NULL,
  `fk_category_id` int(11) NOT NULL,
  `fk_product_price` int(11) NOT NULL,
  `qty` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_details_tbl`
--

INSERT INTO `order_details_tbl` (`order_details_id`, `fk_order_id`, `fk_product_id`, `fk_category_id`, `fk_product_price`, `qty`) VALUES
(592, 1107, 135, 109, 9, 1),
(593, 1107, 114, 106, 22499, 1),
(594, 1108, 135, 109, 9, 1),
(595, 1108, 114, 106, 22499, 1),
(596, 1109, 135, 109, 9, 1),
(597, 1109, 114, 106, 22499, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_tbl`
--

CREATE TABLE `order_tbl` (
  `order_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `order_amount` double NOT NULL,
  `fk_user_email` varchar(20) NOT NULL,
  `delievery_assign` varchar(50) DEFAULT NULL,
  `order_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_tbl`
--

INSERT INTO `order_tbl` (`order_id`, `order_date`, `order_amount`, `fk_user_email`, `delievery_assign`, `order_status`) VALUES
(1107, '0000-00-00', 26559, 'bunny@gmail.com', NULL, 2),
(1108, '0000-00-00', 26559, 'bunny@gmail.com', ' ', 1),
(1109, '0000-00-00', 26559, 'bunny@gmail.com', ' ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_image_tbl`
--

CREATE TABLE `product_image_tbl` (
  `fk_product_id` int(11) NOT NULL,
  `product_image2` varchar(150) NOT NULL,
  `product_image3` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_image_tbl`
--

INSERT INTO `product_image_tbl` (`fk_product_id`, `product_image2`, `product_image3`) VALUES
(114, 'product_image-1552813760858.jpg', 'product_image-1552813760858.jpg'),
(115, 'product_image-1552814041965.jpg', 'product_image-1552814041965.jpg'),
(116, 'product_image-1552814208272.jpg', 'product_image-1552814208272.jpg'),
(117, 'product_image-1552814335256.jpg', 'product_image-1552814335256.jpg'),
(118, 'product_image-1552814514389.jpg', 'product_image-1552814514389.jpg'),
(119, 'product_image-1552814726274.jpg', 'product_image-1552814726274.jpg'),
(120, 'product_image-1552814870732.jpg', 'product_image-1552814870732.jpg'),
(121, 'product_image-1552815009616.jpg', 'product_image-1552815009616.jpg'),
(122, 'product_image-1552815280064.jpg', 'product_image-1552815280064.jpg'),
(123, 'product_image-1552815421164.jpg', 'product_image-1552815421164.jpg'),
(124, 'product_image-1552815554374.jpg', 'product_image-1552815554374.jpg'),
(125, 'product_image-1552815824135.jpg', 'product_image-1552815824135.jpg'),
(126, 'product_image-1552816038541.jpg', 'product_image-1552816038541.jpg'),
(127, 'product_image-1552816246318.jpg', 'product_image-1552816246318.jpg'),
(128, 'product_image-1552816418630.jpg', 'product_image-1552816418630.jpg'),
(129, 'product_image-1552816609764.jpg', 'product_image-1552816609764.jpg'),
(130, 'product_image-1552816858529.jpg', 'product_image-1552816858529.jpg'),
(131, 'product_image-1552817034301.jpg', 'product_image-1552817034301.jpg'),
(132, 'product_image-1552817231119.jpg', 'product_image-1552817231119.jpg'),
(133, 'product_image-1552817463887.jpg', 'product_image-1552817463887.jpg'),
(134, 'product_image-1552817758119.jpg', 'product_image-1552817758119.jpg'),
(135, 'product_image-1552817910984.jpg', 'product_image-1552817910984.jpg'),
(136, 'product_image-1552818107393.jpg', 'product_image-1552818107393.jpg'),
(137, 'product_image-1552818325607.jpg', 'product_image-1552818325607.jpg'),
(138, 'product_image-1552818571771.jpg', 'product_image-1552818571771.jpg'),
(139, 'product_image-1552818812304.jpg', 'product_image-1552818812304.jpg'),
(140, 'product_image-1552818985918.jpg', 'product_image-1552818985918.jpg'),
(141, 'product_image-1552819132731.jpg', 'product_image-1552819132731.jpg'),
(142, 'product_image-1552819299182.jpg', 'product_image-1552819299182.jpg'),
(143, 'product_image-1552819462006.jpg', 'product_image-1552819462006.jpg'),
(144, 'product_image-1552840360142.jpg', 'product_image-1552840360142.jpg'),
(145, 'product_image-1552840711783.jpg', 'product_image-1552840711783.jpg'),
(146, 'product_image-1552840889866.jpg', 'product_image-1552840889866.jpg'),
(147, 'product_image-1552841147195.jpg', 'product_image-1552841147195.jpg'),
(148, 'product_image-1552841396344.jpg', 'product_image-1552841396344.jpg'),
(149, 'product_image-1555907578330.png', 'product_image-1555907578330.png'),
(150, 'product_image-1556255274292.jpg', 'product_image-1556255274292.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_tbl`
--

CREATE TABLE `product_tbl` (
  `product_id` int(20) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `fk_category_id` int(11) NOT NULL,
  `product_price` float NOT NULL,
  `product_colour` varchar(20) NOT NULL,
  `product_image` varchar(50) NOT NULL,
  `product_weight` float NOT NULL,
  `product_warranty` int(11) NOT NULL,
  `product_material` varchar(20) NOT NULL,
  `product_Roomtype` varchar(20) NOT NULL,
  `product_height` float NOT NULL,
  `product_width` float NOT NULL,
  `product_depth` float NOT NULL,
  `product_qty` int(11) NOT NULL,
  `product_offer` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_tbl`
--

INSERT INTO `product_tbl` (`product_id`, `product_name`, `fk_category_id`, `product_price`, `product_colour`, `product_image`, `product_weight`, `product_warranty`, `product_material`, `product_Roomtype`, `product_height`, `product_width`, `product_depth`, `product_qty`, `product_offer`) VALUES
(114, 'Elton Arm Chair in B', 106, 22499, 'BLUE', 'product_image-1552813760858.jpg', 10.5, 36, 'FABRIC', 'LIVING ROOM', 37, 25, 23, 4, '10'),
(115, 'New Manchster Rocking Chair with Cushion in Dark Green Colour', 106, 9799, 'DARK GREEN', 'product_image-1552814041965.jpg', 6, 12, 'FABRIC', 'LIVING ROOM', 36, 35, 27, 10, '10'),
(116, 'Cecelia Wing Chair in Purple Colour', 106, 26, 'PURPLE', 'product_image-1552814208272.jpg', 23, 12, 'FABRIC', 'LIVING ROOM ', 43, 28, 34, 10, '10'),
(117, 'Ekati Metal Chair in Blue Colour', 106, 4, 'BLUE', 'product_image-1552814335256.jpg', 5.28, 36, 'METAL', 'LIVING ROOM', 34, 18, 18, 10, '10'),
(118, 'Ludovic Accent Chair in Honey Oak', 106, 14, 'HONEY OAK', 'product_image-1552814514389.jpg', 25, 36, 'SHEESHAM WOOD', 'LIVING ROOM', 31, 23, 24, 10, '10'),
(119, 'Aleandro LHS Three Seater Sofa with Lounger in Navy Blue Colour', 104, 96, 'NAVY BLUE', 'product_image-1552814726274.jpg', 50, 36, 'FABRIC', 'LIVING ROOM', 34, 114, 75, 10, '10'),
(120, 'Palmarez One Seater Manual Recliner in Black Colour', 104, 45, 'BLACK', 'product_image-1552814870732.jpg', 33, 12, ' Leatherette', 'LIVING ROOM', 40, 38, 39, 10, '10'),
(121, 'Luana Storage Sofa Cum Bed With Ottoman In Dark Brown Color ', 104, 73, 'DARK BROWN', 'product_image-1552815009616.jpg', 74.5, 12, 'FABRIC ', 'LIVING ROOM', 29, 82, 39.8, 97, '100'),
(122, 'Studio Look Tufted Settee in Grey Colour', 105, 30, 'GREY', 'product_image-1552815280064.jpg', 15, 0, 'FABRIC', 'LIVING ROOM', 23, 54, 19, 10, '10'),
(123, 'Exclusive Princess Chaise in Dark Purple Colour', 105, 34, 'DARK PURPLE', 'product_image-1552815421164.jpg', 20, 0, 'FABRIC', 'LIVING ROOM', 28, 72, 24, 10, '10'),
(124, 'Stigen Solid Wood Bench in Provincial Teak', 105, 9, 'PROVINCIAL TEAK', 'product_image-1552815554374.jpg', 21, 36, 'SHEESHAM WOOD', 'DINING ROOM', 18, 48, 18, 10, '10'),
(125, 'Milo Solid Wood Unit in Provincial Teak', 107, 16, 'PROVINCIAAL TEAK', 'product_image-1552815824135.jpg', 20, 36, 'SHEESHAM WOOD', 'LIVING ROOM', 52, 14, 18, 10, '10'),
(126, 'Yemon TV Unit in White', 107, 8, 'WHITE', 'product_image-1552816038541.jpg', 18, 12, 'ENGINEERED WOOD', 'LIVING ROOM', 18, 43, 18, 10, '10'),
(127, 'Trussel Solid Wood TV Unit in Premium Acacia', 107, 18, 'PREMIUM ACACIA', 'product_image-1552816246318.jpg', 25, 36, 'ACACIA WOOD', 'LIVING ROOM', 19, 46, 18, 10, '10'),
(128, 'Carleson Solid Wood TV Unit in Provincial Teak', 107, 19, 'PROVINCIAL TEAK', 'product_image-1552816418630.jpg', 32, 36, 'SHEESHAM WOOD', 'LIVING ROOM', 18, 46, 16, 10, '10'),
(129, 'Siramika Solid Wood Sheesham Wood TV Unit in Honey Oak', 107, 27, 'HONEY OAK', 'product_image-1552816609764.jpg', 36.8, 36, 'SHEESHAM WOOD', 'LIVING ROOM', 20, 52, 16, 10, '10'),
(130, 'Low Rise Carved Sheesham Wood Round Table in Brown', 108, 9, 'BROWN', 'product_image-1552816858529.jpg', 4.5, 0, 'SHEESHAM WOOD', 'LIVING ROOM', 12, 16, 16, 10, '10'),
(131, 'Kalaya Solid Wood Stool in Warm Chestnut', 108, 5, 'WARM CHESTNUT', 'product_image-1552817034301.jpg', 6.5, 36, 'SHEESHAM WOOD', 'LIVING ROOM', 16, 18, 18, 10, '10'),
(132, 'Segur Solid Wood Bar Stool in Provincial Teak', 108, 4, 'PROVINCIAL TEAK', 'product_image-1552817231119.jpg', 15, 36, 'SHEESHAM WOOD', 'BAR', 30, 18, 18, 10, '10'),
(133, 'Rajasthani Cute Li\'l Damroo', 108, 1, '-------------', 'product_image-1552817463887.jpg', 0.5, 0, 'SILICON RUBBER', 'LIVING ROOM', 9, 11, 11, 10, '10'),
(134, 'Tiber Solid Wood Display Unit in Premium Acacia', 109, 41, 'PREMIUM ACACIA', 'product_image-1552817758119.jpg', 40, 36, 'ACACIA WOOD', 'LIVING ROOM', 71, 25, 17, 10, '10'),
(135, 'Orafu Display Unit with Book Shelves cum Study Desk in White', 109, 9, 'WHITE', 'product_image-1552817910984.jpg', 17.1, 12, 'ENGINEERED WOOD', 'STUDY ROOM', 71, 25, 18, 7, '10'),
(136, 'Provencal Solid Wood Display Unit cum Book Shelf in White', 109, 25, 'WHITE', 'product_image-1552818107393.jpg', 7.5, 36, 'MANGO WOOD', 'LIVING ROOM', 45, 35, 15, 10, '10'),
(137, 'Display Unit cum Book Shelf in Gold color', 109, 21, 'GOLD', 'product_image-1552818325607.jpg', 0, 6, 'METAL', 'STUDY ROOM', 76, 32, 13, 10, '10'),
(138, 'Avilys Solid Wood Multi-Purpose Storage Cabinet in Provincial Teak', 110, 28, 'PROVINCIAL TEAK', 'product_image-1552818571771.jpg', 20, 36, 'SHEESHAM WOOD', 'DINING ROOM', 28, 47, 17, 10, '10'),
(139, 'Takeko Kitchen Cabinet in Oak & Abstract', 110, 7, 'LIGHT BROWN', 'product_image-1552818812304.jpg', 13.05, 12, 'ENGINEERED WOOD', 'DINING ROOM', 32, 22, 14, 10, '10'),
(140, 'Anne Solid Wood Cabinet with Two Doors in Provincial Teak', 110, 20, 'PROVINCIAL TEAK', 'product_image-1552818985918.jpg', 33, 36, 'SHEESHAM WOOD', 'LIVING ROOM', 32, 35, 17, 10, '10'),
(141, 'Talon Solid Wood Cabinet in Distress', 110, 32, 'DISTRESS', 'product_image-1552819132731.jpg', 45, 36, 'MANGO WOOD', 'LIVING ROOM', 60, 24, 16, 10, '10'),
(142, 'Siramika Solid Wood Cabinet in Honey Oak', 110, 28, 'HONEY OAK', 'product_image-1552819299182.jpg', 41.7, 36, 'SHEESHAM WOOD', 'DINING ROOM', 30, 42, 17, 10, '10'),
(143, 'Louis Solid Wood Hutch Cabinet in Provincial Teak', 110, 51, 'PROVINCIAL TEAK', 'product_image-1552819462006.jpg', 45, 36, 'SHEESHAM WOOD', 'DINING ROOM', 78, 35, 16, 10, '10'),
(144, 'Rodley Two Door Shoe Rack with Drawer in Wenge', 111, 22900, '--------', 'product_image-1552840360142.jpg', 15, 12, 'ENGINEERED WOOD', 'LIVING ROOM', 47, 27, 14, 10, '10'),
(145, 'Segur Solid Wood Coffee Table in Provincial Teak', 112, 13, 'PROVINCIAL TEAK', 'product_image-1552840711783.jpg', 45.9, 36, 'SHEESHAM WOOD', 'LIVING ROOM', 14, 34, 34, 10, '10'),
(146, 'Ogechi Coffee Table in Vermont', 112, 5, '---------', 'product_image-1552840889866.jpg', 20, 36, 'ENGINEERED WOOD', '------------', 16, 36, 20, 10, '10'),
(147, 'Kosmo Weave Queen Size Bed in Vermount', 113, 17, 'VERMOUNT', 'product_image-1552841147195.jpg', 90, 36, 'ENGINEERED WOOD', 'BEDROOM', 37, 64, 83, 10, '10'),
(148, 'Kosmo Crescent Two Door Wardrobe with Mirror in Dark Acacia', 114, 12, 'ACACIA DARK', 'product_image-1552841396344.jpg', 65, 36, 'ENGINEERED WOOD', 'BEDROOM', 71, 32, 19, 10, '10'),
(149, 'Plastic chair', 106, 10000, 'black', 'product_image-1555907578116.png', 1, 1, 'Plastic black chair', 'leaving', 1, 1, 1, 100, '100'),
(150, 'tables table', 108, 10000, 'black', 'product_image-1556255273068.jpg', 10, 10, '10', 'leaving', 10, 10, 10, 10, '10');

-- --------------------------------------------------------

--
-- Table structure for table `review_tbl`
--

CREATE TABLE `review_tbl` (
  `fk_product_id` int(11) NOT NULL,
  `fk_user_email` varchar(50) NOT NULL,
  `review` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `user_email` varchar(30) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_mobileno` double NOT NULL,
  `user_city` varchar(20) NOT NULL,
  `user_gender` varchar(7) NOT NULL,
  `user_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`user_email`, `user_password`, `user_name`, `user_mobileno`, `user_city`, `user_gender`, `user_address`) VALUES
('bunny@gmail.com', 'bunnydon', 'bunny', 94096485853, 'abad', 'male', ''),
('mom@gmail.com', 'mom', '', 0, '', 'Female', ''),
('monil31199@gmail.com', 'monu', 'bunny', 94096485853, 'Ahmedabad', 'male', 'B-5/56,Krishna Estate Flats,Krishnanagar road,Saijpur Bogha\nAhmedabad'),
('mummy@gmail.com', 'mom', '', 0, '', 'Female', ''),
('raj@gmail.com', 'raj123', 'rajbhai', 8866697028, 'abad', 'male', 'thaltej');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist_tbl`
--

CREATE TABLE `wishlist_tbl` (
  `fk_product_id` int(11) NOT NULL,
  `fk_user_email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wishlist_tbl`
--

INSERT INTO `wishlist_tbl` (`fk_product_id`, `fk_user_email`) VALUES
(114, 'bunny@gmail.com'),
(125, 'bunny@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_tbl`
--
ALTER TABLE `category_tbl`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `colour_tbl`
--
ALTER TABLE `colour_tbl`
  ADD PRIMARY KEY (`colour_id`);

--
-- Indexes for table `employee_tbl`
--
ALTER TABLE `employee_tbl`
  ADD PRIMARY KEY (`employee_email`);

--
-- Indexes for table `leave_tbl`
--
ALTER TABLE `leave_tbl`
  ADD PRIMARY KEY (`leave_id`);

--
-- Indexes for table `loan_tbl`
--
ALTER TABLE `loan_tbl`
  ADD PRIMARY KEY (`loan_id`);

--
-- Indexes for table `order_details_tbl`
--
ALTER TABLE `order_details_tbl`
  ADD PRIMARY KEY (`order_details_id`);

--
-- Indexes for table `order_tbl`
--
ALTER TABLE `order_tbl`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product_image_tbl`
--
ALTER TABLE `product_image_tbl`
  ADD PRIMARY KEY (`fk_product_id`);

--
-- Indexes for table `product_tbl`
--
ALTER TABLE `product_tbl`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_tbl`
--
ALTER TABLE `category_tbl`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `colour_tbl`
--
ALTER TABLE `colour_tbl`
  MODIFY `colour_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leave_tbl`
--
ALTER TABLE `leave_tbl`
  MODIFY `leave_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `loan_tbl`
--
ALTER TABLE `loan_tbl`
  MODIFY `loan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `order_details_tbl`
--
ALTER TABLE `order_details_tbl`
  MODIFY `order_details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=598;

--
-- AUTO_INCREMENT for table `order_tbl`
--
ALTER TABLE `order_tbl`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1110;

--
-- AUTO_INCREMENT for table `product_image_tbl`
--
ALTER TABLE `product_image_tbl`
  MODIFY `fk_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `product_tbl`
--
ALTER TABLE `product_tbl`
  MODIFY `product_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
