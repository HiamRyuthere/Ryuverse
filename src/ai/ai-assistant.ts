// This is an AI assistant to provide information about the website and help with navigation.
'use server';

/**
 * @fileOverview An AI assistant for site navigation.
 *
 * - aiAssistant - A function that handles the AI assistant process.
 * - AiAssistantInput - The input type for the aiAssistant function.
 * - AiAssistantOutput - The return type for the aiAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAssistantInputSchema = z.object({
  query: z.string().describe('The user query about the site.'),
});
export type AiAssistantInput = z.infer<typeof AiAssistantInputSchema>;

const AiAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query.'),
});
export type AiAssistantOutput = z.infer<typeof AiAssistantOutputSchema>;

export async function aiAssistant(input: AiAssistantInput): Promise<AiAssistantOutput> {
  return aiAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAssistantPrompt',
  input: {schema: AiAssistantInputSchema},
  output: {schema: AiAssistantOutputSchema},
  prompt: `You are a helpful AI assistant providing information about the RyuVerse website.
  Answer the following question about the site:
  {{query}}
  If the question is not about the site, politely decline to answer.
  If the question is about site navigation, provide helpful instructions.`,
});

const aiAssistantFlow = ai.defineFlow(
  {
    name: 'aiAssistantFlow',
    inputSchema: AiAssistantInputSchema,
    outputSchema: AiAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
