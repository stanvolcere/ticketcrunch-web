import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

type Event = {
  id: number, 
  title: string,
  description: string,
  content: string,
}

const fakeArray: Event[] = [
    {
        id: 1,
        title: "Test 1",
        description: "Test Description",
        content: "Test Content",
    },
    {
              id: 2,
        title: "Test 2",
        description: "Test Description",
        content: "Test Content",
    },
    {
              id: 3,
        title: "Test 3",
        description: "Test Description",
        content: "Test Content",
    },    {
              id: 4,
        title: "Test 4",
        description: "Test Description",
        content: "Test Content",
    },
    {
              id: 5,
        title: "Test 5",
        description: "Test Description",
        content: "Test Content",
    }
]

export default async function VenueCreatePage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const id = (await params).id
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const findEvent = (id: number) => {
    const found = fakeArray.find((e: Event) => {
      return e.id == id
    })

    if (!!found) {
      return <div>{found.title}</div>
    }
  }

  return (
    <div className='container mx-auto'>
      <div className='py-10 flex flex-row justify-between'>
        WHICH PAGE - {id}
      </div>
        {findEvent(id)}    
    </div>
  )
}