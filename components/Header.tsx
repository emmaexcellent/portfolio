import {
  Card
} from "@/components/ui/card"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"


const Header = () => {
  return (
    <header className='sticky top-0 z-20 w-full'>
      <Card className="flex items-center justify-between rounded-2xl p-2 shadow">
        <Link href='/' className="inline-flex items-center gap-3 px-3 text-2xl font-semibold">
          <span className="uppercase"> Emma<span className="text-primary capitalize">Excellent</span> </span>
        </Link>
        <Button variant='ghost' className="">
          <span className="sr-only">Show Navigation</span>
          <Menu className="w-6 h-6" />
        </Button>
      </Card>     
    </header>
  )
}

export default Header