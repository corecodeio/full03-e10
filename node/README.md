## Commands

```
  $ npm init --y
  $ npm install --save express
  $ npm install --save dotenv
  $ npm install --save-dev nodemon
  $ npm install --save oracledb
  $ npm install --save bcryptjs
  $ npm install --save jsonwebtoken
  $ npm install --save cors
```

## Running Custom Command

```
  $ npm run dev
```

# Oracle Commands

## Open PDB And Save State

```
  $ sqlplus / as sysdba
  $ alter pluggable database ORCLPDB open;
  $ alter pluggable database ORCLPDB save state;
  $ select con_name, state from dba_pdb_saved_states;
```

## Create user in PDB

```
  $ sqlplus / as sysdba
  $ ALTER SESSION SET CONTAINER = orclpdb;
  $ CREATE USER <username> IDENTIFIED BY <password> CONTAINER=CURRENT;
  $ GRANT ALL PRIVILEGES TO <username> CONTAINER=CURRENT;
  $ ALTER USER <username> DEFAULT TABLESPACE users TEMPORARY TABLESPACE temp QUOTA UNLIMITED ON users;
```

## Queries

```sql

-- PERSON

CREATE TABLE PERSON (
	PERSON NUMBER AUTO_INCREMENT,
	FIRST_NAME VARCHAR2(100) NOT NULL,
	EMAIL VARCHAR2(100) NOT NULL,
	PASSWORD VARCHAR2(100) NOT NULL,
	ADD_DATE DATE DEFAULT SYSDATE,
	PRIMARY KEY(PERSON)
);

CREATE SEQUENCE SQ_PERSON NOCACHE;

-- CATEGORY

CREATE TABLE CATEGORY (
	CATEGORY NUMBER,
	NAME VARCHAR2(100) NOT NULL,
	DESCRIPTION VARCHAR2(200) NOT NULL,
	PERSON NUMBER NOT NULL,
	ADD_DATE DATE DEFAULT SYSDATE,
	PRIMARY KEY (CATEGORY),
	FOREIGN KEY(PERSON) REFERENCES PERSON(PERSON)
);

CREATE SEQUENCE SQ_CATEGORY NOCACHE;

-- SELECTS

SELECT * FROM CATEGORY;
SELECT * FROM PERSON;

```
