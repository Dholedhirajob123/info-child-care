import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

export interface AnswerRecord {
  questionId: string;
  question: string;
  options: string[];
  selectedIndex: number;
  selectedText: string;
  correctIndex: number;
  correct: boolean;
}

export interface SurveyRow {
  id: string;
  parent_name: string;
  parent_email: string;
  gender: string;
  answers: AnswerRecord[];
  score: number;
  total: number;
  submitted_at: string;
  created_at: string;
}

export function exportSurveysToExcel(rows: SurveyRow[]) {
  const summary = rows.map((r) => ({
    'Survey ID': r.id,
    'Parent Name': r.parent_name,
    'Email': r.parent_email,
    'Gender': r.gender,
    'Score': `${r.score}/${r.total}`,
    'Date': new Date(r.submitted_at).toLocaleString(),
  }));

  const answersFlat: Record<string, string>[] = [];
  rows.forEach((r) => {
    (r.answers ?? []).forEach((a, i) => {
      answersFlat.push({
        'Survey ID': r.id,
        'Parent Name': r.parent_name,
        'Email': r.parent_email,
        'Gender': r.gender,
        'Question #': String(i + 1),
        'Question': a.question,
        'Selected Answer': a.selectedText,
        'Correct': a.correct ? 'Yes' : 'No',
      });
    });
  });

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(summary), 'Submissions');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(answersFlat), 'Answers');
  XLSX.writeFile(wb, `surveys-${new Date().toISOString().slice(0, 10)}.xlsx`);
}

export function exportSurveysToPDF(rows: SurveyRow[]) {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text('Info Child - Survey Submissions', 14, 16);

  autoTable(doc, {
    startY: 22,
    head: [['Survey ID', 'Parent', 'Email', 'Gender', 'Score', 'Date']],
    body: rows.map((r) => [
      r.id.slice(0, 8),
      r.parent_name,
      r.parent_email,
      r.gender,
      `${r.score}/${r.total}`,
      new Date(r.submitted_at).toLocaleString(),
    ]),
    styles: { fontSize: 8 },
  });

  rows.forEach((r) => {
    doc.addPage();
    doc.setFontSize(14);
    doc.text('Parent Information', 14, 16);
    doc.setFontSize(10);
    doc.text(`Parent Name: ${r.parent_name}`, 14, 26);
    doc.text(`Email: ${r.parent_email}`, 14, 32);
    doc.text(`Gender: ${r.gender}`, 14, 38);
    doc.text(`Survey ID: ${r.id}`, 14, 44);
    doc.text(`Date: ${new Date(r.submitted_at).toLocaleString()}`, 14, 50);
    doc.text(`Health Score: ${r.score}/${r.total}`, 14, 56);

    autoTable(doc, {
      startY: 62,
      head: [['#', 'Question', 'Selected Answer']],
      body: (r.answers ?? []).map((a, i) => [String(i + 1), a.question, a.selectedText]),
      styles: { fontSize: 8, cellWidth: 'wrap' },
      columnStyles: { 1: { cellWidth: 100 } },
    });
  });

  doc.save(`surveys-${new Date().toISOString().slice(0, 10)}.pdf`);
}
