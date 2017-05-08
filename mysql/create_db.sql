-- construct db

CREATE DATABASE bank;
USE bank;

-- tables

CREATE TABLE IF NOT EXISTS client (
	id VARCHAR(30) NOT NULL,
	status INT NOT NULL DEFAULT 1,
	dateOfBirth DATE NOT NULL,
	username VARCHAR(40),
	password VARCHAR(256),
	address TEXT,
	phone VARCHAR(20),
	salary INT,
	fname VARCHAR(20) NOT NULL,
	lname VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS savings_certificate (
	certificateNum INT NOT NULL,
	startDate DATE NOT NULL,
	amount DOUBLE PRECISION NOT NULL,
	typeID INT NOT NULL,
	id VARCHAR(30),
	accountNum INT
);

CREATE TABLE IF NOT EXISTS certificate_type (
	typeId INT NOT NULL,
	duration INT NOT NULL,
	rate DOUBLE PRECISION NOT NULL,
	periodsPerYear INT NOT NULL,
	currency CHAR(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS credit_card (
	cardNum INT NOT NULL,
	max DOUBLE PRECISION NOT NULL,
	currency CHAR(3) NOT NULL,
	pin VARCHAR(256) NOT NULL,
	id VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS savings_account (
	accountNum INT NOT NULL,
	issueDate DATE NOT NULL,
	rate DOUBLE PRECISION NOT NULL DEFAULT 0,
	balance DOUBLE PRECISION NOT NULL DEFAULT 0,
	available DOUBLE PRECISION NOT NULL DEFAULT 0,
	currency CHAR(3) NOT NULL,
	active BOOLEAN NOT NULL DEFAULT 1,
	id VARCHAR(30) NOT NULL,
	lastOperationDate DATE NOT NULL,
	cardNum INT
);

CREATE TABLE IF NOT EXISTS loan (
	loanNum INT NOT NULL,
	amount DOUBLE PRECISION NOT NULL,
	rate DOUBLE PRECISION NOT NULL,
	paid DOUBLE PRECISION NOT NULL,
	startDate DATE NOT NULL,
	endDate DATE,
	id VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS checking_account (
	accountNum INT NOT NULL,
	issueDate DATE NOT NULL,
	balance DOUBLE PRECISION NOT NULL DEFAULT 0,
	available DOUBLE PRECISION NOT NULL DEFAULT 0,
	currency CHAR(3) NOT NULL,
	active BOOLEAN NOT NULL DEFAULT 1,
	id VARCHAR(30) NOT NULL,
	lastOperationDate DATE NOT NULL,
	cardNum INT
);

CREATE TABLE IF NOT EXISTS bank.check (
	checkNum INT NOT NULL,
	accountNum INT NOT NULL,
	redeemer_fname VARCHAR(20) NOT NULL,
	redeemer_lname VARCHAR(20) NOT NULL,
	redeemDate DATE NOT NULL,
	writingDate DATE NOT NULL,
	amount DOUBLE PRECISION NOT NULL
);

CREATE TABLE IF NOT EXISTS debit_card (
	cardNum INT NOT NULL,
	pin VARCHAR(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS guarantees (
	id VARCHAR(30) NOT NULL,
	loanNum INT NOT NULL
);

CREATE TABLE IF NOT EXISTS guaranteed_by (
	certificateNum INT NOT NULL,
	loanNum INT NOT NULL,
	state CHAR(1) NOT NULL,
	dueDate DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS employee (
	id VARCHAR(30) NOT NULL,
	username VARCHAR(40) NOT NULL,
	password VARCHAR(256) NOT NULL,
	fname VARCHAR(20) NOT NULL,
	lname VARCHAR(20) NOT NULL,
	address TEXT NOT NULL,
	phone VARCHAR(20),
	dateOfBirth DATE NOT NULL,
	type CHAR(1) NOT NULL,
	salary INT NOT NULL,
	branch INT NOT NULL
);


-- indexes

ALTER TABLE client
	ADD PRIMARY KEY (id);

ALTER TABLE savings_certificate
	ADD PRIMARY KEY (certificateNum);

ALTER TABLE certificate_type
	ADD PRIMARY KEY (typeId);

ALTER TABLE credit_card
	ADD PRIMARY KEY (cardNum);

ALTER TABLE savings_account
	ADD PRIMARY KEY (accountNum);

ALTER TABLE loan
	ADD PRIMARY KEY (loanNum);

ALTER TABLE checking_account
	ADD PRIMARY KEY (accountNum);

ALTER TABLE bank.check
	ADD PRIMARY KEY (checkNum, accountNum);

ALTER TABLE debit_card
	ADD PRIMARY KEY (cardNum);

ALTER TABLE guarantees
	ADD PRIMARY KEY (id, loanNum);

ALTER TABLE guaranteed_by
	ADD PRIMARY KEY (certificateNum, loanNum);

ALTER TABLE employee
	ADD PRIMARY KEY (id);


-- auto increments

ALTER TABLE savings_certificate
	MODIFY certificateNum INT NOT NULL AUTO_INCREMENT;

ALTER TABLE certificate_type
	MODIFY typeId INT NOT NULL AUTO_INCREMENT;

ALTER TABLE savings_account
	MODIFY accountNum INT NOT NULL AUTO_INCREMENT;

ALTER TABLE loan
	MODIFY loanNum INT NOT NULL AUTO_INCREMENT;

ALTER TABLE checking_account
	MODIFY accountNum INT NOT NULL AUTO_INCREMENT;

ALTER TABLE debit_card
	MODIFY cardNum INT NOT NULL AUTO_INCREMENT;

ALTER TABLE credit_card
	MODIFY cardNum INT NOT NULL AUTO_INCREMENT;


-- foriegn key constraints

ALTER TABLE savings_certificate
	ADD CONSTRAINT savings_certificate_typeId_FK FOREIGN KEY (typeId) REFERENCES certificate_type (typeId) ON DELETE RESTRICT ON UPDATE CASCADE,
	ADD CONSTRAINT savings_certificate_id_FK FOREIGN KEY (id) REFERENCES client (id) ON DELETE RESTRICT ON UPDATE CASCADE,
	ADD CONSTRAINT savings_certificate_accountNum_FK FOREIGN KEY (accountNum) REFERENCES savings_account (accountNum) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE credit_card
	ADD CONSTRAINT credit_card_id_FK FOREIGN KEY (id) REFERENCES client (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE savings_account
	ADD CONSTRAINT savings_account_id_FK FOREIGN KEY (id) REFERENCES client (id) ON DELETE RESTRICT ON UPDATE CASCADE,
	ADD CONSTRAINT savings_account_cardNum_FK FOREIGN KEY (cardNum) REFERENCES debit_card (cardNum) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE loan
	ADD CONSTRAINT loan_id_FK FOREIGN KEY (id) REFERENCES client (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE checking_account
	ADD CONSTRAINT checking_account_id_FK FOREIGN KEY (id) REFERENCES client (id) ON DELETE RESTRICT ON UPDATE CASCADE,
	ADD CONSTRAINT checking_account_cardNum_FK FOREIGN KEY (cardNum) REFERENCES debit_card (cardNum) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE bank.check
	ADD CONSTRAINT check_accountNum_FK FOREIGN KEY (accountNum) REFERENCES checking_account (accountNum) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE guarantees
	ADD CONSTRAINT guarantees_id_FK FOREIGN KEY (id) REFERENCES client (id) ON DELETE CASCADE ON UPDATE CASCADE,
	ADD CONSTRAINT guarantees_loanNum_FK FOREIGN KEY (loanNum) REFERENCES loan (loanNum) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE guaranteed_by
	ADD CONSTRAINT guaranteed_by_certificateNum_FK FOREIGN KEY (certificateNum) REFERENCES savings_certificate (certificateNum) ON DELETE CASCADE ON UPDATE CASCADE,
	ADD CONSTRAINT guaranteed_by_loanNum_FK FOREIGN KEY (loanNum) REFERENCES loan (loanNum) ON DELETE CASCADE ON UPDATE CASCADE;

-- triggers

DELIMITER $
CREATE TRIGGER savings_certificate_startDate_default 
	BEFORE INSERT ON savings_certificate FOR EACH ROW
	SET_DEF: BEGIN
 		SET NEW.startDate=CURDATE();
	END SET_DEF $
DELIMITER ;

DELIMITER $
CREATE TRIGGER savings_account_issueDate_default 
	BEFORE INSERT ON savings_account FOR EACH ROW
	SET_DEF: BEGIN
 		SET NEW.lastOperationDate=CURDATE();
 		SET NEW.issueDate=CURDATE();
	END SET_DEF $
DELIMITER ;

DELIMITER $
CREATE TRIGGER savings_account_lastOperationDate_update
	AFTER UPDATE ON savings_account FOR EACH ROW
 		SET @lastOperationDate=CURDATE();
DELIMITER ;

DELIMITER $
CREATE TRIGGER loan_startDate_default 
	BEFORE INSERT ON loan FOR EACH ROW
	SET_DEF: BEGIN
 		SET NEW.startDate=CURDATE();
	END SET_DEF $
DELIMITER ;

DELIMITER $
CREATE TRIGGER checking_account_issueDate_default 
	BEFORE INSERT ON checking_account FOR EACH ROW
	SET_DEF: BEGIN
 		SET NEW.lastOperationDate=CURDATE();
 		SET NEW.issueDate=CURDATE();
	END SET_DEF $
DELIMITER ;

DELIMITER $
CREATE TRIGGER checking_account_lastOperationDate_update
	AFTER UPDATE ON checking_account FOR EACH ROW
 		SET @lastOperationDate=CURDATE();
DELIMITER ;

DELIMITER $
CREATE TRIGGER check_redeemDate_default 
	BEFORE INSERT ON bank.check FOR EACH ROW
	SET_DEF: BEGIN
 		SET NEW.redeemDate=CURDATE();
	END SET_DEF $
DELIMITER ;
