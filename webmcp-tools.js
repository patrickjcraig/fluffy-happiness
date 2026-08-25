const productCatalog = [
  { id: "sku-101", name: "Noise-Canceling Headphones", category: "Audio", price: 199 },
  { id: "sku-202", name: "4K USB-C Monitor", category: "Displays", price: 329 },
  { id: "sku-303", name: "Ergonomic Keyboard", category: "Peripherals", price: 99 },
  { id: "sku-404", name: "Wireless Mouse", category: "Peripherals", price: 59 }
];

const searchProducts = ({ query = "", maxResults = 5 }) => {
  const normalizedQuery = String(query).trim().toLowerCase();
  const safeMaxResults = Math.max(1, Math.min(Number(maxResults) || 5, 10));

  return productCatalog
    .filter(({ name, category }) => {
      if (!normalizedQuery) {
        return true;
      }

      return (
        name.toLowerCase().includes(normalizedQuery) ||
        category.toLowerCase().includes(normalizedQuery)
      );
    })
    .slice(0, safeMaxResults);
};

if (typeof document !== "undefined" && document.modelContext?.registerTool) {
  document.modelContext.registerTool({
    name: "search_products",
    description: "Search the product catalog",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "A product name or category to search for"
        },
        maxResults: {
          type: "number",
          description: "Maximum number of matching products to return",
          minimum: 1,
          maximum: 10,
          default: 5
        }
      },
      additionalProperties: false
    },
    execute: async (input) => searchProducts(input ?? {})
  });
}

export { searchProducts, productCatalog };
