export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#f7f3ec]/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">

        <h1 className="text-3xl font-bold">
          Aishwarya.
        </h1>

        <div className="hidden md:flex gap-8">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      </div>
    </nav>
  );
}