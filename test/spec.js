const { expect } = require('chai')
const { syncAndSeed } = require('../db')

const app = require('supertest')(require('../app'))

describe ('Routes', () => {
    beforeEach(()=>syncAndSeed())
    describe('GET /', () => {
        it('show information about the api', async ()=> {
            const response = await app.get('/')
            expect(response.status).to.equal(200)
            expect(response.text).to.include('The Acme Movie API')
        })
    })
    describe('GET /api', () => {
        it('show information about the api', async ()=> {
            const response = await app.get('/')
            expect(response.status).to.equal(200)
            expect(response.text).to.include('The Acme Movie API')
        })
    })

})