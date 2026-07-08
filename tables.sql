CREATE TABLE department(
    Dept_name VARCHAR(150) UNIQUE,
    id INT DEFAULT nextval('dept_id') PRIMARY KEY,
    course_duration INT,
    duration_type VARCHAR(50),
);
CREATE TABLE students(
    id VARCHAR(20),
    name VARCHAR(100),
    year INT ,
    start_year INT,
    end_year INT,
    dept_id INT,
    dob DATE,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(12) UNIQUE,
    address VARCHAR(300),
    s_no SERIAL,
    CONSTRAINT fk
    FOREIGN KEY (dept_id) REFERENCES department(id)
);
CREATE TABLE staffs(
    id INT DEFAULT nextval('staff_id') PRIMARY KEY,
    name VARCHAR(100),
    role VARCHAR(50),
    dept_id INT,
    onboarding_date DATE,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(12) UNIQUE,
    address VARCHAR(300),
    experience_in_year INT,
    CONSTRAINT fk
    FOREIGN KEY (dept_id) REFERENCES department(id)
);
CREATE TABLE exam(
    sub_id INT,
    exam_date DATE,
    CONSTRAINT fk
    FOREIGN KEY (sub_id) REFERENCES subject(sub_id),
    check(exam_date~'/\d{4}+\d{2}+\d{2}/')
);
CREATE TABLE marks(
    sub_id INT,
    student_id INT,
    allotment_id INT,
    total_mark INT,
    obtained_mark INT,
    status VARCHAR(4),
    CONSTRAINT fk
    FOREIGN KEY(sub_id) REFERENCES subject(sub_id),
    FOREIGN KEY(student_id) REFERENCES students(id),
    FOREIGN KEY(allotment_id) REFERENCES dept_sub_allocation(allotment_id)
);
CREATE TABLE subject(
    id INT DEFAULT nextval('sub_id') PRIMARY KEY,
    name VARCHAR(100) UNIQUE,
    semester  INT,
    type VARCHAR(50)
);
CREATE TABLE dept_sub_allocation(
    allotment_id INT DEFAULT nextval('all_id') PRIMARY KEY,
    department_id INT,
    sub_id INT,
    semester INT,
    staff_id INT,
    year INT,
    FOREIGN KEY(sub_id) REFERENCES subject(id),
    FOREIGN KEY(department_id) REFERENCES department(id),
    FOREIGN KEY(staff_id) REFERENCES staffs(id)
);
CREATE FUNCTION studid()
RETURNs TRIGGER
AS $$
BEGIN
NEW.id:=NEW.start_year ||'00'||NEW.dept_id || (5000 + NEW.s_no);
RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER studid
BEFORE INSERT
ON students
FOR EACH ROW
EXECUTE FUNCTION studid();

CREATE SEQUENCE dept_id
START WITH 1001
INCREMENT BY 1;

CREATE SEQUENCE staff_id
START WITH 2001
INCREMENT BY 1;

CREATE SEQUENCE sub_id
START WITH 3001
INCREMENT BY 1;

CREATE SEQUENCE all_id
START WITH 4001
INCREMENT BY 1;

select s.name as name ,d.Dept_name as deptatment, json_agg(json_build_object('id',sub.id,'name',sub.name)) as subjects
from students as s
join department as d on s.dept_id=d.id
join dept_sub_allocation as dsa on d.id=dsa.department_id
join subject as sub on dsa.sub_id=sub.id
where dsa.semester=$1
group by s.name,d.dept_name
