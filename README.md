# fluffy-happiness

Patrick's submission for OpenAI's WebMCP Hackathon.

## Live URL

- https://patrickjcraig.github.io/fluffy-happiness/

## Why this use case is a strong fit for WebMCP

This project demonstrates a product discovery assistant where the agent can directly call a browser-registered tool (`search_products`) instead of screen-scraping text. WebMCP is a strong fit because it gives the agent structured access to a product catalog in real time.

## How this creates a better user experience

Users can ask for product recommendations in natural language while the agent performs deterministic catalog lookups through a typed tool call. This reduces hallucinations and makes results faster, more relevant, and easier to trust.

## What people and agents can do together that was difficult before

People can describe intent (for example, "find affordable peripherals") and the agent can instantly execute structured searches with limits and filters. Previously, users had to manually browse pages and compare items; with WebMCP, the agent can do this workflow in one conversational step.

## How WebMCP was implemented

The tool is registered in `webmcp-tools.js` using `document.modelContext.registerTool(...)`. It defines an input schema (`query`, `maxResults`) and an async `execute` function that searches a local catalog and returns structured results.

```js
document.modelContext.registerTool({
  name: "search_products",
  description: "Search the product catalog",
  inputSchema: { /* ... */ },
  execute: async (input) => { /* ... */ }
});
```

## Demo video

- https://www.youtube.com/watch?v=REPLACE_WITH_PUBLIC_DEMO_VIDEO

## Repository + license

- Public code repository: https://github.com/patrickjcraig/fluffy-happiness
- Open source license: [MIT](./LICENSE)

## Run locally

1. Clone the repository.
2. Serve the folder with any static file server (for example, `python3 -m http.server 8000`).
3. Open `http://localhost:8000` in ChatGPT's in-app browser or Chrome with WebMCP enabled.

## Project files

- `index.html` — demo page
- `webmcp-tools.js` — WebMCP tool registration and catalog search logic
