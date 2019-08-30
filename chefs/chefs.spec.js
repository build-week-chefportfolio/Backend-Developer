const request = require('supertest')
const db = require('../data/dbConfig')
const server = require('../api/server')

describe('test chefs', () => {

    const chefs = {
        id: 2,
        FirstNameLastName: "Sascha Miller"

    }

    describe('get chefs', () => {
        it('id', () => {
            expect(chefs).toHaveProperty("id")
        })
        it('FirstNameLastName', () => {
            expect(chefs).toHaveProperty("FirstNameLastName")
        })
    })
})