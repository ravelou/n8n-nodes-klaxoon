import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { boardOperations, boardParameters } from './BoardDescription';
import { ideaOperations, ideaParameters } from './IdeaDescription';
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
				name: 'klaxoonOAuth2Api',
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
			/**
			 * RESOURCE
			 */
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
			...boardOperations,
			...boardParameters,
			...ideaOperations,
			...ideaParameters,
		],
	};
}
