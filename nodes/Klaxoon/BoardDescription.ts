import { INodeProperties } from 'n8n-workflow';
/**
 * OPERATION
 */
export const boardOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['board'],
			},
		},
		options: [
			{
				name: 'Get by Access Code',
				value: 'getByAccessCode',
				action: 'Get the board information by access code',
				description: 'Get all the information from a board by its access code',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
			{
				name: 'Get by ID',
				value: 'getById',
				action: 'Get the board information by ID',
				description: 'Get all the information from a board by its ID',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
			{
				name: 'List All Boards',
				value: 'listAllBoards',
				action: 'List all boards',
				description: 'List all user boards',
				routing: {
					request: {
						method: 'GET',
						url: '=/boards',
					},
				},
			},
		],
		default: 'getByAccessCode',
	},
];
/**
 * PARAMETERS
 */
export const boardParameters: INodeProperties[] = [
	{
		displayName: 'Access Code',
		name: 'accessCode',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['board'],
				operation: ['getByAccessCode'],
			},
		},
		routing: {
			request: {
				url: '=/boards/by-access-code/{{$value}}',
			},
		},
		default: '',
		required: true,
		description: 'The access code for the board',
	},
	{
		displayName: 'Board ID',
		name: 'boardId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['board'],
				operation: ['getById'],
			},
		},
		routing: {
			request: {
				url: '=/boards/{{$value}}',
			},
		},
		default: '',
		required: true,
		description: 'The ID code of the board',
	},

	{
		displayName: 'Query Parameters',
		name: 'queryParameters',
		type: 'collection',
		default: {},
		placeholder: 'Add query parameters',
		displayOptions: {
			show: {
				resource: ['board'],
				operation: ['listAllBoards'],
			},
		},
		options: [
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
		],
	},
];
