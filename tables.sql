CREATE TABLE department(
    Dept_name VARCHAR(150),
    id SERIAL PRIMARY KEY,
    course_duration INT,
    duration_type VARCHAR(50)
);
CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    year INT ,
    start_year INT,
    end_year INT,
    dept_id INT,
    email VARCHAR(100),
    phone VARCHAR(12),
    address VARCHAR(300),
    CONSTRAINT fk
    FOREIGN KEY (dept_id) REFERENCES department(id)
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
    FOREIGN KEY (dept_id) REFERENCES department(id)
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
    total_mark INT,
    obtained_mark INT,
    status VARCHAR(4),
    CONSTRAINT fk
    FOREIGN KEY(sub_id) REFERENCES exam(sub_id),
    FOREIGN KEY(student_id) REFERENCES students(id)
);
CREATE TABLE subject(
    sub_id PRIMARY KEY,
    sub_name VARCHAR(100),
    type VARCHAR(50)
);
CREATE TABLE dept_sub_allocation(
    id SERIAL,
    department_id INT,
    semester INT,
    year INT,
    sub_id INT,
    FOREIGN KEY(sub_id) REFERENCES exam(sub_id),
    FOREIGN KEY(department_id) REFERENCES department(id)
);