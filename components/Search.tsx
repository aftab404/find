'use client'

import { Input } from './ui/input'
import { Button } from './ui/button'
import { FormEvent, useState } from 'react'
import getWikiResults from '@/lib/getWikiResults'

async function getWikiData(query: string) {
    const results = await getWikiResults(query)
    return results
}


export default function Search({ setResults, engine }: { setResults: Function, engine: string }) {

    const [query, setQuery] = useState<string>('')

    function handleChange(event: FormEvent<HTMLInputElement>): void {
        const target = event.target as HTMLInputElement
        setQuery(target.value)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (engine === 'wikipedia') {
            fetch(`/api/wiki/${query}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`Request failed with status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setResults(data)
                })
                .catch((error) => {
                    console.error(error);
                });


        } else {
            console.log('openaiquery')
        }

    }

    return (
        <div >

            <form action="" className={`flex gap-2 p-2`} onSubmit={handleSubmit}>
                <Input
                    placeholder='Search'
                    value={query}
                    onChange={handleChange}
                    type='text'
                />
                <Button
                    variant={'secondary'}
                >🔍</Button>
            </form>

        </div>
    )
}
