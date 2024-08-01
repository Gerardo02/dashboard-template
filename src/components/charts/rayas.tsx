'use client'
import * as React from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { date: '04/01/2024', desktop: 222, mobile: 150 },
  { date: '04/02/2024', desktop: 97, mobile: 180 },
  { date: '04/03/2024', desktop: 167, mobile: 120 },
  { date: '04/04/2024', desktop: 242, mobile: 260 },
  { date: '04/05/2024', desktop: 373, mobile: 290 },
  { date: '04/06/2024', desktop: 301, mobile: 340 },
  { date: '04/07/2024', desktop: 245, mobile: 180 },
  { date: '04/08/2024', desktop: 409, mobile: 320 },
  { date: '04/09/2024', desktop: 59, mobile: 110 },
  { date: '04/10/2024', desktop: 261, mobile: 190 },
  { date: '04/11/2024', desktop: 327, mobile: 350 },
  { date: '04/12/2024', desktop: 292, mobile: 210 },
  { date: '04/13/2024', desktop: 342, mobile: 380 },
  { date: '04/14/2024', desktop: 137, mobile: 220 },
  { date: '04/15/2024', desktop: 120, mobile: 170 },
  { date: '04/16/2024', desktop: 138, mobile: 190 },
  { date: '04/17/2024', desktop: 446, mobile: 360 },
  { date: '04/18/2024', desktop: 364, mobile: 410 },
  { date: '04/19/2024', desktop: 243, mobile: 180 },
  { date: '04/20/2024', desktop: 89, mobile: 150 },
  { date: '04/21/2024', desktop: 137, mobile: 200 },
  { date: '04/22/2024', desktop: 224, mobile: 170 },
  { date: '04/23/2024', desktop: 138, mobile: 230 },
  { date: '04/24/2024', desktop: 387, mobile: 290 },
  { date: '04/25/2024', desktop: 215, mobile: 250 },
  { date: '04/26/2024', desktop: 75, mobile: 130 },
  { date: '04/27/2024', desktop: 383, mobile: 420 },
  { date: '04/28/2024', desktop: 122, mobile: 180 },
  { date: '04/29/2024', desktop: 315, mobile: 240 },
  { date: '04/30/2024', desktop: 454, mobile: 380 },
  { date: '05/01/2024', desktop: 165, mobile: 220 },
  { date: '05/02/2024', desktop: 293, mobile: 310 },
  { date: '05/03/2024', desktop: 247, mobile: 190 },
  { date: '05/04/2024', desktop: 385, mobile: 420 },
  { date: '05/05/2024', desktop: 481, mobile: 390 },
  { date: '05/06/2024', desktop: 498, mobile: 520 },
  { date: '05/07/2024', desktop: 388, mobile: 300 },
  { date: '05/08/2024', desktop: 149, mobile: 210 },
  { date: '05/09/2024', desktop: 227, mobile: 180 },
  { date: '05/10/2024', desktop: 293, mobile: 330 },
  { date: '05/11/2024', desktop: 335, mobile: 270 },
  { date: '05/12/2024', desktop: 197, mobile: 240 },
  { date: '05/13/2024', desktop: 197, mobile: 160 },
  { date: '05/14/2024', desktop: 448, mobile: 490 },
  { date: '05/15/2024', desktop: 473, mobile: 380 },
  { date: '05/16/2024', desktop: 338, mobile: 400 },
  { date: '05/17/2024', desktop: 499, mobile: 420 },
  { date: '05/18/2024', desktop: 315, mobile: 350 },
  { date: '05/19/2024', desktop: 235, mobile: 180 },
  { date: '05/20/2024', desktop: 177, mobile: 230 },
  { date: '05/21/2024', desktop: 82, mobile: 140 },
  { date: '05/22/2024', desktop: 81, mobile: 120 },
  { date: '05/23/2024', desktop: 252, mobile: 290 },
  { date: '05/24/2024', desktop: 294, mobile: 220 },
  { date: '05/25/2024', desktop: 201, mobile: 250 },
  { date: '05/26/2024', desktop: 213, mobile: 170 },
  { date: '05/27/2024', desktop: 420, mobile: 460 },
  { date: '05/28/2024', desktop: 233, mobile: 190 },
  { date: '05/29/2024', desktop: 78, mobile: 130 },
  { date: '05/30/2024', desktop: 340, mobile: 280 },
  { date: '05/31/2024', desktop: 178, mobile: 230 },
  { date: '06/01/2024', desktop: 178, mobile: 200 },
  { date: '06/02/2024', desktop: 470, mobile: 410 },
  { date: '06/03/2024', desktop: 103, mobile: 160 },
  { date: '06/04/2024', desktop: 439, mobile: 380 },
  { date: '06/05/2024', desktop: 88, mobile: 140 },
  { date: '06/06/2024', desktop: 294, mobile: 250 },
  { date: '06/07/2024', desktop: 323, mobile: 370 },
  { date: '06/08/2024', desktop: 385, mobile: 320 },
  { date: '06/09/2024', desktop: 438, mobile: 480 },
  { date: '06/10/2024', desktop: 155, mobile: 200 },
  { date: '06/11/2024', desktop: 92, mobile: 150 },
  { date: '06/12/2024', desktop: 492, mobile: 420 },
  { date: '06/13/2024', desktop: 81, mobile: 130 },
  { date: '06/14/2024', desktop: 426, mobile: 380 },
  { date: '06/15/2024', desktop: 307, mobile: 350 },
  { date: '06/16/2024', desktop: 371, mobile: 310 },
  { date: '06/17/2024', desktop: 475, mobile: 520 },
  { date: '06/18/2024', desktop: 107, mobile: 170 },
  { date: '06/19/2024', desktop: 341, mobile: 290 },
  { date: '06/20/2024', desktop: 408, mobile: 450 },
  { date: '06/21/2024', desktop: 169, mobile: 210 },
  { date: '06/22/2024', desktop: 317, mobile: 270 },
  { date: '06/23/2024', desktop: 480, mobile: 530 },
  { date: '06/24/2024', desktop: 132, mobile: 180 },
  { date: '06/25/2024', desktop: 141, mobile: 190 },
  { date: '06/26/2024', desktop: 434, mobile: 380 },
  { date: '06/27/2024', desktop: 448, mobile: 490 },
  { date: '06/28/2024', desktop: 149, mobile: 200 },
  { date: '06/29/2024', desktop: 103, mobile: 160 },
  { date: '06/30/2024', desktop: 446, mobile: 400 },
]
const chartConfig = {
  views: {
    label: 'Page Views',
  },
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig
export function RayasComponent() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('desktop')
  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Line Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {['desktop', 'mobile'].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
