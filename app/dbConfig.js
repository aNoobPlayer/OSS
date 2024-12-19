import sql from 'mssql'
const config = {
  user: 'Hoteladmin',
  password: 'admin',
  server: 'NONAME',
  database: 'HotelManagement',
  options: {
    encrypt: true, // Sử dụng SSL
    trustServerCertificate: true, // Chỉ cần nếu bạn dùng SQL Server cục bộ
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch((err) => console.log('Database Connection Failed! Error:', err));

export { sql, poolPromise };
