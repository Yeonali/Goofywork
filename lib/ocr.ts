export type OcrResult = {
  text: string;
  confidence: number;
};

export async function extractTextFromImage(imageUrl: string): Promise<OcrResult> {
  return {
    text: `OCR pipeline placeholder for ${imageUrl}`,
    confidence: 0.86
  };
}

export async function summarizePdf(pdfUrl: string) {
  return {
    summary: `Summary placeholder for ${pdfUrl}`,
    keyPoints: ["Key concept 1", "Key concept 2", "Key concept 3"]
  };
}
