-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: proyecto_meloso
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `texto_comentario` text,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `post_id` (`post_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,2,'Comentario 1 para Producto 1','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(2,1,3,'Comentario 2 para Producto 1','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(3,1,4,'Comentario 3 para Producto 1','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(4,2,1,'Comentario 1 para Producto 2','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(5,2,3,'Comentario 2 para Producto 2','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(6,2,3,'Comentario 3 para Producto 2','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(7,3,2,'Comentario 1 para Producto 3','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(8,3,4,'Comentario 2 para Producto 3','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(9,3,3,'Comentario 3 para Producto 3','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(10,4,1,'Comentario 1 para Producto 4','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(11,4,2,'Comentario 2 para Producto 4','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(12,4,3,'Comentario 3 para Producto 4','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `nombre_imagen` text,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'imagen1.jpg','Producto 1','Descripción del producto 1','2024-05-10 18:21:33','2024-06-12 16:26:42','2024-06-10 18:21:33'),(2,2,'imagen2.jpg','Producto 2','Descripción del producto 2','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(3,3,'imagen3.jpg','Producto 3','Descripción del producto 3','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(4,4,'imagen4.jpg','Producto 4','Descripción del producto 4','2024-06-10 18:21:33','2024-06-10 18:21:33','2024-06-10 18:21:33'),(5,1,'producto5.jpg','nuevo producto','descripcion ejm','2024-08-10 18:21:33','2024-06-14 18:34:35','2024-06-14 17:57:36');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `dni` int DEFAULT NULL,
  `foto_perfil` text,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'usuario1@example.com','contrasena1','1990-01-01',123456789,'user1.jpg','2024-06-10 18:21:33','2024-06-14 18:30:23','2024-06-10 18:21:33'),(2,'usuario2@example.com','contrasena2','1991-02-02',234567890,'user1.jpg','2024-06-10 18:21:33','2024-06-14 18:30:23','2024-06-10 18:21:33'),(3,'usuario3@example.com','contrasena3','1992-03-03',345678901,'user1.jpg','2024-06-10 18:21:33','2024-06-14 18:30:23','2024-06-10 18:21:33'),(4,'usuario4@example.com','contrasena4','1993-04-04',456789012,'user1.jpg','2024-06-10 18:21:33','2024-06-14 18:30:23','2024-06-10 18:21:33'),(5,'juan@gmail.com','123456','1991-02-06',32202202,'perfil2.jpg','2024-06-10 19:20:37','2024-06-10 19:20:37','2024-06-10 19:20:37'),(6,'maria@gmail.com','$2a$10$EHhH2/D9uv4fpguHE1PJ1.CiF48p9c1.WKeeMABXU9MWIPtw76Cqe',NULL,32656989,NULL,'2024-06-12 15:17:48','2024-06-12 15:17:48','2024-06-12 15:17:48'),(7,'fede@gmail.com','$2a$10$TrDvXnimc6/Qs3HCNnOrfOdUpqcEo/02KUYCg4QCIZML3O8.7RGjG','1993-06-05',3265698,'prueba.jpg','2024-06-12 15:19:39','2024-06-12 15:19:39','2024-06-12 15:19:39'),(8,'vale@gmail.com','$2a$10$x.peR7HRRX/7BQ7vhpgNw.M5p0I65/U.X0dy4Z0HczNX0vnY/EFGe','1990-02-26',326565,'user1.jpg','2024-06-14 18:52:23','2024-06-14 18:52:23','2024-06-14 18:52:23');
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

-- Dump completed on 2024-06-14 20:15:18
