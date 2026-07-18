import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { tips } from "../../tipsData";

export default defineTool({
  name: "list_tips",
  title: "List daily tips",
  description:
    "Get daily nutrition and baby care tips as simple, easy-to-read cards. Each tip has an emoji, title, content, and category.",
  inputSchema: {
    language: z.enum(["en", "hi", "mr"]).optional().describe("Language. Defaults to en."),
    category: z
      .enum(["nutrition", "care", "feeding", "hygiene"])
      .optional()
      .describe("Optional category filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language, category }) => {
    const lang = language ?? "en";
    const filtered = category ? tips.filter((t) => t.category === category) : tips;
    const items = filtered.map((t) => ({
      id: t.id,
      emoji: t.emoji,
      category: t.category,
      title: t.title[lang],
      content: t.content[lang],
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { tips: items, count: items.length },
    };
  },
});
