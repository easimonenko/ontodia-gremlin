#!/usr/bin/node

/*!
 * src/server.ts
 * This file is part of ontodia-gremlin.
 * Copyright (c) 2018 Evgeny Simonenko <easimonenko@mail.ru>
 * GNU Lesser General Public License v2.1 or later
 */

import app from './app'

const PORT = parseInt(process.env.PORT) | 3000

app.listen(PORT, () => {
    console.log("Server for support Gremlin in Ontodia started and listening on port " + PORT)
})
