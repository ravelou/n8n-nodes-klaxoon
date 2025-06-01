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
				operation: ['getCategory', 'listCategories'],
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
				operation: ['getCategory'],
			},
		},
		default: '',
		description: 'The ID of the category to retrieve',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		displayOptions: {
			show: {
				resource: ['category'],
				operation: ['listCategories'],
			},
		},
		description: 'Page number for pagination',
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
		displayOptions: {
			show: {
				resource: ['category'],
				operation: ['listCategories'],
			},
		},
		description: 'Number of items per page',
		routing: {
			request: {
				qs: {
					perPage: '={{ $value }}',
				},
			},
		},
	},
];
