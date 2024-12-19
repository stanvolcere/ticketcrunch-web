import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const next = searchParams.get('next') ?? '/'

  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()

  if (!error) {
    // redirect user to specified redirect URL or root of app
    redirect(next)
  }
  // redirect the user to an error page with some instructions
  redirect('/error')
}