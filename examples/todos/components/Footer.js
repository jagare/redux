import React from 'react'
import Link from './Link'

const Footer = ({activeFilter, setFilter}) => (
  <p>
    Show:
    {" "}
    <Link
      active={activeFilter==='SHOW_ALL'}
      onClick={()=>setFilter('SHOW_ALL')}
    >
      All
    </Link>
    {", "}
    <Link
      active={activeFilter==='SHOW_ACTIVE'}
      onClick={()=>setFilter('SHOW_ACTIVE')}
    >
      Active
    </Link>
    {", "}
    <Link
      active={activeFilter==='SHOW_COMPLETED'}
      onClick={()=>setFilter('SHOW_COMPLETED')}
    >
      Completed
    </Link>
  </p>
)

export default Footer
