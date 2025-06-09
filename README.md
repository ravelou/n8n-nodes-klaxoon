# n8n-klaxoon-api-mapper

This is an n8n workflow template. It lets you use Klaxoon Boards API in your n8n workflows.

Klaxoon is a collaborative platform that provides digital workshops and board tools for teams to brainstorm, organize ideas, and collaborate remotely. This workflow mapper provides comprehensive access to the Klaxoon Boards API for managing boards, ideas, and categories.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  
[Configuration](#configuration)

## Installation

1. Import the workflow JSON into your n8n instance
2. Follow the [OAuth2 setup guide](https://docs.n8n.io/integrations/builtin/credentials/oauth2/) for configuring Klaxoon credentials
3. Configure your Klaxoon OAuth2 application credentials

## Operations

This workflow template supports all major Klaxoon Boards API operations:

### Boards

- **List Boards** - Retrieve a paginated list of boards
- **Get Board by Access Code** - Retrieve a specific board using its access code

### Ideas

- **List Board Ideas** - Get all ideas from a specific board (paginated)
- **Create Board Idea** - Add a new idea to a board
- **Get Board Idea** - Retrieve a specific idea by ID
- **Update Board Idea** - Modify an existing idea's content, category, color, etc.
- **Delete Board Idea** - Remove an idea from a board

### Categories

- **List Board Categories** - Get all categories for a specific board
- **Create Board Category** - Add a new category to a board
- **Get Board Category** - Retrieve a specific category by ID
- **Update Board Category** - Modify an existing category's label
- **Delete Board Category** - Remove a category from a board

## Credentials

You need to authenticate with Klaxoon using OAuth2. Prerequisites include:

1. **Klaxoon Developer Account**: Sign up at [Klaxoon Developer Portal](https://developers.klaxoon.com)
2. **Create OAuth2 Application**: Register your application to get Client ID and Client Secret
3. **Required Scopes**:
   - `board:read` - For reading boards, ideas, and categories
   - `board:write` - For creating, updating, and deleting content

### OAuth2 Setup in n8n:

1. Create new OAuth2 Generic credentials
2. **Authorization URL**: `https://app.klaxoon.com/oauth/authorize`
3. **Access Token URL**: `https://app.klaxoon.com/oauth/token`
4. **Client ID**: Your Klaxoon app client ID
5. **Client Secret**: Your Klaxoon app client secret
6. **Scope**: `board:read board:write`

## Compatibility

- **Minimum n8n version**: 1.0.0
- **Tested with**: n8n 1.19.4+
- **API Version**: Klaxoon Boards API v1

## Usage

### Basic Configuration

1. **Set Operation Parameters**: Modify the "Set Operation Parameters" node to specify:
   - `operation`: The API operation you want to perform
   - `boardId`: Board identifier (when required)
   - `accessCode`: Board access code (for access code operations)
   - `ideaId`: Idea identifier (for idea-specific operations)
   - `categoryId`: Category identifier (for category operations)
   - `page` and `perPage`: Pagination parameters

### Available Operations

Change the `operation` parameter to one of these values:

- `listBoards`
- `getBoardByAccessCode`
- `listBoardIdeas`
- `createBoardIdea`
- `getBoardIdea`
- `updateBoardIdea`
- `deleteBoardIdea`
- `listBoardCategories`
- `createBoardCategory`
- `getBoardCategory`
- `updateBoardCategory`
- `deleteBoardCategory`

### Example Usage

To list all boards:

```json
{
	"operation": "listBoards",
	"page": 1,
	"perPage": 50
}
```

To create a new idea:

```json
{
	"operation": "createBoardIdea",
	"boardId": "your-board-id"
}
```

### Error Handling

The workflow includes built-in error handling for common API responses:

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden

## Configuration

### Base URL

The workflow is configured to use `https://api.klaxoon.com` as the base URL for all API calls.

### Request Headers

All requests automatically include:

- `Content-Type: application/json`
- `Authorization: Bearer [token]` (handled by OAuth2 credentials)

### Response Format

All responses are parsed as JSON and include:

- Original API response data
- Operation metadata
- Timestamp of execution

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Klaxoon Developers Documentation](https://developers.klaxoon.com)
- [Klaxoon Boards API Reference](https://developers.klaxoon.com/reference/boards-api)
- [OAuth2 Authentication Guide](https://docs.n8n.io/integrations/builtin/credentials/oauth2/)

## Notes

- This workflow template uses placeholder values for demonstration. Replace them with your actual board IDs, access codes, and content.
- The workflow includes comprehensive documentation via Sticky Note nodes for easy understanding and modification.
- All HTTP requests include proper error handling and response formatting.
- The modular design allows easy extension for additional API endpoints if needed.
