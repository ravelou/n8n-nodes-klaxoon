import { type INodeProperties } from 'n8n-workflow';

export const colorOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['color'],
			},
		},
		options: [
			{
				name: 'Get Color',
				value: 'getColor',
				action: 'Get a specific color',
				description: 'Get details of a specific color by its ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/boards/{{ $parameter["boardId"] }}/colors/{{ $parameter["colorId"] }}',
					},
				},
			},
			{
				name: 'List Colors',
				value: 'listColors',
				action: 'List all colors',
				description: 'List all colors available in a board',
				routing: {
					request: {
						method: 'GET',
						url: '=/boards/{{ $parameter["boardId"] }}/colors',
					},
				},
			},
		],
		default: 'listColors',
	},
];

export const colorParameters: INodeProperties[] = [
	{
		displayName: 'Board ID',
		name: 'boardId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['color'],
				operation: ['getColor', 'listColors'],
			},
		},
		default: '',
		description: 'The ID of the board',
	},
	{
		displayName: 'Color ID',
		name: 'colorId',
		type: 'color',
		required: true,
		displayOptions: {
			show: {
				resource: ['color'],
				operation: ['getColor'],
			},
		},
		default: '',
		description: 'The ID of the color to retrieve',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		displayOptions: {
			show: {
				resource: ['color'],
				operation: ['listColors'],
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
				resource: ['color'],
				operation: ['listColors'],
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
