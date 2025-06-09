import { type INodeProperties } from 'n8n-workflow';

export const dimensionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['dimension'],
			},
		},
		options: [
			{
				name: 'Create Dimension',
				value: 'createDimension',
				action: 'Create a new dimension',
				description: 'Create a new dimension in a specific board',
				routing: {
					request: {
						method: 'POST',
						url: '=/boards/{{ $parameter["boardId"] }}/dimensions',
					},
				},
			},
			{
				name: 'Delete Dimension',
				value: 'deleteDimension',
				action: 'Delete a dimension',
				description:
					'Delete a specific dimension from a board by its ID. This action is irreversible.',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/boards/{{ $parameter["boardId"] }}/dimensions/{{ $parameter["dimensionId"] }}',
					},
				},
			},
			{
				name: 'Get Dimension',
				value: 'getDimension',
				action: 'Get a specific dimension',
				description: 'Get details of a specific dimension by its ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/boards/{{ $parameter["boardId"] }}/dimensions/{{ $parameter["dimensionId"] }}',
					},
				},
			},
			{
				name: 'List Dimensions',
				value: 'listDimensions',
				action: 'List all dimensions',
				description: 'List all dimensions available in a board',
				routing: {
					request: {
						method: 'GET',
						url: '=/boards/{{ $parameter["boardId"] }}/dimensions',
					},
				},
			},
			{
				name: 'Update Dimension',
				value: 'updateDimension',
				action: 'Update an existing dimension',
				description: 'Update details of an existing dimension by its ID',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/boards/{{ $parameter["boardId"] }}/dimensions/{{ $parameter["dimensionId"] }}',
					},
				},
			},
		],
		default: 'listDimensions',
	},
];

export const dimensionParameters: INodeProperties[] = [
	{
		displayName: 'Board ID',
		name: 'boardId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['dimension'],
				operation: [
					'createDimension',
					'listDimensions',
					'getDimension',
					'deleteDimension',
					'updateDimension',
				],
			},
		},
		default: '',
		description: 'The ID of the board where the dimension will be created',
	},
	{
		displayName: 'Label',
		name: 'label',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['dimension'],
				operation: ['createDimension'],
			},
		},
		default: '',
		description: 'The label of the new dimension',
		routing: {
			send: {
				type: 'body',
				property: 'label',
				value: '={{ $value }}',
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
				resource: ['dimension'],
				operation: ['listDimensions'],
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
				resource: ['dimension'],
				operation: ['listDimensions'],
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
	{
		displayName: 'Dimension ID',
		name: 'dimensionId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['dimension'],
				operation: ['getDimension', 'deleteDimension', 'updateDimension'],
			},
		},
		default: '',
		description: 'The ID of the dimension to retrieve',
	},
	// ...existing code...
];
// ...existing code...];
