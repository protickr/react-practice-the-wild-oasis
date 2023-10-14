import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bsjlpkscxtekswriajjz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzamxwa3NjeHRla3N3cmlhamp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxODE3NDMsImV4cCI6MjAxMjc1Nzc0M30.mzKpfYRP_6_cjcEvv5mvsJof6pvej5uNor2Eg4SGx4E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
