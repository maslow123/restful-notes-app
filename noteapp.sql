-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 20 Jun 2019 pada 10.03
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
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `category_name`) VALUES
(1, 'work'),
(2, 'life'),
(3, 'holiday'),
(4, 'personal data');

-- --------------------------------------------------------

--
-- Struktur dari tabel `description`
--

CREATE TABLE IF NOT EXISTS `description` (
  `desc_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `note` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category` int(11) NOT NULL,
  PRIMARY KEY (`desc_id`),
  KEY `category` (`category`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data untuk tabel `description`
--

INSERT INTO `description` (`desc_id`, `title`, `note`, `time`, `category`) VALUES
(3, 'vacationing at yogyakarta', 'I really like malioboro ', '2019-06-20 07:49:29', 3),
(4, 'vacationing at jakarta', 'I really like monas ', '2019-06-20 07:49:46', 3),
(5, 'vacationing at bogor', 'I really like palace bogor ', '2019-06-20 07:50:05', 3),
(6, 'vacationing at bandung', 'I really like gedung sate ', '2019-06-20 07:50:24', 3),
(7, 'vacationing at kediri', 'I really like agung mosque', '2019-06-20 07:50:47', 3),
(8, 'vacationing at malaysia', 'I really like kuala lumpur', '2019-06-20 07:51:23', 3),
(9, 'Notes app project', 'This week i do make a simple project that is restful API with node JS', '2019-06-20 07:52:34', 1),
(10, 'Learning Node JS', 'learn node js is very exciting, and make a head dizzy LOL', '2019-06-20 07:53:35', 1),
(11, 'My Name', 'My Name is M.Fadhly NR, you can call me Fadhly or other', '2019-06-20 07:54:37', 4),
(12, 'My Name', 'My Name is M.Fadhly NR, you can call me Fadhly or other', '2019-06-20 07:54:42', 4),
(13, 'My Education', 'My last education is vocational school', '2019-06-20 07:55:36', 4),
(14, 'I was a freelancer', 'My last project is make a some project for mosque, that programs name is Takmir Masjid', '2019-06-20 07:56:38', 4),
(15, 'I have a motto', 'That are if you want to be success, you have to feel the hard feeling of learning', '2019-06-20 07:58:40', 4),
(16, 'My family', 'Iam the second of five children', '2019-06-20 07:59:49', 2),
(17, 'My Hobbies', 'I have are hobbies, for example reading and trying new things', '2019-06-20 08:00:43', 2),
(18, 'Become a developer is my goals !', 'Because i have my inspiration, for example is Peter Jack Kambey', '2019-06-20 08:02:01', 2);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `description`
--
ALTER TABLE `description`
  ADD CONSTRAINT `description_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
