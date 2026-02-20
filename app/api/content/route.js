import { parseUserInput } from '@/lib/parseUserInput';

export async function GET() {
  try {
    const data = parseUserInput();
    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Failed to parse content' },
      { status: 500 }
    );
  }
}
