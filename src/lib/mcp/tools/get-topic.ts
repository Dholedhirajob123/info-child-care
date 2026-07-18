import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { topics } from "../../topicsData";

export default defineTool({
  name: "get_topic",
  title: "Get topic detail",
  description:
    "Get the full detail of a single topic: description, do's, don'ts, and FAQs. Call list_topics first to discover valid ids.",
  inputSchema: {
    id: z.string().min(1).describe("Topic id (e.g. 'breastfeeding-basics')."),
    language: z.enum(["en", "hi", "mr"]).optional().describe("Language. Defaults to en."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id, language }) => {
    const lang = language ?? "en";
    const topic = topics.find((t) => t.id === id);
    if (!topic) {
      return {
        content: [{ type: "text", text: `Topic '${id}' not found.` }],
        isError: true,
      };
    }
    const detail = {
      id: topic.id,
      category: topic.category,
      emoji: topic.emoji,
      title: topic.title[lang],
      summary: topic.summary[lang],
      description: topic.description[lang],
      dos: topic.dos[lang],
      donts: topic.donts[lang],
      faqs: topic.faqs.map((f) => ({
        question: f.question[lang],
        answer: f.answer[lang],
      })),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(detail, null, 2) }],
      structuredContent: detail,
    };
  },
});
