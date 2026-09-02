import * as Style from './_dom.syles.jsx'
import useStore from '@/helpers/store'
import { useEffect, useRef, useState } from 'react'
const Dom = ({ children }) => {
  // States
  const [show, setShow] = useState(false)
  // Effects
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
      setShow(true)
    }, 500);
  }, [])
  const ref = useRef(null)
  useStore.setState({ dom: ref })
  return (
    <Style.Dom ref={ref} className={ `dom ${ show ? "is-show" : "" }` }>
      { ref.current && children }
    </Style.Dom>
  )
}

export default Dom
