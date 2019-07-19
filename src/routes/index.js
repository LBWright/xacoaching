import { app } from '../server'
import error from '../middleware/error'

// error handler
app.use(error)
