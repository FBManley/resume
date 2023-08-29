import Link from 'next/link'


// q. whats the alternative to an a tag?
// a. Link component from next/link

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Jake Manley</h1>
      <p className="text-lg mb-6">Explore my GitHub projects to see what I can do and check out my resume below.</p>
      <div className="space-x-4">
        <Link className="text-blue-500" href="https://github.com/FBManley">Project 1</Link>
        <Link className="text-blue-500" href="https://github.com/FBManley">Project 2</Link>
        <Link className="text-blue-500" href="https://github.com/FBManley">Project 3</Link>
        <Link className="text-blue-500" href="/resume.pdf">Resume</Link>
      </div>
    </div>
    </main>
  )
}
