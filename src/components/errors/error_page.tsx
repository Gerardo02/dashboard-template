import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  let errorMessage: string
  let statusCode: number | undefined

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    statusCode = error.status
    errorMessage = error.statusText || error.data?.message || 'Unknown error'
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    errorMessage = 'Unknown error'
  }

  return (
    <div className="grid text-center gap-4 place-content-center min-w-svh min-h-svh">
      <p className="text-6xl">
        <strong>Oops!</strong>
      </p>
      <p className="text-2xl">
        <i>{statusCode + ' ' + errorMessage}</i>
      </p>
      <p className="text-lg">Parece que ocurrio un error inesperado.</p>
      <p className="text-lg">
        <u>
          <Link to="/overview">Click aqui para regresar</Link>
        </u>
      </p>
    </div>
  )
}
