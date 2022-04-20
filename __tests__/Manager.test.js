const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    describe('Intialization', () => {
        it('Should create an object with an id and name', () => {
            const manager = new Manager(123, 'ruth')

            expect(manager.id).toEqual(123);
            expect(manager.name).toEqual('ruth');
        });
    });
});