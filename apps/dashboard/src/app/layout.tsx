
import Header from 'components/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header/>
      <div className='flex items-start'>
        <Sidebar/>
        <div>
        {children}
        </div>
      </div>
        </body>
    </html>
  )
}
