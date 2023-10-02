import Bun from 'bun'
import express from 'express'

import apiRoutes from 'routes/apiRoutes'

const port = Bun.env.PORT ?? 8080
const app = express()

app.use('/api', apiRoutes)

app.get('/', (req, res) => res.send('Hellos service de hospedagem de fotos!'))

app.listen(port, () => { console.log('listening on port', port) })
