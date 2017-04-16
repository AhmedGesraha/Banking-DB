-- construct db

CREATE DATABASE bank;


--tables

CREATE TABLE IF NOT EXISTS bank.client (
	id INT NOT NULL,
	status INT DEFAULT 1,
	dateOfBirth DATE NOT NULL,
	username VARCHAR(40),
	password VARCHAR(256),
	address TEXT,
	phone VARCHAR(20),
	salary INT,
	fname VARCHAR(20) NOT NULL,
	lname VARCHAR(20) NOT NULL,
	cardNum INT
);

CREATE TABLE IF NOT EXISTS bank.savings_certificate (
	certificateNum INT NOT NULL,
	startDate DATE NOT NULL,
	endDate DATE NOT NULL,
	amount DOUBLE NOT NULL,
	rate DOUBLE NOT NULL,
	periodsPerYear INT NOT NULL,
	currency CHAR(3) NOT NULL,
	id INT,
	accountNum INT
);

CREATE TABLE IF NOT EXISTS bank.credit_card (
	cardNum INT NOT NULL,
	max DOUBLE NOT NULL,
	currency CHAR(3) NOT NULL,
	pin VARCHAR(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.savings_account (
	accountNum INT NOT NULL,
	issueDate DATE NOT NULL,
	rate DOUBLE NOT NULL,
	balance DOUBLE NOT NULL,
	available DOUBLE NOT NULL,
	currency CHAR(3) NOT NULL,
	active BOOLEAN NOT NULL,
	id INT NOT NULL,
	cardNum INT
);

CREATE TABLE IF NOT EXISTS bank.loan (
	loanNum INT NOT NULL,
	amount DOUBLE NOT NULL,
	rate DOUBLE NOT NULL,
	paid DOUBLE NOT NULL,
	startDate DATE NOT NULL,
	endDate DATE,
	id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.checking_account (
	accountNum INT NOT NULL,
	issueDate DATE NOT NULL,
	balance DOUBLE NOT NULL,
	available DOUBLE NOT NULL,
	currency CHAR(3) NOT NULL,
	active BOOLEAN NOT NULL,
	id INT NOT NULL,
	cardNum INT
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

CREATE TABLE IF NOT EXISTS bank.dedit_card (
	cardNum INT NOT NULL,
	pin VARCHAR(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.guarantees (
	id INT NOT NULL,
	loanNum INT NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.guaranteed_by (
	certificateNum INT NOT NULL,
	loanNum INT NOT NULL,
	state CHAR(1) NOT NULL,
	dueDate DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS bank.employee (
	id INT NOT NULL,
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
