import { CirclePlus } from 'lucide-react'
import { LineComponent } from '../charts/lines'
import { WavesComponent } from '../charts/olas'
import { PieComponent } from '../charts/pie'
import { RayasComponent } from '../charts/rayas'
import { Button } from '../ui/button'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { Badge } from '../ui/badge'

const Overview = () => {
  return (
    <div className="grid gap-4">
      <div className="flex justify-between mb-2">
        <div className="flex flex-col">
          <strong className="text-3xl sm:text-4xl">$123,420.50</strong>
          <span className="text-[14px]">
            Balance total de todas las cuentas{' '}
            <Badge variant="outline">
              <strong>MXN</strong>
            </Badge>
          </span>
        </div>
        <Button className="rounded-full gap-2 order-last">
          <CirclePlus />
          <span className="hidden sm:block">Iniciar proceso</span>
        </Button>
      </div>
      <Tabs defaultValue="7" className="w-full">
        <TabsList>
          <TabsTrigger value="7">7 Dias</TabsTrigger>
          <TabsTrigger value="30">30 Dias</TabsTrigger>
          <TabsTrigger value="3">3 Meses</TabsTrigger>
          <TabsTrigger value="1">1 Año</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex flex-col justify-center gap-4 flex-nowrap sm:flex-wrap md:flex-row">
        <PieComponent />
        <WavesComponent />
        <LineComponent />
      </div>
      <RayasComponent />
    </div>
  )
}

export default Overview
