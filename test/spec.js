const { expect } = require('chai')

describe ('Route', () => {
    describe('GET /', () => {
        it('show information about the api', ()=> {
            expect('hello').to.equal('hello')
        })
    })
})