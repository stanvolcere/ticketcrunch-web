import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className='container mx-auto'>
      <p>Hello {data.user.email}</p>
      <p>This can only be accessed if authd</p>
      <Link href="/">Home</Link>
    </div>
  )
}