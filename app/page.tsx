import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

export default async function VenueCreatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div>
      <div>{data.user.email}</div>
      <p>This is the LANDING Page</p>
    </div>
  )
}