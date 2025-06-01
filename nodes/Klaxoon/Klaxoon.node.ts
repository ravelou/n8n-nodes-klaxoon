import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { boardOperations, boardParameters } from './BoardDescription';
import { categoryOperations, categoryParameters } from './CategoryDescription';
import { colorOperations, colorParameters } from './ColorDescription';
import { dimensionOperations, dimensionParameters } from './DimensionDescription'; // Duplicate to ensure all operations are included
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
						name: 'Category',
						value: 'category',
						description: 'Get info from a category',
					},
					{
						name: 'Color',
						value: 'color',
						description: 'Get info from a color',
					},
					{
						name: 'Dimension',
						value: 'dimension',
						description: 'Get info from a dimension',
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
			...dimensionOperations, // Duplicate to ensure all operations are included
			...dimensionParameters,
			...colorOperations,
			...colorParameters,
			...categoryOperations,
			...categoryParameters, // Duplicate to ensure all parameters are included
		],
	};
}
