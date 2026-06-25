CREATE TABLE department(
    Dept_name VARCHAR(150),
    id SERIAL PRIMARY KEY,
    hod_name VARCHAR(100)
);
CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    year INT ,
    department_id INT,
    email VARCHAR(100),
    phone VARCHAR(12),
    address VARCHAR(300),
    CONSTRAINT fk
    FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE staff(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    email VARCHAR(100),
    phone VARCHAR(12),
    address VARCHAR(300),
    CONSTRAINT fk
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE exam(
    sub_id SERIAL PRIMARY KEY,
    sub_name VARCHAR(100),
    exam_date DATE,
    sub_staff_id INT,
    CONSTRAINT fk
    FOREIGN KEY (sub_staff_id) REFERENCES staff(id)
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
