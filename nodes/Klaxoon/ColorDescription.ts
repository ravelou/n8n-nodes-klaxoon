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
				name: 'Create Color',
				value: 'createColor',
				action: 'Create a new color',
				description: 'Create a new color in a specific board',
				routing: {
					request: {
						method: 'POST',
						url: '=/boards/{{ $parameter["boardId"] }}/colors',
					},
				},
			},
			{
				name: 'Delete Color',
				value: 'deleteColor',
				action: 'Delete a color',
				description: 'Delete a specific color from a board by its ID. This action is irreversible.',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/boards/{{ $parameter["boardId"] }}/colors/{{ $parameter["colorId"] }}',
					},
				},
			},
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
			{
				name: 'Update Color',
				value: 'updateColor',
				action: 'Update a color',
				description: 'Update a specific color in a board by its ID',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/boards/{{ $parameter["boardId"] }}/colors/{{ $parameter["colorId"] }}',
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
				operation: ['getColor', 'listColors', 'createColor', 'deleteColor', 'updateColor'],
			},
		},
		default: '',
		description: 'The ID of the board',
	},
	{
		displayName: 'Color ID',
		name: 'colorId',
		// eslint-disable-next-line n8n-nodes-base/node-param-color-type-unused
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['color'],
				operation: ['getColor', 'deleteColor', 'updateColor'],
			},
		},
		default: '',
		description: 'The ID of the color to retrieve',
	},
	{
		displayName: 'Query Parameters',
		name: 'queryParameters',
		type: 'collection',
		default: {},
		placeholder: 'Add query parameters',
		displayOptions: {
			show: {
				resource: ['color'],
				operation: ['listColors'],
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
		displayName: 'Color Parameters',
		name: 'colorParameters',
		type: 'collection',
		default: {},
		placeholder: 'Add color parameters',
		displayOptions: {
			show: {
				resource: ['color'],
				operation: ['createColor', 'updateColor'],
			},
		},
		options: [
			{
				displayName: 'Label of the Color',
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
			{
				displayName: 'Color Code',
				name: 'colorCode',
				type: 'color',
				default: '',
				routing: {
					send: {
						type: 'body',
						propertyInDotNotation: true,
						property: 'value',
						value: '={{ $value }}',
					},
				},
			},
		],
	},
];
