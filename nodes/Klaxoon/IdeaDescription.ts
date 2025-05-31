import type { INodeProperties } from 'n8n-workflow';

/**
 * OPERATION resource idea
 */
export const ideaOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['idea'],
			},
		},
		options: [
			{
				name: 'List All Board Ideas',
				value: 'listAllBoardIdeas',
				action: 'List all ideas from a board',
				description: 'List all ideas from a specific board',
				routing: {
					request: {
						method: 'GET',
						url: '=/boards/{{ $parameter["boardId"] }}/ideas',
					},
				},
			},
			{
				name: 'Get Board Idea',
				value: 'getBoardIdea',
				action: 'Get the board idea',
				description: 'Get a specific idea from a board',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
			{
				name: 'Update Board Idea',
				value: 'updateBoardIdea',
				action: 'Update the board idea',
				description: 'Update a specific idea from a board',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/boards/parameters.boardId/ideas/{{parameters.ideaId}}',
					},
				},
			},
		],
		default: 'listAllBoardIdeas',
	},
];
/**
 * PARAMETERS resource idea
 */
export const ideaParameters: INodeProperties[] = [
	{
		displayName: 'Board ID',
		name: 'boardId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['listAllBoardIdeas'],
			},
		},
		routing: {
			request: {
				//url: '=/boards/{{$value}}/ideas',
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
