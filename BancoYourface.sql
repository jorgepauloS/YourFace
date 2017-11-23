-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 23-Nov-2017 às 16:02
-- Versão do servidor: 5.7.19
-- PHP Version: 5.6.31

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
CREATE DATABASE IF NOT EXISTS `yourface` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `yourface`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_aluno`
--

DROP TABLE IF EXISTS `tb_aluno`;
CREATE TABLE IF NOT EXISTS `tb_aluno` (
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `ativo` enum('true','false') COLLATE utf8_bin DEFAULT 'true',
  `cpf` varchar(12) COLLATE utf8_bin NOT NULL,
  `email` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_coord`
--

DROP TABLE IF EXISTS `tb_coord`;
CREATE TABLE IF NOT EXISTS `tb_coord` (
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `cpf` varchar(40) COLLATE utf8_bin NOT NULL,
  `password` varchar(41) COLLATE utf8_bin NOT NULL,
  `ativo` enum('true','false') COLLATE utf8_bin DEFAULT 'true',
  `email` varchar(200) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `tb_coord`
--

INSERT INTO `tb_coord` (`name`, `cpf`, `password`, `ativo`, `email`) VALUES
('admin', 'admin', '12345', 'true', 'admin@admin');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_prof`
--

DROP TABLE IF EXISTS `tb_prof`;
CREATE TABLE IF NOT EXISTS `tb_prof` (
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `Password` varchar(41) COLLATE utf8_bin NOT NULL,
  `ativo` enum('true','false') COLLATE utf8_bin DEFAULT 'true',
  `cpf` varchar(12) COLLATE utf8_bin NOT NULL,
  `email` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
