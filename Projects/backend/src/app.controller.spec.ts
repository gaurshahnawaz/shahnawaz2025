import { AppController } from './app.controller';

describe('AppController', () => {
	let appController: AppController;

	beforeEach(() => {
		appController = new AppController();
	});

	it('should return "Hello World!"', () => {
		expect(appController.getHello()).toBe('Hello World!');
	});
});