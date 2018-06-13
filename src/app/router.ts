/*!
 * src/app/router.ts
 * This file is part of ontodia-gremlin.
 * Copyright (c) 2018 Evgeny Simonenko <easimonenko@mail.ru>
 * GNU Lesser General Public License v2.1 or later
 */

import * as express from 'express'
import {dataProvider} from './dataProvider'

export const router = express.Router();

router.post('/propertyInfo', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    dataProvider.propertyInfo(req.body.params).then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.get('/classTree', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    dataProvider.classTree().then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.post('/classInfo', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    dataProvider.classInfo(req.body.params).then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.get('/linkTypes', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    dataProvider.linkTypes().then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.post('/linkTypesInfo', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    dataProvider.linkTypesInfo(req.body.params).then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.post('/elementInfo', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const params = Object.assign({rootId: req.body.rootId}, req.body.params);
    dataProvider.elementInfo(params).then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.post('/linksInfo', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const params = Object.assign({rootId: req.body.rootId}, req.body.params);
    dataProvider.linksInfo(params).then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.post('/linkTypesOf', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const params = Object.assign({rootId: req.body.rootId}, req.body.params);
    dataProvider.linkTypesOf(params).then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.post('/linkElements', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const params = Object.assign({rootId: req.body.rootId}, req.body.params);
    dataProvider.linkElements(params).then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.post('/filter', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    dataProvider.filter(req.body.params).then(data => {
        return res.status(200).json(data);
    }).catch(next);
});

router.post('/interestingLinks', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    dataProvider.interestingLinks(req.body.params).then(data => {
        return res.status(200).json(data);
    }).catch(next);
});
