// SQL query to create the table
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS ticker_data (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        last DECIMAL,
        buy DECIMAL,
        sell DECIMAL,
        volume DECIMAL,
        base_unit VARCHAR(10)
    );
`;

module.exports = createTableQuery;