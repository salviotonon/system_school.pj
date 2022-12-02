import { Footer } from '../Footer'
import { Header } from '../Header'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}
