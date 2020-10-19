INSERT INTO department (name)
VALUES 
    ('Pathology'),
    ('Cytology'),
    ('Hemtopathology'),
    ('Admin');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Pathologist', 99000, 1),
    ('Path Tech', 74000, 1),
    ('Cytologist', 65000, 2),
    ('Cyto Tech', 63000, 2),
    ('Hematopathologist', 97000, 3),
    ('Administrative Assistant', 24000, 4);
    ('Administrative Lead', 30000, 4),
    ('Administrative Supervisor', 65000, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Becca', 'Vikari', 8, NULL),
    ('Rick', 'Farnsworth', 3, NULL),
    ('Jeremy', 'Wallentine', 5, NULL),
    ('Dylan', 'Miller', 1, NULL),
    ('John', 'Doe', 4, NULL),
    ('Juan', 'Perez', 2, 1),
    ('Mario', 'Rossi', 5, 1),
    ('Yamada', 'Taro', 2, NULL),
    ('Jan', 'Jansen', 7, 4),
    ('Petar', 'Petrovic', 3, NULL),
    ('Ivan', 'Ivanov', 1, 6),
    ('Marko', 'Markovic', 6, 6),
    ('Sima', 'Simic', 1, NULL),
    ('Jean', 'Dupont', 6, 6),
    ('Wuming', 'Shi', 3, 10),
