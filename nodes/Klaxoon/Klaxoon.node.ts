import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Klaxoon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Klaxoon',
		name: 'klaxoon',
		icon: 'file:../klaxoon.svg', // Place un SVG optionnel ici
		group: ['transform'],
		version: 1,
		description: 'Get a Klaxoon board using an Access Code',
		defaults: {
			name: 'Klaxoon',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'KlaxoonOAuth2Api',
				required: true,
				testedBy: 'oauth2Test',
			},
		],
		requestDefaults: {
			baseURL: 'https://api.klaxoon.com/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Data to Fetch',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Board',
						value: 'board',
						description: 'Get klaxoon info',
					},
					{
						name: 'Idea',
						value: 'idea',
						description: 'Get info from an idea',
					},
				],
				default: 'board',
				description: 'Get type of resource to fetch',
			},

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
								url: '/boards/{{$value}}',
							},
						},
					},
				],
				default: 'getByAccessCode',
			},
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
			/*{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['marsRoverPhotos'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get mars rover photos',
						description: 'Get photos from the Mars Rover',
						routing: {
							request: {
								method: 'GET',
							},
						},
					},
				],
				default: 'get',
			},
			{
				displayName: 'Rover Name',
				description: 'Choose which Mars Rover to get a photo from',
				required: true,
				name: 'roverName',
				type: 'options',
				options: [
					{ name: 'Curiosity', value: 'curiosity' },
					{ name: 'Opportunity', value: 'opportunity' },
					{ name: 'Perseverance', value: 'perseverance' },
					{ name: 'Spirit', value: 'spirit' },
				],
				routing: {
					request: {
						url: '=/mars-photos/api/v1/rovers/{{$value}}/photos',
					},
				},
				default: 'curiosity',
				displayOptions: {
					show: {
						resource: ['marsRoverPhotos'],
					},
				},
			},
			{
				displayName: 'Date',
				description: 'Earth date',
				required: true,
				name: 'marsRoverDate',
				type: 'dateTime',
				default: '',
				displayOptions: {
					show: {
						resource: ['marsRoverPhotos'],
					},
				},
				routing: {
					request: {
						// You've already set up the URL. qs appends the value of the field as a query string
						qs: {
							earth_date: '={{ new Date($value).toISOString().substr(0,10) }}',
						},
					},
				},
			},*/
			// Optional/additional fields will go here
		],
	};
	/**
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const accessCode = this.getNodeParameter('accessCode', i) as string;

			// Utilise la méthode standard d’auth n8n (ajoute automatiquement l’header d’auth).
			const options: IHttpRequestOptions = {
				method: 'GET',
				url: `https://api.klaxoon.com/v1/boards/by-access-code/${accessCode}`,
				// Tu peux ajouter headers, queryString, body, etc. si besoin
			};

			const responseData = await this.helpers.httpRequestWithAuthentication.call(
				this,
				'KlaxoonBoardsOAuth2Api',
				options,
			);

			returnData.push({
				json: responseData,
			});
		}

		return [returnData];
	}*/
}
