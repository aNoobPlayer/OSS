import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { poolPromise, sql } from './dbConfig.js';


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// API: Lấy danh sách người dùng
app.get('/api/phongs', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM PHONG where tinhtrang = 'Available'");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// API: Thêm phòng mới
app.post('/api/phongs', async (req, res) => {
  const { loaiphong, tinhtrang, maphong, giaphong, sophong } = req.body;

  // Validate input
  if (!loaiphong || !tinhtrang || !maphong || !giaphong || !sophong) {
    return res.status(400).send('All fields must be filled!');
  }

  try {
    const pool = await poolPromise;
    const query = `INSERT INTO PHONG (loaiphong, tinhtrang, maphong, giaphong, sophong) 
      VALUES ('${loaiphong}', '${tinhtrang}', '${maphong}', ${giaphong}, '${sophong}')`;
    await pool.request().query(query);
    res.status(201).send('Room created successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// API: Cập nhật thông tin phòng
app.put('/api/phongs/:maphong', async (req, res) => {
  const { loaip, tinhtrang, giap, sop } = req.body;
  const { maphong } = req.params;

  try {
    const pool = await poolPromise;
    const query = `
      UPDATE PHONG
      SET loaiphong = @loaip, tinhtrang = @tinhtrang, giaphong = @giap, sophong = @sop
      WHERE maphong = @maphong
    `;
    
    const request = pool.request();
    request.input('loaip', sql.NVarChar, loaip);
    request.input('tinhtrang', sql.NVarChar, tinhtrang);
    request.input('giap', sql.Float, giap);
    request.input('sop', sql.NVarChar, sop);
    request.input('maphong', sql.NVarChar, maphong);
    
    await request.query(query);
    res.status(200).send('Phong updated successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get('/api/khachhang', async (req, res) => {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query('SELECT * FROM KHACHHANG');
      res.json(result.recordset);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  app.post('/api/khachhang', async (req, res) => {
    const { tenkh, yeucau, socccd, sotiendt, ngaylap, maphong, ngaybd, ngaykt, song } = req.body;
    try {
      const pool = await poolPromise;
      const query = `
        INSERT INTO PHIEUTHUE (tenkh, yeucau, socccd, sotiendt, ngaylap, maphong, ngaybd, ngaykt, song)
        VALUES (@tenkh, @yeucau, @socccd, @sotiendt, @ngaylap, @maphong, @ngaybd, @ngaykt, @song)
      `;
      const request = pool.request();
      request.input('tenkh', sql.NVarChar, tenkh);
      request.input('yeucau', sql.NVarChar, yeucau);
      request.input('socccd', sql.Char(12), socccd);
      request.input('sotiendt', sql.Float, sotiendt); 
      request.input('ngaylap', sql.Date, ngaylap);
      request.input('maphong', sql.NVarChar, maphong);
      request.input('ngaybd', sql.Date, ngaybd);
      request.input('ngaykt', sql.Date, ngaykt);
      request.input('song', sql.Int, song);
      
      await request.query(query);
      res.status(201).send('Khachhang created successfully');
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
