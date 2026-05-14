create table if not exists public.documents (
  id          uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  user_id     uuid not null references auth.users(id) on delete cascade,
  category    text not null,
  file_name   text not null,
  file_path   text not null,
  file_url    text,
  mime_type   text,
  file_size   integer,
  upload_date timestamptz default now() not null,
  created_at  timestamptz default now() not null
);

alter table public.documents enable row level security;

create policy "Users can view own documents"
  on public.documents for select
  using (auth.uid() = user_id);

create policy "Users can insert own documents"
  on public.documents for insert
  with check (auth.uid() = user_id);

create policy "Users can update own documents"
  on public.documents for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete own documents"
  on public.documents for delete
  using (auth.uid() = user_id);

-- Storage bucket setup (run manually in Supabase dashboard or via CLI):
--
-- 1. Create bucket:
--    INSERT INTO storage.buckets (id, name, public)
--    VALUES ('property-documents', 'property-documents', false);
--
-- 2. RLS policy — allow authenticated users to upload to their own folder:
--    CREATE POLICY "Users can upload own documents"
--      ON storage.objects FOR INSERT
--      WITH CHECK (
--        bucket_id = 'property-documents'
--        AND auth.uid()::text = (storage.foldername(name))[1]
--      );
--
-- 3. RLS policy — allow authenticated users to read their own files:
--    CREATE POLICY "Users can read own documents"
--      ON storage.objects FOR SELECT
--      USING (
--        bucket_id = 'property-documents'
--        AND auth.uid()::text = (storage.foldername(name))[1]
--      );
--
-- 4. RLS policy — allow authenticated users to delete their own files:
--    CREATE POLICY "Users can delete own documents"
--      ON storage.objects FOR DELETE
--      USING (
--        bucket_id = 'property-documents'
--        AND auth.uid()::text = (storage.foldername(name))[1]
--      );
