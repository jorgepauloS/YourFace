-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 07-Nov-2017 às 02:14
-- Versão do servidor: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yourface`
--
CREATE DATABASE IF NOT EXISTS `yourface` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `yourface`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_tb`
--

CREATE TABLE `user_tb` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `login` varchar(40) COLLATE utf8_bin NOT NULL,
  `Password` varchar(41) COLLATE utf8_bin NOT NULL,
  `tipo` enum('Aluno','Cord','Prof') COLLATE utf8_bin DEFAULT 'Aluno',
  `ativo` enum('true','false') COLLATE utf8_bin DEFAULT 'true'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `user_tb`
--

INSERT INTO `user_tb` (`id`, `name`, `login`, `Password`, `tipo`, `ativo`) VALUES
(1, 'Erico', 'rico', '123', 'Cord', 'true'),
(2, 'Andre', 'andre', '123', 'Cord', 'true');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_tb`
--
ALTER TABLE `user_tb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_tb`
--
ALTER TABLE `user_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
