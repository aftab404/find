import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from '@/components/ModeToggle'
import Search from '@/components/Search'



export default function Home() {
  return (
    <main className='flex justify-center p-2'>

      <div className="flex flex-col w-full max-w-7xl content-between">
        <Tabs defaultValue="account" className="w-full">

          <TabsList className='w-full'>
            <TabsTrigger value="account">Wikipedia</TabsTrigger>
            <TabsTrigger value="password">OpenAi</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <div className='absolute bottom-0 right-0'>
          <Search />
        </div>


      </div>


    </main>
  )
}
