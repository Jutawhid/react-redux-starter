import React from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import {checkIsActive, KTSVG} from '../../../helpers'
import {useLayout} from '../../core'
import '../../../../_jutemplate/assets/css/custom.css'

//svg-icon-2
type Props = {
  // children: React.ReactNode; // 👈️ added type for children
  to: string
  title: string
  icon?: string
  fontIcon?: string
hasBullet?: boolean
}

const AsideMenuItem: React.FC<Props> = ({
  // children,
  to,
  title,
  icon,
  fontIcon,
  hasBullet = false,
}) => {
  const {pathname} = useLocation()
  const isActive = checkIsActive(pathname, to)
  const {config} = useLayout()
  const {aside} = config

  return (
    <div className='menu-item'>
      <Link className={clsx('menu-link without-sub', {active: isActive})} to={to}>
        {hasBullet && (
          <span className='menu-bullet'>
            <span className='bullet bullet-dot'></span>
          </span>
        )}
        {icon && aside.menuIcon === 'svg' && (
          <span className='menu-icon'>
            <KTSVG path={icon} className='' />
          </span>
        )}
        {fontIcon && aside.menuIcon === 'font' && <i className={clsx('bi fs-3', fontIcon)}></i>}
        <span className='menu-title ct'>{title}</span>
      </Link>
      {/* {children} */}
    </div>
  )
}

export {AsideMenuItem}