const { Pool } = require('pg');
const myURI : string = '';

const URI : string = myURI;

const pool = new Pool({
  connectionString: URI
});

export const database = {
  query: (text: string, params: string[], callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

export function query(searchQuery: string, params?: any[], calllback?: any) {
  throw new Error('Function not implemented.');
}
  