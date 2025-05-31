import {
	IExecuteFunctions,
	IHttpRequestOptions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
} from 'n8n-workflow';

export class Klaxoon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Klaxoon',
		name: 'Klaxoon',
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
				name: 'KlaxoonBoardsOAuth2Api',
				required: true,
				testedBy: 'oauth2Test',
			},
		],
		properties: [
			{
				displayName: 'Access Code',
				name: 'accessCode',
				type: 'string',
				default: '',
				required: true,
				description: 'The access code for the board',
			},
		],
	};

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
	}
}
