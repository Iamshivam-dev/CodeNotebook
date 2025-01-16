const express = require('express');

const app = express();

const pg = require('pg');

// Connect to postgres database


const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect().then(()=>{
    console.log("Connect to database successfully")
}).catch(err=>{
    console.error("Failed to connect to database: ", err)
});;

// Middleware to parse JSON request bodies

app.use(express.json());



// add testing route

app.get('/test', (req, res) => {

  res.json({ message: 'This is a test route' });

});

app.post('/submit', async (req, res) => {
    try {
        const checkEmailExists = await client.query('SELECT * FROM users WHERE email = $1',[req.body.email])
        if(checkEmailExists.rows.length > 0){
            return res.status(400).json({ message: 'Email already exists', data: null });
        }
        const isInserted = await client.query("INSERT INTO users(name, email) VALUES($1, $2) RETURNING *", [req.body.name,req.body.email])
        res.status(200).json({ message: 'Form submitted successfully', data:  isInserted.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting', data: error });
        
    }
})

// start express server

app.listen(process.env.PORT, () => {

  console.log('Server listening on port ' + process.env.PORT);

});