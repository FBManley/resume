import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <Header />
       <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4 ">Jake Manley</h1>
      <p className="text-lg mb-6">Explore my GitHub projects to see what I can do and check out my links below.</p>
      <div className="space-x-4">
        <Link className="text-orange-500" href="https://github.com/FBManley">Project 1</Link>
        <Link className="text-orange-500" href="https://github.com/FBManley">Project 2</Link>
        <Link className="text-orange-500" href="https://github.com/FBManley">Project 3</Link>
        <Link className="text-orange-500" href="https://www.linkedin.com/in/jbmanley45" >LinkedIn</Link>
        <Link className="text-orange-500" href="https://medium.com/@jbmanley45">Blog</Link>
        <Link className="text-orange-500" href="/resume.pdf">Resume</Link>
      </div>
    </div>
    <div className="flex-grow py-40"></div> 
    <div className="flex-grow py-40"></div> 
      <Footer />
    </main>
  )
}
