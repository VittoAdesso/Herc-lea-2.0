//test grouping
describe('Server', () =>{
    // to initialize the server and test 
    var server;
    beforeAll(() =>{
        server = require('../server');
    }); 
    afterAll(() =>{
        server.close();
    });

    //now i write what i want
    describe("GET /", () =>{
        var data = {}; 
        beforeAll((done) =>{
            Request.get("http://localhost:4000/", (err, res, body) =>{
                data.status =res.statusCode;
                data.body = body;
                done();
            });
        });
        //every test i run into it 
        it("Status 200 OK", () =>{
            //toBE (what i expected)
            expect(data.status).toBe(200);
        }); 
    })
});  
