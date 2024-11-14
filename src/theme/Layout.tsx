import React, { FC } from 'react'

import LayoutProvider from '@theme/Layout/Provider'
import { PageMetadata } from '@docusaurus/theme-common'
import Navbar from '@theme/Navbar'
import Footer from '@theme/Footer'
import type { Props } from '@theme/Layout'
import Sidebar from '../components/Sidebar'

const Layout: FC<Props> = ({ title, description, children }) => {
  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />
      <Navbar />
      <main id="new-main" className="pt-nav-h min-h-screen flex flex-row">
        <Sidebar />
        <div className="">{children}</div>
      </main>
      <Footer />
    </LayoutProvider>
  )
}

export default Layout
