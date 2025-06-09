import { type INodeProperties } from 'n8n-workflow';

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
				name: 'Create an Ideas',
				value: 'createIdea',
				action: 'Create an idea',
				description: 'Create a new idea in a specific board',
				routing: {
					request: {
						method: 'POST',
						url: '=/boards/{{ $parameter["boardId"] }}/ideas',
					},
				},
			},
			{
				name: 'List Board Ideas',
				value: 'listBoardIdeas',
				action: 'List ideas from a board',
				description: 'List ideas from a specific board',
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
						url: '=/boards/{{ $parameter.boardId }}/ideas/{{ $parameter.ideaId }}',
					},
				},
			},
		],
		default: 'listBoardIdeas',
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
				operation: ['listBoardIdeas', 'createIdea', 'updateBoardIdea'],
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
				operation: ['updateBoardIdea'],
			},
		},
		default: '',
		required: true,
		description: 'The ID code of the idea',
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		placeholder: 'Text of an idea',
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['createIdea'],
			},
		},
		routing: {
			send: {
				type: 'body',
				propertyInDotNotation: true,
				property: 'data.content',
				value: '={{ $value }}',
			},
		},
		default: '',
		description: 'The content of the idea',
	},
	{
		displayName: 'X',
		name: 'x',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['createIdea', 'updateBoardIdea'],
			},
		},
		routing: {
			send: {
				type: 'body',
				propertyInDotNotation: true,
				property: 'position.x',
				value: '={{ $value }}',
			},
		},
		default: 0,
		description: 'The x coordinate of the idea position',
	},
	{
		displayName: 'Y',
		name: 'y',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['createIdea', 'updateBoardIdea'],
			},
		},
		routing: {
			send: {
				type: 'body',
				propertyInDotNotation: true,
				property: 'position.y',
				value: '={{ $value}}',
			},
		},
		default: 0,
		description: 'The y coordinate of the idea position',
	},
	{
		displayName: 'Z',
		name: 'z',
		placeholder: '1',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['createIdea', 'updateBoardIdea'],
			},
		},
		routing: {
			send: {
				type: 'body',
				propertyInDotNotation: true,
				property: 'position.z',
				value: '={{ $value }}',
			},
		},
		default: 1,
		description: 'The z coordinate of the idea position',
	},
	{
		displayName: 'Idea Parameters',
		name: 'ideaParameters',
		type: 'collection',
		default: {},
		placeholder: 'Add idea parameters',
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['createIdea', 'updateBoardIdea'],
			},
		},
		options: [
			{
				displayName: 'Color ID',
				name: 'colorId',
				// eslint-disable-next-line n8n-nodes-base/node-param-color-type-unused
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						propertyInDotNotation: true,
						property: 'data.color.id',
						value: '={{ $value }}',
					},
				},
			},
			{
				displayName: 'Category ID',
				name: 'categoryId',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						propertyInDotNotation: true,
						property: 'data.category.id',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Dimensions',
		name: 'dimensions',
		type: 'fixedCollection',
		placeholder: 'Add Dimension',
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['createIdea', 'updateBoardIdea'],
			},
		},
		default: {},
		options: [
			{
				name: 'dimensionArray',
				displayName: 'Dimension',
				values: [
					{
						displayName: 'Dimension ID',
						name: 'id',
						type: 'string',
						placeholder: 'The dimension ID',
						default: '',
					},
					{
						displayName: 'Dimension Value',
						name: 'value',
						type: 'string',
						placeholder: 'The dimension Value',
						default: '',
					},
				],
			},
		],
		typeOptions: {
			multipleValues: true,
			inputFieldMaxLength: 3,
		},
		routing: {
			send: {
				type: 'body',
				property: 'data.dimensions',
				value: '={{ $value.dimensionArray.map((item) => ({ id: item.id, value: item.value })) }}',
			},
		},
	},

	{
		displayName: 'Query Parameters',
		name: 'queryParameters',
		type: 'collection',
		default: {},
		placeholder: 'Add query parameters',
		displayOptions: {
			show: {
				resource: ['idea'],
				operation: ['listBoardIdeas'],
			},
		},
		options: [
			{
				displayName: 'Author ID',
				name: 'authorId',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							authorId: '={{ $value }}',
						},
					},
				},
				placeholder: 'Array of author ID',
				description: 'Filter ideas by author ID',
			},
			{
				displayName: 'Category ID',
				name: 'categoryId',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							authorId: '={{ $value }}',
						},
					},
				},
				placeholder: 'Array of category ID',
				description: 'Filter ideas by category ID',
			},
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				placeholder: 'Text of an idea',
				routing: {
					request: {
						qs: {
							content: '={{ $value }}',
						},
					},
				},
				default: '',
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
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				placeholder: 'Array of sorting ([-,+]createdAt, [-,+]updatedAt)',
				default: '',
				routing: {
					request: {
						qs: {
							sort: '={{ $value }}',
						},
					},
				},
			},
		],
	},
];
