

CREATE TABLE IF NOT EXISTS usersTest (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT
    );

INSERT INTO usersTest (name, email) VALUES ('John Doe', 'john.doe@example.com');