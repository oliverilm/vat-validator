module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parser: 'babel-eslint',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'jsdoc'],
	extends: [
		'airbnb',
		'prettier',
		'prettier/react',
		'plugin:jsdoc/recommended',
	],
	rules: {
		'jsdoc/require-description': 1,
		'jsdoc/require-description-complete-sentence': 1,
		'jsdoc/require-jsdoc': [
			'warn',
			{
				require: {
					ArrowFunctionExpression: true,
					ClassExpression: true,
					FunctionExpression: true,
					MethodDefinition: true,
				},
				exemptEmptyFunctions: true,
			},
		],
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'prefer-arrow-callback': ['error'],
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
		'react/prop-types': 0,
		camelcase: [0, { properties: 'never' }],
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				components: ['Label'],
				required: {
					some: ['nesting', 'id'],
				},
				allowChildren: false,
			},
		],
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always-and-inside-groups',
			},
		],
		'no-alert': 0,
	},
};
