import './globals.css'
import { Bricolage_Grotesque } from 'next/font/google'
import favicon from '../public/favicon.ico'

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: 'CuriousQuill',
  description: 'A blog by a curious quill',
  favicon,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bricolage_grotesque.className}>{children}</body>
    </html>
  )
}
