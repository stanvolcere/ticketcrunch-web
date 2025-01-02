import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link';
import { Bebas_Neue } from "next/font/google";


import Image from 'next/image'
import profilePic from '@/public/img/landingpage-party.jpg'

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default async function VenueCreatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  
  return (
    <div className="container mx-auto flex">
      <div className='w-1/2 h-fit'>
        <div className='mt-60'>
          <div className={`text-8xl ${bebas_neue.className} tracking-tighter leading-none`}>
            events that get you buzzing...
          </div>
        </div>
      </div>
      <Image
        className='w-1/2 h-fit rounded'
        src={profilePic}
        alt="Picture of the author"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  )
}