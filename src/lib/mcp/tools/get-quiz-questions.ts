import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { quizQuestions } from "../../quizData";

export default defineTool({
  name: "get_quiz_questions",
  title: "Get quiz questions",
  description:
    "Get multiple-choice quiz questions on child nutrition and baby care, with options, correct answer index, and educational explanation.",
  inputSchema: {
    language: z.enum(["en", "hi", "mr"]).optional().describe("Language. Defaults to en."),
    category: z
      .enum(["breastfeeding", "complementary", "hygiene", "nutrition", "growth"])
      .optional()
      .describe("Optional category filter."),
    includeAnswers: z
      .boolean()
      .optional()
      .describe("If false, omit correctIndex and explanation. Defaults to true."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language, category, includeAnswers }) => {
    const lang = language ?? "en";
    const showAnswers = includeAnswers ?? true;
    const filtered = category
      ? quizQuestions.filter((q) => q.category === category)
      : quizQuestions;
    const items = filtered.map((q) => ({
      id: q.id,
      category: q.category,
      question: q.question[lang],
      options: q.options[lang],
      ...(showAnswers
        ? { correctIndex: q.correctIndex, explanation: q.explanation[lang] }
        : {}),
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { questions: items, count: items.length },
    };
  },
});
