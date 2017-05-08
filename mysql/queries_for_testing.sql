-- adding a client
INSERT INTO `client`(`id`, `dateOfBirth`, `fname`, `lname`) VALUES ('111122223333','1970-12-12','Noah','Orensa');

-- adding a svaings certificate type
INSERT INTO `certificate_type`(`duration`, `rate`, `periodsPerYear`, `currency`) VALUES (60,0.1,4,'EGP');

-- adding a savings certificate not linked to a savings account
INSERT INTO `savings_certificate`(`amount`, `typeID`, `id`) VALUES (10000,1,'111122223333');

-- creating a new savings account without a linked debit card
INSERT INTO `savings_account`(`currency`, `id`) VALUES ('EGP','111122223333');