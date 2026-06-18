
-- Explicitly deny public read access to contact form submissions
REVOKE SELECT, UPDATE, DELETE ON public.contact_messages FROM anon, authenticated;
REVOKE SELECT, UPDATE, DELETE ON public.meetings FROM anon, authenticated;

CREATE POLICY "deny all select" ON public.contact_messages FOR SELECT TO anon, authenticated USING (false);
CREATE POLICY "deny all update" ON public.contact_messages FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);
CREATE POLICY "deny all delete" ON public.contact_messages FOR DELETE TO anon, authenticated USING (false);

CREATE POLICY "deny all select" ON public.meetings FOR SELECT TO anon, authenticated USING (false);
CREATE POLICY "deny all update" ON public.meetings FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);
CREATE POLICY "deny all delete" ON public.meetings FOR DELETE TO anon, authenticated USING (false);

-- Tighten INSERT policies with input length validation instead of always-true
DROP POLICY "anyone can insert contact" ON public.contact_messages;
CREATE POLICY "anyone can insert contact" ON public.contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(coalesce(name, '')) between 1 and 200
    AND char_length(coalesce(email, '')) between 3 and 320
    AND char_length(coalesce(message, '')) between 1 and 5000
  );

DROP POLICY "anyone can insert meetings" ON public.meetings;
CREATE POLICY "anyone can insert meetings" ON public.meetings
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(coalesce(name, '')) between 1 and 200
    AND char_length(coalesce(email, '')) between 3 and 320
  );
