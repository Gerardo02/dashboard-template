import {
  BookOpen,
  Building2,
  Home,
  LineChart,
  Package,
  Package2,
  Users,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ScrollArea } from './scroll-area'

interface NavBarProps {
  onLinkClick?: () => void
}

const NavBar: React.FC<NavBarProps> = ({ onLinkClick }) => {
  const location = useLocation()
  const selected: string =
    'flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary'
  const notSelected: string =
    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'

  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-14 justify-between border-b px-4 lg:h-[60px] lg:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold"
          onClick={onLinkClick}
        >
          <Package2 className="h-6 w-6" />
          <span className="">Family Inc.</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100svh-100px)] lg:h-[calc(100svh-104px)]">
        <div className="flex-1">
          <nav className="grid flex-grow mt-2 items-start px-2 text-sm font-medium lg:px-4">
            <Link
              to="/"
              className={location.pathname === '/' ? selected : notSelected}
              onClick={onLinkClick}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/overview"
              className={
                location.pathname === '/overview' ? selected : notSelected
              }
              onClick={onLinkClick}
            >
              <BookOpen className="h-4 w-4" />
              Resumen
            </Link>
            <Link
              to="/companies"
              className={
                location.pathname === '/companies' ? selected : notSelected
              }
              onClick={onLinkClick}
            >
              <Building2 className="h-4 w-4" />
              Compañias
            </Link>
            <Link
              to="/estate"
              className={
                location.pathname === '/estate' ? selected : notSelected
              }
              onClick={onLinkClick}
            >
              <Package className="h-4 w-4" />
              Inmuebles
            </Link>
            <Link
              to="/clients"
              className={
                location.pathname === '/clients' ? selected : notSelected
              }
              onClick={onLinkClick}
            >
              <Users className="h-4 w-4" />
              Clientes
            </Link>
            <Link
              to="/analytics"
              className={
                location.pathname === '/analytics' ? selected : notSelected
              }
              onClick={onLinkClick}
            >
              <LineChart className="h-4 w-4" />
              Estadisticas
            </Link>
          </nav>
        </div>
      </ScrollArea>
    </div>
  )
}

export default NavBar
