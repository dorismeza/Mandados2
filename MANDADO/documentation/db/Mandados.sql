CREATE DATABASE  IF NOT EXISTS `restaurante` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `restaurante`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurante
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `NIT` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'sinforiano','123123',NULL,NULL,NULL),(2,'jose','7367882',NULL,NULL,NULL);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `detalle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (23,'Doris','Me gusta la app','2022-04-06 14:27:36',NULL,NULL),(24,'hola','hola','2022-04-06 15:29:02',NULL,NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2021_05_13_124300_create_usuarios_table',1),(2,'2021_05_13_124322_create_clientes_table',1),(3,'2021_05_13_124348_create_platos_table',1),(4,'2021_05_13_124405_create_pedidos_table',1),(5,'2021_05_13_211819_create_comentarios_table',1),(6,'2021_05_13_212122_create_pedido_platos_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_platos`
--

DROP TABLE IF EXISTS `pedido_platos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_platos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `sub_total` double(8,2) NOT NULL,
  `pedido_id` bigint unsigned NOT NULL,
  `plato_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_platos_pedido_id_foreign` (`pedido_id`),
  KEY `pedido_platos_plato_id_foreign` (`plato_id`),
  CONSTRAINT `pedido_platos_pedido_id_foreign` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `pedido_platos_plato_id_foreign` FOREIGN KEY (`plato_id`) REFERENCES `platos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_platos`
--

LOCK TABLES `pedido_platos` WRITE;
/*!40000 ALTER TABLE `pedido_platos` DISABLE KEYS */;
INSERT INTO `pedido_platos` VALUES (1,23,115.00,2,5,NULL,NULL),(2,34,170.00,3,5,NULL,NULL),(3,2,36.00,4,8,NULL,NULL),(4,3,15.00,4,5,NULL,NULL);
/*!40000 ALTER TABLE `pedido_platos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `fecha_pedido` datetime NOT NULL,
  `total` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cliente_id` bigint unsigned NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pedidos_cliente_id_foreign` (`cliente_id`),
  CONSTRAINT `pedidos_cliente_id_foreign` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'2021-06-20 17:08:02','90',1,NULL,NULL,NULL),(2,'2021-06-20 17:20:29','115',1,NULL,NULL,NULL),(3,'2021-06-20 17:21:01','975',1,NULL,NULL,NULL),(4,'2021-06-27 23:22:48','51',2,NULL,NULL,NULL);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platos`
--

DROP TABLE IF EXISTS `platos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `platos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` double(8,2) NOT NULL,
  `foto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platos`
--

