'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Search from '@/components/Search'
import { FormEvent, MouseEvent, useState, SyntheticEvent } from 'react'
import Tile from '@/components/Tile'

export default function Home() {

  const [engine, setEngine] = useState<string>('wikipedia')
  const [results, setResults] = useState<Result[]>([])

  function handleChangeEngine(event: SyntheticEvent) {
    const target = event.target as HTMLButtonElement
    console.log(target.innerHTML.toLowerCase())
    setEngine(target.innerHTML.toLowerCase())
  }


  return (
    <main className='flex justify-center p-2'>

      <div className="flex flex-col w-full max-w-7xl content-between">
        <Tabs defaultValue="wikipedia" className="w-full">

          <TabsList className='w-full'>
            <TabsTrigger value="wikipedia" onClick={handleChangeEngine}>Wikipedia </TabsTrigger>
            <TabsTrigger value="openai" onClick={handleChangeEngine}>OpenAi</TabsTrigger>
          </TabsList>
          <TabsContent value="wikipedia" >
            
            <div className="flex flex-col gap-2 h-screen overflow-scroll">
              {Object.values(results).map((result) => {
                return (
                  <Tile
                    key={result.pageid}
                    result={result}
                  />
                )
              })
              }
            </div>
              
            
          </TabsContent>
          <TabsContent value="openai">
            <p className="w-full text-center">Not Available !</p>
          </TabsContent>
        </Tabs>
        <div className='absolute bottom-0 right-0 '>

          <Search setResults={setResults} engine={engine} />


        </div>


      </div>


    </main>
  )
}
