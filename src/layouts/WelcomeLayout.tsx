import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import {useRef} from 'react'
import {Link, useLocation, useOutlet } from 'react-router-dom'
import logo from '../assets/logo.svg'
const linkMap = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx',
}

export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string,ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
        enter: { transform: 'translateX(0%)' },
    // 退出状态
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 }
  })
  return (
    <div className='bg-#5f43bf' h-screen flex flex-col items-stretch pb-16px>
      <header shrink-0 text-center pt-64px>
        <img src={logo} w-64px />
        <h1 text="#D4D4EE" text-32px>starsMoney</h1>
      </header>
      <main shrink-1 grow-1 m-16px>
        {transitions((style, pathname) =>
          <animated.div key={pathname} style={style} bg-white  w="100%" h="100%" rounded-8px
          flex justify-center items-center>
            {map.current[pathname]}
          </animated.div>
        )}
      </main>
      <footer shrink-0 text-center text-24px text-white grid grid-cols-3 grid-row-1>
        <Link style={{ gridArea: '1 / 2 / 2 / 3' }}
         to={linkMap[location.pathname]}>下一页</Link>
        <Link style={{ gridArea: '1 / 3 / 2 / 4' }} 
         to="/welcome/xxx">跳过</Link>
      </footer>
    </div>
  )
}
