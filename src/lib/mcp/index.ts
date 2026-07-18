import { defineMcp } from "@lovable.dev/mcp-js";
import listTopicsTool from "./tools/list-topics";
import getTopicTool from "./tools/get-topic";
import getVaccinationScheduleTool from "./tools/get-vaccination-schedule";
import getQuizQuestionsTool from "./tools/get-quiz-questions";
import listTipsTool from "./tools/list-tips";

export default defineMcp({
  name: "info-child-mcp",
  title: "Info Child MCP",
  version: "0.1.0",
  instructions:
    "Info Child provides scientific, evidence-based child nutrition and baby care guidance for mothers, pregnant women, and caregivers in India, based on BPNI Maharashtra guidance supported by UNICEF. Available in English (en), Hindi (hi), and Marathi (mr). Use list_topics to discover topics, then get_topic for full detail. Use get_vaccination_schedule for the month-wise infant immunization schedule. Use get_quiz_questions for MCQ-style educational questions. Use list_tips for short daily tips.",
  tools: [
    listTopicsTool,
    getTopicTool,
    getVaccinationScheduleTool,
    getQuizQuestionsTool,
    listTipsTool,
  ],
});
