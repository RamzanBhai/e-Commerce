import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'
import { CheckOut } from './Pages/CheckOut'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import { Toaster } from 'react-hot-toast'
import { useTheme } from './hooks/useTheme'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/shop', element: <Shop /> },
  { path: '/cart', element: <Cart /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> },
  { path: '/checkout', element: <CheckOut /> },
]

const App = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Toaster position="bottom-right" />
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
        <main>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
