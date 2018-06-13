/*!
 * src/app/index.ts
 * This file is part of ontodia-gremlin.
 * Copyright (c) 2018 Evgeny Simonenko <easimonenko@mail.ru>
 * GNU Lesser General Public License v2.1 or later
 */

import express from 'express'
import {router} from './router'

const app = express()
app.use(app.router)
app.use('/', router)

export default app
