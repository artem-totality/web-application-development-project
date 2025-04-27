DROP DATABASE IF EXISTS G00473379;
CREATE DATABASE G00473379;
USE G00473379;

-- MySQL dump 10.13  Distrib 8.4.5, for Linux (x86_64)
--
-- Host: localhost    Database: G00473379
-- ------------------------------------------------------
-- Server version	8.4.5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `movieId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `movieId` (`movieId`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL,
  `cost` int DEFAULT NULL,
  `cover` text,
  `title` text,
  `short_description` text,
  `full_description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,42,'godfather.jpeg','The godfather','Experience the classic crime saga, \'The Godfather\'.','Immerse yourself in the world of organized crime with \'The Godfather\', directed by Francis Ford Coppola. This iconic film tells the story of the powerful Corleone family and their patriarch, Vito Corleone, as they navigate the complexities of loyalty, power, and betrayal in the American Mafia. With unforgettable performances, a gripping narrative, and memorable quotes, \'The Godfather\' has solidified its place in cinematic history. Whether you\'re a fan of drama or classic films, this timeless masterpiece is essential for your collection.'),(2,39,'inception.jpeg','Inception','Experience the thrill of dreams with \'Inception\'.','Dive into a world of dreams with Christopher Nolan\'s masterpiece, \'Inception\'. Follow Dom Cobb, a skilled thief who enters the dreams of others to steal secrets. When he is offered a chance to have his criminal history erased, he embarks on a mind-bending journey that blurs the lines between reality and imagination. With stunning visuals and a captivating score, this film challenges viewers to think deeply about the nature of existence. Whether you\'re a fan of mind-bending thrillers or cinematic art, \'Inception\' is a must-have that will spark discussions long after the credits roll.'),(3,25,'shoushenk.jpeg','The shawshank redemption','Discover the power of hope in \'The Shawshank Redemption\'.','Step into the world of resilience and hope with \'The Shawshank Redemption\'. Based on a story by Stephen King, this film follows the journey of Andy Dufresne, a banker wrongfully imprisoned for murder. Throughout his time at Shawshank State Penitentiary, he befriends fellow inmate Red and embarks on a journey of self-discovery and redemption. This inspiring tale showcases the power of hope and the human spirit, making it one of the greatest films of all time. Grab your copy and witness a story that resonates with audiences across generations.'),(4,41,'matrix.jpeg','The matrix','Experience the groundbreaking sci-fi film that changed cinema forever.','Dive into the mind-bending world of \'The Matrix,\' a revolutionary sci-fi film that challenges perception and reality. Follow Neo, a computer hacker, as he discovers the truth about his existence and the simulated world around him. With stunning visual effects, captivating storytelling, and a powerful performance by Keanu Reeves, this film has become a cultural phenomenon. Unravel the mysteries of the Matrix and experience a cinematic journey that redefined the genre. Get ready for action, intrigue, and philosophical exploration.'),(5,24,'interstellar.jpeg','Interstellar','A breathtaking journey through space and time in Nolan\'s epic sci-fi film.','Experience the breathtaking journey through space and time in Christopher Nolan\'s epic sci-fi masterpiece, Interstellar. Follow Cooper, a former pilot, as he embarks on a mission to find a new home for humanity. With stunning visuals, a captivating score by Hans Zimmer, and a thought-provoking narrative, Interstellar explores the depths of love, sacrifice, and the mysteries of the universe. This film is a must-have for any movie lover, offering a perfect blend of heart and intellect that will leave you pondering long after the credits roll.'),(6,31,'private-ryan.jpeg','Saving private ryan','A powerful World War II drama directed by Steven Spielberg.','Experience the gripping tale of sacrifice and valor in \'Saving Private Ryan,\' directed by Steven Spielberg. Set during World War II, this powerful film follows Captain Miller and his squad on a perilous mission to save a paratrooper whose brothers have been killed in action. With groundbreaking cinematography and a haunting score, this film captures the brutal reality of war and the profound impact of human courage. A must-watch for history buffs and film enthusiasts alike, \'Saving Private Ryan\' remains a timeless classic that will leave you on the edge of your seat.'),(7,36,'fight-club.jpeg','Fight club','Experience the cult classic that redefines modern masculinity and rebellion.','Dive into the chaotic world of \'Fight Club\', a film that explores the complexities of modern masculinity and consumer culture through the eyes of an unnamed protagonist. Struggling with insomnia and dissatisfaction with his mundane life, he discovers a secret fighting club that challenges societal norms and ignites a rebellion against the status quo. With powerful performances by Edward Norton and Brad Pitt, this cult classic will keep you engaged with its dark humor and thought-provoking themes. Experience the adrenaline, the philosophy, and the unforgettable twists that make \'Fight Club\' a must-have in your movie collection.'),(8,44,'forrest-gump.jpeg','Forrest gump','Experience the unforgettable journey of Forrest Gump in this classic film.','Forrest Gump is a heartwarming tale that transcends time and genre, showcasing the extraordinary life of a simple man with a kind heart. Follow Forrest as he unwittingly influences pivotal moments in American history while navigating his own journey of love, loss, and friendship. This iconic film, starring Tom Hanks, captivates audiences with its compelling storytelling and unforgettable quotes. Whether you\'re revisiting the magic or discovering it for the first time, Forrest Gump is a must-have addition to your movie collection. Experience the adventure, the joy, and the wisdom that only Forrest can offer!'),(9,28,'pulp-fiction.jpeg','Pulp fiction','A groundbreaking film by Quentin Tarantino that intertwines crime stories with unforgettable characters.','Dive into the world of Quentin Tarantino with \'Pulp Fiction,\' a cinematic masterpiece that intertwines multiple storylines across the Los Angeles criminal underworld. With unforgettable characters and sharp dialogue, this film redefined the crime genre. Follow hitmen Vincent Vega and Jules Winnfield as they navigate a series of bizarre and violent encounters. Whether you\'re a fan of classic cinema or simply appreciate great storytelling, \'Pulp Fiction\' is a must-have addition to your movie collection. Experience the iconic scenes and memorable quotes that have left a lasting impact on pop culture.'),(10,21,'pretty-woman.jpeg','Pretty woman','Experience the magic of love with the classic film \'Pretty Woman\'.','Dive into the enchanting world of romance with \'Pretty Woman\', a timeless classic that captures the magic of unexpected love. Follow the charming story of a wealthy businessman and a spirited woman who meet unexpectedly and embark on a journey filled with laughter, passion, and transformation. With captivating performances by Julia Roberts and Richard Gere, this film is a celebration of love that knows no boundaries. Perfect for a cozy movie night or a romantic date, \'Pretty Woman\' is a must-have addition to your movie collection. Relive the iconic moments and quotable lines that have made this film a cultural phenomenon.'),(11,33,'moscow-tears.jpeg','Moscow does not believe in tears','A heartwarming Soviet drama about love and ambition in Moscow.','Moscow Does Not Believe in Tears is a captivating Soviet-era drama that tells the poignant story of three young women navigating love and ambition in the bustling city of Moscow. This heartwarming film showcases the struggles and triumphs of its protagonists as they strive for their dreams while facing societal challenges. With its rich storytelling and powerful performances, this film has become a classic, resonating with audiences across generations. Experience the beauty of friendship, resilience, and the pursuit of happiness in a world that often seems unforgiving.'),(12,35,'man-wooman.jpeg','Un homme et une femme','A classic French romance that explores love and connection.','\'Un homme et une femme\' is a timeless romantic drama that beautifully captures the complexity of love and connection. Directed by Claude Lelouch, this French classic tells the story of a widowed man and a single mother who meet at a racecourse and form an unexpected bond. Their journey is filled with poignant moments, laughter, and heartache as they navigate their pasts and the potential for a future together. With stunning cinematography and a hauntingly beautiful score, this film is a must-watch for any lover of romance. Experience the magic of love in this captivating tale that transcends language and culture.'),(13,42,'apocalypse.jpeg','Apocalypse now','Experience the epic journey of \'Apocalypse Now,\' a cinematic masterpiece by Francis Ford Coppola.','Dive into the heart of darkness with \'Apocalypse Now,\' Francis Ford Coppola\'s epic war film that transcends the genre. Set against the backdrop of the Vietnam War, this cinematic masterpiece follows Captain Willard as he embarks on a perilous mission to find and terminate the rogue Colonel Kurtz. With stunning visuals, a haunting score, and thought-provoking themes, \'Apocalypse Now\' is not just a movie; it\'s an experience. Ideal for film enthusiasts and collectors alike, this classic is a must-have for your collection.'),(14,34,'lion.jpeg','The lion king','Experience the timeless classic, Disney\'s \'The Lion King.\'','Embark on an unforgettable journey with Disney\'s \'The Lion King.\' Join Simba, a young lion, as he navigates the challenges of growing up in the African savanna. Experience the breathtaking animation, memorable characters, and iconic songs that have captivated audiences for generations. Whether you\'re reliving childhood memories or discovering this timeless classic for the first time, \'The Lion King\' is a must-have addition to your movie collection. Available in various formats to suit your viewing preference, this film promises to inspire and entertain all ages.');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-27 20:34:03
