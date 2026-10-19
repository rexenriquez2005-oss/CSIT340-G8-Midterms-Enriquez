export default function Sidebar({ author }) {
  return (
    <nav className="row-span-3 flex flex-col bg-[#5C4F4A] p-12 text-[#EDE9E6]">
      <h1 className="text-3xl font-bold">Git Quickstart</h1>
      <ul className="mt-10 text-xl">
        <li className="border-l-4 border-[#C9996B] py-2 pl-4">Create</li>
        <li className="border-l-4 border-[#C9996B] py-2 pl-4">Rename</li>
        <li className="border-l-4 border-[#C9996B] py-2 pl-4">Connect</li>
        <li className="border-l-4 border-[#C9996B] py-2 pl-4">Upload</li>
      </ul>
      <p className="mt-auto text-xl">Written by {author}</p>
    </nav>
  );
}