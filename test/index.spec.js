
describe('main', () => {

    it('env check', () => {
        expect(san.version).toBe('3.5.9');
        expect(require('san').version).toBe('3.5.4');
    });

    it('is a function', () => {
        expect(typeof SanFactory).toBe('function');
    });
});

describe('createInsance', () => {
    it('by data option', () => {
        var factory = new SanFactory({
            san: san,
            components: {
                test: {
                    template: '<h4>Hello {{name}}</h4>'
                }
            }
        });

        var instance = factory.createInstance({
            component: 'test',
            options: {
                data: {
                    name: 'San'
                }
            }
        });

        instance.attach(document.body);
        expect(instance.el.innerHTML).toBe('Hello San');

        instance.dispose();
    });
});