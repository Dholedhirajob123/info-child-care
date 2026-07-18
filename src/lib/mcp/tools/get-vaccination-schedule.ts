import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { vaccinationSchedule } from "../../vaccinationData";

export default defineTool({
  name: "get_vaccination_schedule",
  title: "Get vaccination schedule",
  description:
    "Get the month-wise infant vaccination schedule from birth through 12 months, including vaccine names, purpose, and care notes.",
  inputSchema: {
    language: z.enum(["en", "hi", "mr"]).optional().describe("Language. Defaults to en."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const lang = language ?? "en";
    const schedule = vaccinationSchedule.map((m) => ({
      month: m.month,
      title: m.title[lang],
      emoji: m.emoji,
      vaccines: m.vaccines.map((v) => v.name),
      purpose: m.purpose[lang],
      careNote: m.careNote?.[lang],
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(schedule, null, 2) }],
      structuredContent: { schedule },
    };
  },
});
