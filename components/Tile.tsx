import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Tile({result} : {result: Result}) {

    const {title : title, extract : content, pageid : footer} = result

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{content}</p>
                </CardContent>
                <CardFooter>
                    <p>{footer}</p>
                </CardFooter>
            </Card>

        </div>
    )
}
