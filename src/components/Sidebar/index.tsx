import React, { FC } from 'react'

import useGlobalData from '@docusaurus/useGlobalData'

const Sidebar: FC = () => {
  React.useEffect(() => {
    // remove original sidebar
    const main = document.getElementById('new-main')
    const sidebars = main.getElementsByTagName('aside')
    Array.from(sidebars).map((sidebar) => {
      if (sidebar.id !== 'new-sidebar') {
        sidebar.remove()
      }
    })
  }, [])

  const globalData = useGlobalData()
  console.log('globalData', globalData)
  return (
    <aside id="new-sidebar" className="w-sidebar-w">
      Sidebar
    </aside>
  )
}

export default Sidebar
