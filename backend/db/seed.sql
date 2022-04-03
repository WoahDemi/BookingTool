\c office

INSERT INTO meetingrooms(name, capacity, floor) 
VALUES
('Meeting Room 1', 6, 22),
('Meeting Room 2', 3, 20),
('Meeting Room 3', 8, 22),
('Meeting Room 4', 1, 20),
('Meeting Room 5', 1, 20),
('Hub', 30, 25),
('Boardroom 1', 12, 21),
('Boardroom 2', 10, 21),
('Boardroom 3', 14, 28);

INSERT INTO bookings(meetingroom_id, meeting_name, starttime, endtime)
VALUES
(1,'Team Awesome East Huddle', '04-11-2022 11:15:00', '04-11-2022 12:00:00'),
(2,'Star Team - Backlog Meeting','04-14-2022 09:00:00', '04-14-2022 09:30:00'),
(2,'Star Team - Requirements Gathering','04-12-2022 09:00:00', '04-12-2022 09:30:00' ),
(3,'Team Gamma - Standup','04-30-2022 09:00:00', '04-30-2022 09:30:00' ),
(4,'Team Fuego - Salsa','04-20-2022 09:00:00', '04-20-2022 09:30:00' ),
(5,'HR - Private Meeting', '04-20-2022 09:00:00', '04-20-2022 09:30:00'),
(3,'Team Awesome East Huddle', '04-20-2022 11:00:00', '04-20-2022 11:30:00');