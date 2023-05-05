create table login_date(
	id varchar(3),
    login_date datetime
);
SELECT * FROM test.login_date;

insert into login_date( id, login_date) values
('a20', '2022-01-03 00:00:00'),
('a20', '2022-04-04 00:00:00'),
('a20', '2022-08-07 00:00:00'),
('a20', '2022-12-11 00:00:00'),
('b11', '2020-01-03 00:00:00'),
('b11', '2021-08-03 00:00:00'),
('b11', '2022-01-17 00:00:00'),
('c30', '2021-03-04 00:00:00'),
('c30', '2021-06-01 00:00:00');

select id, login_date, LAG(login_date,1) over(partition by id order by login_date) 이전기록확인
from login_date;

select id, login_date, lead(login_date, 1) over(partition by id order by login_date) 다음기록확인
from login_date;