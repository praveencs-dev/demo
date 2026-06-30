CREATE TABLE department(
    Dept_name VARCHAR(150),
    id SERIAL PRIMARY KEY,
    course_duration INT,
    duration_type VARCHAR(50)
);
CREATE TABLE student(
    s_no  SERIAL,
    id VARCHAR(20),
    name VARCHAR(100),
    year INT ,
    start_year INT,
    end_year INT,
    dept_id INT,
    dob DATE,
    email VARCHAR(100),
    phone VARCHAR(12),
    address VARCHAR(300),
    CONSTRAINT fk
    FOREIGN KEY (dept_id) REFERENCES department(id),
    UNIQUE (email,phone)
);
CREATE TABLE staffs(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    role VARCHAR(50),
    dept_id INT,
    year_of_hire INT,
    email VARCHAR(100),
    phone VARCHAR(12),
    address VARCHAR(300),
    experience_in_year INT
    CONSTRAINT fk
    FOREIGN KEY (dept_id) REFERENCES department(id),
    
);
CREATE TABLE exam(
    sub_id INT,
    exam_date DATE,
    CONSTRAINT fk
    FOREIGN KEY (sub_id) REFERENCES subject(sub_id)
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
    sub_id SERIAL PRIMARY KEY,
    sub_name VARCHAR(100),
    sub_semester  INT,
    type VARCHAR(50)
);
CREATE TABLE dept_sub_allocation(
    allotment_id SERIAL PRIMARY KEY,
    sub_id INT,
    department_id INT,
    staff_id INT,
    semester INT,
    year INT,
    FOREIGN KEY(sub_id) REFERENCES subject(sub_id),
    FOREIGN KEY(department_id) REFERENCES department(id),
    FOREIGN KEY(staff_id) REFERENCES staffs(id)
);
CREATE FUNCTION studid()
RETURNs TRIGGER
AS $$
BEGIN
UPDATE students SET id=NEW.start_year ||'00'||NEW.dept_id || (5000 + NEW.s_no) WHERE email=NEW.email;
RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER studid
AFTER INSERT 
ON students
FOR EACH ROW
EXECUTE FUNCTION studid();