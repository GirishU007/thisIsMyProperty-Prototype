-- handle_updated_at() is a trigger-only function; do not expose it via /rest/v1/rpc.
revoke execute on function public.handle_updated_at() from public, anon, authenticated;
