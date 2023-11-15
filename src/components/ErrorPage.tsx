import {useRouteError} from 'react-router-dom'
export const ErrorPage:React.FC = ()=>{
  const error:any = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>哎哟!</h1>
      <p>不好意思,出现一个🙅</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
