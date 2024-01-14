import express from 'express'
const router = express.Router()
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/userRoutes.js'


const port = process.env.PORT || 5000
const app = express()
app.use('/api/users/',userRoutes)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

// - **POST /api/users** -register a user
// - **POST /api/users/auth** - authenticate a user
// - **POST /api/users/logout** - logout a user and clear cookies
// - **GET /api/users/profile** - get a user profile
// - **PUT /api/users/profile** -update a profile