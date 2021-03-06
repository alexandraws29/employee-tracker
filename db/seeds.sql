INSERT INTO department (name)
VALUES 
    ('Pathology'),
    ('Cytology'),
    ('Hematopathology'),
    ('Admin');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Pathologist', 100000, 1),
    ('Path Tech', 65000, 1),
    ('Cytologist', 120000, 2),
    ('Cyto Tech', 60000, 2),
    ('Hematopathologist', 110000, 3),
    ('Administrative Assistant', 50000, 4),
    ('Administrative Lead', 60000, 4),
    ('Administrative Supervisor', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Becca', 'Vikari', 8, NULL),
    ('Rick', 'Farnsworth', 3, NULL),
    ('Jeremy', 'Wallentine', 5, NULL),
    ('Dylan', 'Miller', 1, NULL),
    ('John', 'Doe', 4, 1),
    ('Juan', 'Perez', 2, 2),
    ('Mario', 'Rossi', 5, 3),
    ('Yamada', 'Taro', 2, 4),
    ('Jan', 'Jansen', 7, 3),
    ('Petar', 'Petrovic', 3, 1),
    ('Ivan', 'Ivanov', 1, 4),
    ('Marko', 'Markovic', 6, 2),
    ('Sima', 'Simic', 1, 2),
    ('Jean', 'Dupont', 6, 1),
    ('Wuming', 'Shi', 3, 3);
