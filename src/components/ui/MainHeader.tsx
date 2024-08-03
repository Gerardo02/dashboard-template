import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Menu, PanelLeft, Search } from 'lucide-react'
import NavBar from './NavBar'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './sheet'
import { Button } from './button'
import { Input } from './input'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { ModeToggle } from '../theme/mode-toggle'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select'

interface HeaderProps {
  isNavHidden?: boolean
  hideNav?: () => void
  screenSize: {
    width: number
    height: number
  }
}

const MainHeader: React.FC<HeaderProps> = ({
  isNavHidden,
  hideNav,
  screenSize,
}) => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={isNavHidden ? 'shrink-0' : 'shrink-0 md:hidden'}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetClose asChild>
              <NavBar onLinkClick={handleLinkClick} />
            </SheetClose>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <div className="w-20">
          <Select defaultValue="MXN">
            <SelectTrigger>
              <SelectValue placeholder="MXN" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Monedas</SelectLabel>
                <SelectItem value="MXN">MXN</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="JPY">JPY</SelectItem>
                <SelectItem value="CAD">CAD</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={hideNav}
          className={screenSize.width < 768 ? 'hidden' : ''}
        >
          <PanelLeft />
        </Button>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://raw.githubusercontent.com/ThePrimeagen/anime/master/mythra.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </div>
  )
}

export default MainHeader
