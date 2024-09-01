import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://fqagtqvrsvdvtrwdknmw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxYWd0cXZyc3ZkdnRyd2Rrbm13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxOTUzMjUsImV4cCI6MjA0MDc3MTMyNX0.znRR0tzZyW_bmK2kW5gqZSoiiRHOS6G2A00lico0hRQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
