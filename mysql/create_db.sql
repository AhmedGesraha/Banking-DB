-- construct db

CREATE DATABASE bank;


-- tables

CREATE TABLE IF NOT EXISTS bank.client (
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

CREATE TABLE IF NOT EXISTS bank.savings_certificate (
	certificateNum INT NOT NULL,
	startDate DATE NOT NULL,
	amount DOUBLE NOT NULL,
	typeID INT NOT NULL,
	id VARCHAR(30),
	accountNum INT
);

CREATE TABLE IF NOT EXISTS bank.certificate_type (
	typeId INT NOT NULL,
	duration INT NOT NULL,
	rate DOUBLE NOT NULL,
	periodsPerYear INT NOT NULL,
	currency CHAR(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.credit_card (
	cardNum CHAR(16) NOT NULL,
	max DOUBLE NOT NULL,
	currency CHAR(3) NOT NULL,
	pin VARCHAR(256) NOT NULL,
	id VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS bank.savings_account (
	accountNum INT NOT NULL,
	issueDate DATE NOT NULL,
	rate DOUBLE NOT NULL,
	balance DOUBLE NOT NULL,
	available DOUBLE NOT NULL,
	currency CHAR(3) NOT NULL,
	active BOOLEAN NOT NULL,
	id VARCHAR(30) NOT NULL,
	cardNum CHAR(16)
);

CREATE TABLE IF NOT EXISTS bank.loan (
	loanNum INT NOT NULL,
	amount DOUBLE NOT NULL,
	rate DOUBLE NOT NULL,
	paid DOUBLE NOT NULL,
	startDate DATE NOT NULL,
	endDate DATE,
	id VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.checking_account (
	accountNum INT NOT NULL,
	issueDate DATE NOT NULL,
	balance DOUBLE NOT NULL,
	available DOUBLE NOT NULL,
	currency CHAR(3) NOT NULL,
	active BOOLEAN NOT NULL,
	id VARCHAR(30) NOT NULL,
	cardNum CHAR(16)
);

CREATE TABLE IF NOT EXISTS bank.check (
	checkNum INT NOT NULL,
	accountNum INT NOT NULL,
	redeemer_fname VARCHAR(20) NOT NULL,
	redeemer_lname VARCHAR(20) NOT NULL,
	redeemDate DATE NOT NULL,
	writingDate DATE NOT NULL,
	amount DOUBLE NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.debit_card (
	cardNum CHAR(16) NOT NULL,
	pin VARCHAR(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.guarantees (
	id VARCHAR(30) NOT NULL,
	loanNum INT NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.guaranteed_by (
	certificateNum INT NOT NULL,
	loanNum INT NOT NULL,
	state CHAR(1) NOT NULL,
	dueDate DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.employee (
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

ALTER TABLE bank.client
	ADD PRIMARY KEY (id);

ALTER TABLE bank.savings_certificate
	ADD PRIMARY KEY (certificateNum);

ALTER TABLE bank.certificate_type
	ADD PRIMARY KEY (typeId);

ALTER TABLE bank.credit_card
	ADD PRIMARY KEY (cardNum);

ALTER TABLE bank.savings_account
	ADD PRIMARY KEY (accountNum);

ALTER TABLE bank.loan
	ADD PRIMARY KEY (loanNum);

ALTER TABLE bank.checking_account
	ADD PRIMARY KEY (accountNum);

ALTER TABLE bank.check
	ADD PRIMARY KEY (checkNum, accountNum);

ALTER TABLE bank.debit_card
	ADD PRIMARY KEY (cardNum);

ALTER TABLE bank.guarantees
	ADD PRIMARY KEY (id, loanNum);

ALTER TABLE bank.guaranteed_by
	ADD PRIMARY KEY (certificateNum, loanNum);

ALTER TABLE bank.employee
	ADD PRIMARY KEY (id);


-- auto increments

ALTER TABLE bank.savings_certificate
	MODIFY certificateNum INT NOT NULL AUTO_INCREMENT;

ALTER TABLE bank.savings_account
	MODIFY accountNum INT NOT NULL AUTO_INCREMENT;

ALTER TABLE bank.loan
	MODIFY loanNum INT NOT NULL AUTO_INCREMENT;

ALTER TABLE bank.checking_account
	MODIFY accountNum INT NOT NULL AUTO_INCREMENT;


-- constraints

ALTER TABLE bank.savings_certificate
	ADD CONSTRAINT savings_certificate_typeId_FK FOREIGN KEY (typeId) REFERENCES bank.certificate_type (typeId) ON DELETE RESTRICT ON UPDATE CASCADE,
	ADD CONSTRAINT savings_certificate_id_FK FOREIGN KEY (id) REFERENCES bank.client (id) ON DELETE RESTRICT ON UPDATE CASCADE,
	ADD CONSTRAINT savings_certificate_accountNum_FK FOREIGN KEY (accountNum) REFERENCES bank.savings_account (accountNum) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE bank.credit_card
	ADD CONSTRAINT credit_card_id_FK FOREIGN KEY (id) REFERENCES bank.client (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE bank.savings_account
	ADD CONSTRAINT savings_account_id_FK FOREIGN KEY (id) REFERENCES bank.client (id) ON DELETE RESTRICT ON UPDATE CASCADE,
	ADD CONSTRAINT savings_account_cardNum_FK FOREIGN KEY (cardNum) REFERENCES bank.debit_card (cardNum) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE bank.loan
	ADD CONSTRAINT loan_id_FK FOREIGN KEY (id) REFERENCES bank.client (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE bank.checking_account
	ADD CONSTRAINT checking_account_id_FK FOREIGN KEY (id) REFERENCES bank.client (id) ON DELETE RESTRICT ON UPDATE CASCADE,
	ADD CONSTRAINT checking_account_cardNum_FK FOREIGN KEY (cardNum) REFERENCES bank.debit_card (cardNum) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE bank.check
	ADD CONSTRAINT check_accountNum_FK FOREIGN KEY (accountNum) REFERENCES bank.checking_account (accountNum) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE bank.guarantees
	ADD CONSTRAINT guarantees_id_FK FOREIGN KEY (id) REFERENCES bank.client (id) ON DELETE CASCADE ON UPDATE CASCADE,
	ADD CONSTRAINT guarantees_loanNum_FK FOREIGN KEY (loanNum) REFERENCES bank.loan (loanNum) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE bank.guaranteed_by
	ADD CONSTRAINT guaranteed_by_certificateNum_FK FOREIGN KEY (certificateNum) REFERENCES bank.savings_certificate (certificateNum) ON DELETE CASCADE ON UPDATE CASCADE,
	ADD CONSTRAINT guaranteed_by_loanNum_FK FOREIGN KEY (loanNum) REFERENCES bank.loan (loanNum) ON DELETE CASCADE ON UPDATE CASCADE;
