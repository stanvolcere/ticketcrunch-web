import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { createClient } from '@/utils/supabase/server'
import placeholder from '@/public/img/placeholder1.jpg'
import Favorite from '@/components/local/dashboard/favoriteToggle'
import Pagination from '@/components/local/dashboard/pagination'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
        title: "Test 1",
        description: "Test Description",
        content: "Test Content",
    },
    {
              id: 3,
        title: "Test 1",
        description: "Test Description",
        content: "Test Content",
    },    {
              id: 4,
        title: "Test 1",
        description: "Test Description",
        content: "Test Content",
    },
    {
              id: 5,
        title: "Test 1",
        description: "Test Description",
        content: "Test Content",
    },
        {
              id: 6,
        title: "Test 1",
        description: "Test Description",
        content: "Test Content",
    },    {
              id: 7,
        title: "Test 1",
        description: "Test Description",
        content: "Test Content",
    },
    // {
    //           id: 8,
    //     title: "Test 1",
    //     description: "Test Description",
    //     content: "Test Content",
    // }
]

export default async function BrowseEventsPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.log("error");
    console.log(error);
    redirect('/login')
  }
  
  const renderEvents = () => {
    return fakeArray.map((e: Event, i: number) => {
        return (
          <Link key={i} href={`/events/${e.id}`}>
            <Card className="w-80 m-5">
            <CardHeader>
              <Image src={placeholder} alt="Placeholder for now" className='rounded-md'/>
            </CardHeader>
            <CardContent>
              <CardTitle>{e.title}</CardTitle>
              <CardDescription>{e.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Favorite />
            </CardFooter>
          </Card>
          </Link>
        )
    });
  }

  return (
    <div className='container mx-auto'>
      {/* <div className="m-5">
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div> */}

      <div className='py-10 flex flex-row flex-wrap justify-items-center place-content-evenly'>
        {renderEvents()}
      </div>

      {/* // Pagination */}
      <Pagination />
    </div>
  )
}