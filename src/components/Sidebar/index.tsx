import React, { FC } from 'react'

import { useDocsData } from '@docusaurus/plugin-content-docs/client'

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
  const visibleItems = useDocsData(undefined)
  console.log('!!!', visibleItems)
  return (
    <aside id="new-sidebar" className="w-sidebar-w">
      <div>new sidebar</div>
      <div>new sidebar</div>
      <div>new sidebar</div>
      <div>new sidebar</div>
      <div>new sidebar</div>
      <div>new sidebar</div>
      <div>new sidebar</div>
      <div>new sidebar</div>
    </aside>
  )
}

export default Sidebar
