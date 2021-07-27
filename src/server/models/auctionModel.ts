const { Pool } = require('pg');
const myURI : string = '';

const URI : string = myURI;

const pool = new Pool({
  connectionString: URI
});


module.exports = {
  query: (text: string, params: string[], callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
  