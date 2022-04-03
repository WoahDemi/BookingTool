DROP DATABASE IF EXISTS office;
CREATE DATABASE office;

\c office;

DROP TABLE IF EXISTS meetingrooms;
DROP TABLE IF EXISTS bookings;

CREATE TABLE meetingrooms(
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    capacity INT NOT NULL,
    floor INT NOT NULL
);

CREATE TABLE bookings(
    id SERIAL PRIMARY KEY, 
    meetingroom_id INT REFERENCES meetingrooms(id),
    meeting_name TEXT NOT NULL, 
    starttime TIMESTAMP NOT NULL,
    endtime TIMESTAMP NOT NULL
);