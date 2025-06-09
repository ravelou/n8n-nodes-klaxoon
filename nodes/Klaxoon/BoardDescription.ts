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
				name: 'Create Board',
				value: 'createBoard',
				action: 'Create a new board',
				description: 'Create a new board with the provided details',
				routing: {
					request: {
						method: 'POST',
						url: '=/boards',
					},
				},
			},
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
		displayName: 'Title of the Board',
		name: 'title',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['board'],
				operation: ['createBoard'],
			},
		},
		routing: {
			send: {
				property: 'title',
				type: 'body',
				value: '={{ $value }}',
			},
		},
		default: '',
		required: true,
		description: 'The title of the board to be created',
	},
	{
		displayName: 'Description of the Board',
		name: 'description',
		type: 'string',
		placeholder: 'Description of the board',
		displayOptions: {
			show: {
				resource: ['board'],
				operation: ['createBoard'],
			},
		},
		routing: {
			send: {
				property: 'description',
				type: 'body',
				value: '={{ $value }}',
			},
		},
		default: '',
		description: 'The title of the board to be created',
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
