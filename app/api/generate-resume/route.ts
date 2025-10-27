import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { ResumePDF } from '@/components/resume-pdf';
import React from 'react';

export async function GET() {
  try {
    const pdfBuffer = await renderToBuffer(React.createElement(ResumePDF));

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Ethan_Teng_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new NextResponse('Error generating resume PDF', { status: 500 });
  }
}

