/*!
 * src/app/dataProvider.ts
 * This file is part of ontodia-gremlin.
 * Copyright (c) 2018 Evgeny Simonenko <easimonenko@mail.ru>
 * GNU Lesser General Public License v2.1 or later
 */

import * as ontodia from 'ontodia'

class GremlinDataProvider implements ontodia.DataProvider {
    private id: ontodia.ElementIri;

    constructor(id: ontodia.ElementIri) {
        this.id = id;
    }

    classInfo(params: {classIds: ontodia.ClassIri[]}): Promise<ontodia.ClassModel[]> {
        return null as Promise<any>;
    }

    classTree(): Promise<ontodia.ClassModel[]> {
        return null as Promise<any>;
    }

    elementInfo(params: {elementIds: ontodia.ElementIri[]}): Promise<ontodia.Dictionary<ontodia.ElementModel>> {
        return null as Promise<any>;
    }

    filter(params: ontodia.FilterParams): Promise<ontodia.Dictionary<ontodia.ElementModel>> {
        return null as Promise<any>;
    }

    interestingLinks(params: {elementIds: ontodia.ElementIri[]}): Promise<ontodia.LinkModel[]> {
        return null as Promise<any>;
    }

    linkElements(params: { elementId: ontodia.ElementIri, linkId: ontodia.LinkTypeIri, limit: number, offset: number, direction?: 'in' | 'out' })
        : Promise<ontodia.Dictionary<ontodia.ElementModel>> {
        return null as Promise<any>;
    }

    linkTypes(): Promise<ontodia.LinkType[]> {
        return null as Promise<any>;
    }

    linkTypesInfo(params: {linkTypeIds: ontodia.LinkTypeIri[]}): Promise<ontodia.LinkType[]> {
        return null as Promise<any>;
    }

    linkTypesOf(params: {elementId: ontodia.ElementIri;}): Promise<ontodia.LinkCount[]> {
        return null as Promise<any>;
    }

    linksInfo(params: {elementIds: ontodia.ElementIri[]; linkTypeIds: ontodia.LinkTypeIri[]}): Promise<ontodia.LinkModel[]> {
        return null as Promise<any>;
    }

    propertyInfo(params: { propertyIds: ontodia.PropertyTypeIri[] }) : Promise<ontodia.Dictionary<ontodia.PropertyModel>> {
        return null as Promise<any>;
    }
}

export const dataProvider = new GremlinDataProvider()
