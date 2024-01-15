create table Passenger (
 fullname varchar(50) not null,
 gender varchar(30) not null,
 passenge_ID bigserial primary key,
 contact_number varchar(30) not null);

 create table Driver (
 Driver_name varchar(50) not null,
 gender varchar(30) not null,
 Driver_ID bigserial primary key,
 Driver_dob date not null);

Create table cashier (
cashier_name varchar(50) not null,
gender varchar (30) not null,
username varchar (30) not null unique,
password varchar (30) not null,
cashier_ID  bigserial primary key);


create table Cashier (
cashier_name varchar(50) not null,
gender varchar (30) not null,
username varchar (30) not null unique,
password varchar (30) not null,
cashier_ID  bigserial primary key);