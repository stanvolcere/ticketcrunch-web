import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link';

import Image from 'next/image'
import profilePic from '@/public/img/landing.jpg'

export default async function VenueCreatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  
  return (
    <div className="container mx-auto ">
      <div></div>
      <Image
        className='w-1/2 h-fit'
        src={profilePic}
        alt="Picture of the author"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  )
}