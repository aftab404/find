import { NextResponse } from "next/server"

export async function GET (request: Request, { params }: { params: { term: string } }) : Promise<NextResponse<Result[]>>{
    const {term} = params

    const searchParams = new URLSearchParams({
        action: "query",
        generator: "search",
        gsrsearch: term,
        gsrlimit: "20",
        prop: "extracts|pageimages",
        exchars: "100",
        exintro: "true",
        explaintext: "true",
        exlimit: "max",
        format: "json",
        origin: "*",
    })
    
    const response = await fetch(`https://en.wikipedia.org/w/api.php?${searchParams}`)
   
    const res = await response.json()
    console.log(res.query.pages)
    return NextResponse.json(res.query.pages)
    
}