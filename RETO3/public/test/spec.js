const Funcion = require('../js/index.js');

describe("Mis tests buscar datos", function() {
    let funcion; 

    beforeEach(function(){
        funcion = new Funcion;
    });

    it("Debería coger lat y long", function() {
        expect(funcion.buscarDatos(1)).toBe(true);
    });
    it("Debería coger lat y long", function() {
        expect(funcion.buscarDatos(NaN)).toBe(false);
    });
    it("Debería coger lat y long", function() {
        expect(funcion.buscarDatos('a')).toBe(false);
    });
    it("Debería coger lat y long", function() {
        expect(funcion.buscarDatos()).toBe(false);
    });
    it("Debería coger lat y long", function() {
        expect(funcion.buscarDatos(undefined)).toBe(false);
    });

});

