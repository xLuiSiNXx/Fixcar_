const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.db', (err) => {

    if (err) {
        console.log(err.message);
    } else {
        console.log('Base de datos conectada');
    }

});

// CREAR TABLA

db.run(`
    CREATE TABLE IF NOT EXISTS vehiculos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cliente TEXT,
        marca TEXT,
        modelo TEXT,
        anio INTEGER,
        falla TEXT
    )
`);

// GET

app.get('/vehiculos', (req, res) => {

    db.all('SELECT * FROM vehiculos', [], (err, rows) => {

        if (err) {
            res.status(500).json(err);
        } else {
            res.json(rows);
        }

    });

});

// POST

app.post('/vehiculos', (req, res) => {

    const { cliente, marca, modelo, anio, falla } = req.body;

    db.run(
        `INSERT INTO vehiculos (cliente, marca, modelo, anio, falla)
         VALUES (?, ?, ?, ?, ?)`,
        [cliente, marca, modelo, anio, falla],
        function(err) {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    id: this.lastID,
                    cliente,
                    marca,
                    modelo,
                    anio,
                    falla
                });
            }

        }
    );

});

// PUT

app.put('/vehiculos/:id', (req, res) => {

    const { cliente, marca, modelo, anio, falla } = req.body;

    const id = req.params.id;

    db.run(
        `UPDATE vehiculos
         SET cliente = ?, marca = ?, modelo = ?, anio = ?, falla = ?
         WHERE id = ?`,
        [cliente, marca, modelo, anio, falla, id],
        function(err) {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: 'Vehículo actualizado'
                });
            }

        }
    );

});

// DELETE

app.delete('/vehiculos/:id', (req, res) => {

    const id = req.params.id;

    db.run(
        `DELETE FROM vehiculos WHERE id = ?`,
        [id],
        function(err) {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: 'Vehículo eliminado'
                });
            }

        }
    );

});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});