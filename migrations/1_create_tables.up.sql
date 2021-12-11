CREATE TABLE users (
    id UUID PRIMARY KEY,
    email TEXT NOT NULL
);


CREATE TABLE incomes (
    id UUID PRIMARY KEY,
    title TEXT NOT NULL,
    amount REAL NOT NULL,
    payment_type TEXT NOT NULL,
    category TEXT NOT NULL,
    notes TEXT,
    created INTEGER NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE expenses (
    id UUID PRIMARY KEY,
    title TEXT NOT NULL,
    amount REAL NOT NULL,
    payment_type TEXT NOT NULL,
    category TEXT NOT NULL,
    notes TEXT,
    created INTEGER NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE
);