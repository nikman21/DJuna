import { Button } from "@workspace/ui/components/button"
import { User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse">
          <div className="flex">
            <Button variant="ghost" size="icon">
              <User className="h-15 w-15" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

