import { BarComponent } from '../charts/bars'
import { LineComponent } from '../charts/lines'
import { WavesComponent } from '../charts/olas'
import { PieComponent } from '../charts/pie'
import { RayasComponent } from '../charts/rayas'

const Overview = () => {
  return (
    <div className="grid gap-4">
      <div className="flex flex-col justify-center gap-4 flex-nowrap md:flex-wrap md:flex-row">
        <BarComponent />
        <WavesComponent />
        <LineComponent />
        <PieComponent />
      </div>
      <RayasComponent />
    </div>
  )
}

export default Overview
