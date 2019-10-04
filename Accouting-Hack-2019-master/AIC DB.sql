CREATE DATABASE IF NOT EXISTS AIC_DB;
USE AIC_DB;

DROP TABLE IF EXISTS usertable;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE usertable (
  user_id int(11) NOT NULL,
  user_name varchar(30) NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  pass_word varchar(50) NOT NULL,
  PRIMARY KEY(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS keyword_table;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE keyword_table (
  key_id int(11) NOT NULL,
  keyword varchar(30) NOT NULL,
  PRIMARY KEY (key_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS keywordset;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE keywordset (
  set_id int(11) NOT NULL,
  kw1 int(11) NOT NULL,
  kw2 int(11) NOT NULL,
  kw3 int(11) NOT NULL,
  kw4 int(11) NOT NULL,
  kw5 int(11) NOT NULL,
  PRIMARY KEY (set_id),
  FOREIGN KEY (kw1) REFERENCES keyword_table(key_id), 
  FOREIGN KEY (kw2) REFERENCES keyword_table(key_id),
  FOREIGN KEY (kw3) REFERENCES keyword_table(key_id),
  FOREIGN KEY (kw4) REFERENCES keyword_table(key_id),
  FOREIGN KEY (kw5) REFERENCES keyword_table(key_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS document;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE document (
  document_id int(11) NOT NULL,
  user_id int(11) NOT NULL,
  title varchar(30) NOT NULL,
  summary varchar(200) NOT NULL,
  url_link varchar(200) NOT NULL,
  up_vote int(255) NOT NULL,
  down_vote int(255) NOT NULL,
  set_id int(11) NOT NULL,
  PRIMARY KEY (document_id),
  FOREIGN KEY (user_id) REFERENCES usertable(user_id),
  FOREIGN KEY (set_id) REFERENCES keywordset(set_id) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;



