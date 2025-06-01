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
				name: 'Delete Board Idea',
				value: 'deleteBoardIdea',
				action: 'Delete the board idea',
				description: 'Delete a specific idea from a board',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/boards/$parameters["boardId"]/ideas/{{$parameters["ideaId"]}}',
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
						url: '=/boards/{{ $parameter["boardId"] }}/ideas/{{ $parameter["ideaId"] }}',
					},
				},
			},
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
				operation: [
					'getBoardIdea',
					'updateBoardIdea',
					'deleteBoardIdea',
					'listAllBoardIdeas',
					//'createBoardIdea',
				],
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
		displayName: 'Idea ID',
		name: 'ideaId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['getBoardIdea', 'updateBoardIdea', 'deleteBoardIdea'],
			},
		},
		routing: {
			request: {
				//url: '=/boards/{{$value}}/ideas',
			},
		},
		default: '',
		required: true,
		description: 'The ID code of the idea',
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
				displayOptions: {
					show: {
						resource: ['idea'],
						operation: ['listAllBoardIdeas'],
					},
				},
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
				displayOptions: {
					show: {
						resource: ['idea'],
						operation: ['listAllBoardIdeas'],
					},
				},
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
	{
		displayName: 'Position Parameters',
		name: 'positionParameters',
		type: 'collection',
		default: {},
		placeholder: 'Add position parameters',
		options: [
			{
				displayName: 'Position Parameters',
				name: 'positionParameters',
				type: 'collection',
				default: {},
				placeholder: 'Add position parameters',
				options: [
					{
						displayName: 'Category Idea',
						name: 'category_id',
						type: 'string',
						default: '',
						placeholder: 'Category of the idea',
					},
					{
						displayName: 'Color Idea',
						name: 'color_id',
						// eslint-disable-next-line n8n-nodes-base/node-param-color-type-unused
						type: 'string',
						default: '',
						placeholder: 'color ID of the idea',
					},
					{
						displayName: 'Content Idea',
						name: 'content',
						type: 'string',
						default: '',
						placeholder: 'Content of the idea',
					},
					{
						displayName: 'X Position',
						name: 'xPosition',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'Y Position',
						name: 'yPosition',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'Z Position',
						name: 'zPosition',
						type: 'number',
						default: 1,
					},
				],
			},
		],
	},
];
