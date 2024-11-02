import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
   
      <div className="text-center">
        <h1 className="text-xl font-semibold">Project Lorem</h1>
      </div>
      <nav className="flex space-x-8">
        {['Main', 'Gallery', 'Projects', 'Certifications', 'Contacts'].map((link) => (
          <Link key={link} href={`#`} className="hover:underline">
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
