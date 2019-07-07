-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 07 Jul 2019 pada 09.34
-- Versi Server: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `noteapp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `image_url`) VALUES
(1, 'Work', 'https://png.pngtree.com/svg/20160224/7d9fe6589e.png'),
(2, 'Holiday', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPMnP2lZz795c4KsKEM4X7zgqAw_6goqsHUudU9KJQmzm7rySXA'),
(3, 'Lesson', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_RrodPs4zy2Woh_M13HGoEijUz6J_5d_Y_2_PCwqc7MJWIYt'),
(4, 'Draft', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMkCAgqlpNC2rK77PYfPsYxwOQ9ZILrKEcA8EldPSpExwf1Kp');

-- --------------------------------------------------------

--
-- Struktur dari tabel `description`
--

CREATE TABLE IF NOT EXISTS `description` (
  `desc_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `note` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `category` int(11) DEFAULT NULL,
  PRIMARY KEY (`desc_id`),
  KEY `category` (`category`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=193 ;

--
-- Dumping data untuk tabel `description`
--

INSERT INTO `description` (`desc_id`, `title`, `note`, `createdAt`, `updatedAt`, `category`) VALUES
(174, 'Title lesson', 'Lesson', '2019-07-07 01:40:55', '2019-07-07 01:40:55', 3),
(176, 'Lesson', 'Hagaha', '2019-07-07 01:43:11', '2019-07-07 01:43:11', 3),
(190, 'Mama this is a work !', 'Simple example to work', '2019-07-07 07:14:10', '2019-07-07 07:19:12', 1),
(191, 'This is a holiday !', 'Content for notes', '2019-07-07 07:27:15', '2019-07-07 07:27:15', 2),
(192, 'This is draft !', 'Content for notes', '2019-07-07 07:27:40', '2019-07-07 07:27:40', 4);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `description`
--
ALTER TABLE `description`
  ADD CONSTRAINT `description_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`category_id`) ON DELETE SET NULL;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
