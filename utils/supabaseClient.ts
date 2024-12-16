import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fvjljahkjhmdjyhbpwgs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2amxqYWhramhtZGp5aGJwd2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMjcyMjMsImV4cCI6MjA0OTcwMzIyM30.tqfkI9A-C7YNWaxCd_a-wSXDfpth5xXSgrdKHGRc1vg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
