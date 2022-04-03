DROP DATABASE IF EXISTS office;
CREATE DATABASE office;

\c office;

DROP TABLE IF EXISTS meetingrooms;
CREATE TABLE meetingrooms(
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    capacity INT NOT NULL,
    floor INT NOT NULL
);

DROP TABLE IF EXISTS bookings;
CREATE TABLE bookings(
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    floor INT NOT NULL
);