import { AuthService } from './auth.service';

describe('AuthService', () => {
	let authService: AuthService;

	beforeEach(() => {
		authService = new AuthService();
	});

	test('should be defined', () => {
		expect(authService).toBeDefined();
	});

	test('should authenticate user with valid credentials', () => {
		const result = authService.authenticate('validUser', 'validPassword');
		expect(result).toBe(true);
	});

	test('should not authenticate user with invalid credentials', () => {
		const result = authService.authenticate('invalidUser', 'invalidPassword');
		expect(result).toBe(false);
	});
});