
'use server';
/**
 * @fileOverview An AI flow for providing reflections on journal entries.
 *
 * - generateJournalReflection - A function that handles the reflection process.
 * - JournalReflectionInput - The input type for the function.
 * - JournalReflectionOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JournalReflectionInputSchema = z.object({
  journalEntry: z.string().describe('The user\'s journal entry.'),
});
export type JournalReflectionInput = z.infer<typeof JournalReflectionInputSchema>;

const JournalReflectionOutputSchema = z.object({
  reflection: z.string().describe('A thoughtful, non-judgmental reflection on the journal entry, designed to provoke deeper thought. Ask gentle, open-ended questions.'),
});
export type JournalReflectionOutput = z.infer<typeof JournalReflectionOutputSchema>;

export async function generateJournalReflection(input: JournalReflectionInput): Promise<JournalReflectionOutput> {
  return journalReflectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'journalReflectionPrompt',
  input: {schema: JournalReflectionInputSchema},
  output: {schema: JournalReflectionOutputSchema},
  prompt: `You are a wise and compassionate AI assistant inspired by the philosophies of Advaita Vedanta and Stoicism. Your purpose is to help users reflect on their journal entries.

Read the following journal entry. Do not give advice or solutions. Instead, provide a gentle, non-judgmental reflection that encourages deeper introspection. Ask one or two open-ended questions that might help the user see their own thoughts from a different perspective.

Journal Entry:
{{{journalEntry}}}

Your reflection should be calm, supportive, and guide the user toward their own inner wisdom.`,
});

const journalReflectionFlow = ai.defineFlow(
  {
    name: 'journalReflectionFlow',
    inputSchema: JournalReflectionInputSchema,
    outputSchema: JournalReflectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
