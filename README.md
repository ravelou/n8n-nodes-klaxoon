![Klaxoon Banner](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-klaxoon

Custom [n8n](https://n8n.io) nodes for integrating with the [Klaxoon API](https://developer.klaxoon.com/). This package allows you to automate and manage Klaxoon boards, ideas, categories, colors, and dimensions directly from your n8n workflows.

## Features

- **Board**: List, get, and manage Klaxoon boards.
- **Idea**: Create, update, and list ideas on boards.
- **Category**: List and get categories for a board.
- **Color**: List and get colors for a board.
- **Dimension**: Create, update, list, and get dimensions for a board.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/)
- [n8n](https://n8n.io/) installed globally or in your project
- A Klaxoon account and API credentials

## Installation

Install n8n globally if you haven't already:

```bash
npm install -g n8n
```

Clone this repository and install dependencies:

```bash
git clone https://github.com/<your-organization>/n8n-nodes-klaxoon.git
cd n8n-nodes-klaxoon
npm install
```

## Usage

1. Copy or symlink the nodes in the `/nodes` directory into your local n8n custom nodes directory, or use [n8n's community nodes feature](https://docs.n8n.io/integrations/community-nodes/).
2. Restart n8n.
3. In the n8n editor, search for "Klaxoon" to find the available Klaxoon nodes.
4. Configure your Klaxoon OAuth2 credentials in n8n.
5. Use the nodes in your workflows to interact with Klaxoon resources.

## Development

- Edit or extend the nodes in `/nodes/Klaxoon/`.
- Run `npm run lint` to check for code style issues.
- Run `npm run lintfix` to auto-fix lint errors.
- Test your nodes locally in n8n.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

[MIT](LICENSE.md)
