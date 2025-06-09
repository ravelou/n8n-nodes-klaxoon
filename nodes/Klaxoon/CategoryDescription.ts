import { type INodeProperties } from 'n8n-workflow';

export const categoryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['category'],
			},
		},
		options: [
			{
				name: 'Create Category',
				value: 'createCategory',
				action: 'Create a new category',
				description: 'Create a new category in a specific board',
				routing: {
					request: {
						method: 'POST',
						url: '=/boards/{{ $parameter["boardId"] }}/categories',
					},
				},
			},
			{
				name: 'Delete Category',
				value: 'deleteCategory',
				action: 'Delete a category',
				description:
					'Delete a specific category from a board by its ID. This action is irreversible.',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/boards/{{ $parameter["boardId"] }}/categories/{{ $parameter["categoryId"] }}',
					},
				},
			},
			{
				name: 'Get Category',
				value: 'getCategory',
				action: 'Get a specific category',
				description: 'Get details of a specific category by its ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/boards/{{ $parameter["boardId"] }}/categories/{{ $parameter["categoryId"] }}',
					},
				},
			},
			{
				name: 'List Categories',
				value: 'listCategories',
				action: 'List all categories',
				description: 'List all categories available in a board',
				routing: {
					request: {
						method: 'GET',
						url: '=/boards/{{ $parameter["boardId"] }}/categories',
					},
				},
			},
			{
				name: 'Update Category',
				value: 'updateCategory',
				action: 'Update a category',
				description: 'Update a specific category in a board by its ID',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/boards/{{ $parameter["boardId"] }}/categories/{{ $parameter["categoryId"] }}',
					},
				},
			},
		],
		default: 'listCategories',
	},
];

export const categoryParameters: INodeProperties[] = [
	{
		displayName: 'Board ID',
		name: 'boardId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['category'],
				operation: [
					'getCategory',
					'listCategories',
					'createCategory',
					'deleteCategory',
					'updateCategory',
				],
			},
		},
		default: '',
		description: 'The ID of the board',
	},
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['category'],
				operation: ['getCategory', 'deleteCategory', 'updateCategory'],
			},
		},
		default: '',
		description: 'The ID of the category to retrieve',
	},
	{
		displayName: 'Category Title',
		name: 'categoryTitle',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['category'],
				operation: ['createCategory'],
			},
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				propertyInDotNotation: true,
				property: 'label',
				value: '={{ $value }}',
			},
		},
		description: 'The ID of the category to retrieve',
	},
	{
		displayName: 'Query Parameters',
		name: 'queryParameters',
		type: 'collection',
		default: {},
		placeholder: 'Add query parameters',
		displayOptions: {
			show: {
				resource: ['category'],
				operation: ['listCategories'],
			},
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				routing: {
					request: {
						qs: {
							page: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Per Page',
				name: 'perPage',
				type: 'number',
				default: 50,
				routing: {
					request: {
						qs: {
							perPage: '={{ $value }}',
						},
					},
				},
			},
		],
	},
	{
		displayName: 'Category Parameters',
		name: 'categoryParameters',
		type: 'collection',
		default: {},
		placeholder: 'Add category parameters',
		displayOptions: {
			show: {
				resource: ['category'],
				operation: ['updateCategory'],
			},
		},
		options: [
			{
				displayName: 'Label of the Category',
				name: 'label',
				// eslint-disable-next-line n8n-nodes-base/node-param-color-type-unused
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						propertyInDotNotation: true,
						property: 'label',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
];