LOCK TABLES `platos` WRITE;
/*!40000 ALTER TABLE `platos` DISABLE KEYS */;
INSERT INTO `platos` VALUES (5,'sopa de mani',5.00,'1622152042016Sopas-tipicas-de-bolivia-480x270.jpg','sopa de mani con arroz y leche',NULL,NULL,NULL),(7,'mondongo',16.00,'1624678299792f_2017-08-10_14.jpg','es un plato con mote, aji, carne de cerdo',NULL,NULL,NULL),(8,'silpancho',18.00,'1624850509827silpancho.jpg','ninguna',NULL,NULL,NULL),(9,'Sopa',50.00,'1622151636595foto.jpeg','Rica Sopa',NULL,NULL,NULL);
/*!40000 ALTER TABLE `platos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `precio` double(8,2) NOT NULL,
  `foto` varchar(250) NOT NULL,
  `descripcion` varchar(600) NOT NULL,
  `idTineda` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idTienda_idx` (`idTineda`),
  CONSTRAINT `idTienda` FOREIGN KEY (`idTineda`) REFERENCES `tiendas` (`idTienda`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Big Mac',175.00,'Big-Mac.jpg','La perfección deliciosa comienza con dos hamburguesas de carne de res 100 % pura y salsa Big Mac',1),(2,'Papas Fritas',75.00,'fries-small.jpg','fries-small.jpg	Las World Famous Fries de McDonald\'s están hechas con papas premium como la Russet Burbank y la Shepody.',1),(3,'McNuggets',120.00,'McNuggets.jpg','McNuggets.jpg	Nuestros Chicken McNuggets tiernos y jugosos están hechos 100 % con carne de pollo blanca y sin colorantes, sabores ni conservantes artificiales.',1),(4,'Coca-Cola Medio',20.00,'medioLitro.jpg','Ayuda a proteger al oso polar. Fórmula original. Contenido de cafeína: 34 mg/12 fl oz. Bajo en sodio, 140 mg o menos por 360 ml (12 fl oz). Por favor recicla.',2),(5,'Coca-Cola Dos Litros',50.00,'dosLitros.jpeg','Coca-Cola Original Soda Pop, Botella de 2 Litros',2),(6,'Coca-Cola Tres Litros',70.00,'tresLitos.jpg','Coca-Cola, 3 Liter Bottle',2),(7,'Caffe Misto',140.00,'misto.png','Una combinación uno a uno de café recién preparado y leche al vapor se suman a una bebida de café claramente deliciosa notablemente mezclada.',3),(8,'Cinnamon Dolce Latte',120.00,'dolceLatte.png','Agregamos leche recién hervida al vapor y jarabe con sabor a canela dolce a nuestro espresso clásico, cubierto con crema batida endulzada y un aderezo de canela dolce para brindarle un toque especial en una delicia.',3),(9,'Mocha Cookie Crumble Frappuccino',170.00,'mocha.png','Frappuccino Café tostado, salsa moka y chips de Frappuccino mezclados con leche y hielo, sobre capas de crema batida y crumble de galleta de chocolate y cubierto con crema batida de vainilla, llovizna de moka y aún más crumble de galleta de chocolate. Cada sorbo es tan bueno como el anterior. . . todo el camino hasta el final.',3),(10,'WoW Box',600.00,'WowBox.png','Wow Box 2 Incluye: 2 Pizzas Familiares Hut Cheese ',4),(11,'Pizza Mia',99.00,'pizzaMia.jpg','Deliciosa Pizza',4),(12,'Hut\'s Grilled Cheese',350.00,'cheese.jpg','Rica Pizza rellena de queso',4);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('3-Z8fVxNjO6KZ6mVj1WttFeF-BkVUorS',1649367324,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}'),('NdZEnXov0OZbdpE1CHfi5DIVnxTbRfp1',1649345176,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),('PJsPeOYwlwqsq6yrLFqgfWdTq7uk7gjc',1649361035,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":4}}'),('_-Asst2NhltYnYnfkC4_53gSraXFDKI4',1649366484,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiendas`
--

DROP TABLE IF EXISTS `tiendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiendas` (
  `idTienda` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`idTienda`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiendas`
--

LOCK TABLES `tiendas` WRITE;
/*!40000 ALTER TABLE `tiendas` DISABLE KEYS */;
INSERT INTO `tiendas` VALUES (1,'Mc Donals','Venta de hamburguesas'),(2,'CocaCola Company','Compañia coca cola'),(3,'Expresso Americano','Cafe'),(4,'Pizza Hut','Pizza y comida italiana');
/*!40000 ALTER TABLE `tiendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cuenta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` enum('Administrador','Cajero') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_cuenta_unique` (`cuenta`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'jose','jose','jose','Administrador',NULL,NULL,NULL),(2,'root','root','$2a$10$PX3.8PV8wszNGqZZ9OKDFezmgdAyVPsD91UEEj0hJeoSH9OSIU5I2','Administrador',NULL,NULL,NULL),(3,'juan','juan','$2a$10$L.fYlh9i4xaIXeaeZCq6MuWKLEkZAurTZ7QxS8V6m3/vbEA1mzh/y','Administrador',NULL,NULL,NULL),(4,'Lesvin','lesvin','$2a$10$KOlVLI94NXPJwOqQbEb4xeDN6pD1e6Jphfkfv9hJhsseG7umUwiC2','Administrador',NULL,NULL,NULL),(5,'Doris','doris','$2a$10$ZIYqq7v8HL/fyvFHckESae5SlacCzBa371UZYup/2RIxQ9gKnPi4W','Administrador',NULL,NULL,NULL),(6,'Jostin','Jostin','$2a$10$zr.c3xX7iiR0dLy4OPz6hePY5TKd7BlbHp6c3C9yRNtVxAeztMchG',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-06 22:21:24
