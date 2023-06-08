module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'eslint:recommended',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': ['error', 'windows'],
		quotes: ['warn', 'single'],
		semi: ['error', 'always'],
		'no-unused-vars': ['warn'],
	},
};
