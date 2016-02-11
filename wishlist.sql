CREATE DATABASE wish_list_db;
USE wish_list_db;
CREATE TABLE wish_list
 (
  id int NOT NULL AUTO_INCREMENT,
  note varchar(255),
  date TIMESTAMP,
  PRIMARY KEY (ID)
);