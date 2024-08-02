import { BarComponent } from '../charts/bars'
import { LineComponent } from '../charts/lines'
import { WavesComponent } from '../charts/olas'
import { PieComponent } from '../charts/pie'
import { RayasComponent } from '../charts/rayas'

const Overview = () => {
  return (
    <div className="grid gap-4">
      <text className="text-3xl">Resumen &#128517;</text>
      <div className="flex flex-col justify-center gap-4 flex-nowrap md:flex-wrap md:flex-row">
        <PieComponent />
        <WavesComponent />
        <LineComponent />
        <BarComponent />
      </div>
      <RayasComponent />
    </div>
  )
}

export default Overview
