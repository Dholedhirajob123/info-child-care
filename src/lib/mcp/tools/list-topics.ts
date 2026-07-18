import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { topics } from "../../topicsData";

export default defineTool({
  name: "list_topics",
  title: "List topics",
  description:
    "List all child nutrition and baby care topics available in Info Child, with id, category, and short summary. Use this to discover topics before calling get_topic.",
  inputSchema: {
    language: z
      .enum(["en", "hi", "mr"])
      .optional()
      .describe("Language for titles/summaries. Defaults to en."),
    category: z
      .enum(["breastfeeding", "complementary", "hygiene", "nutrition", "growth"])
      .optional()
      .describe("Optional category filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language, category }) => {
    const lang = language ?? "en";
    const filtered = category ? topics.filter((t) => t.category === category) : topics;
    const items = filtered.map((t) => ({
      id: t.id,
      category: t.category,
      emoji: t.emoji,
      title: t.title[lang],
      summary: t.summary[lang],
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { topics: items, count: items.length },
    };
  },
});
