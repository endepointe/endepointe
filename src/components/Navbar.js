
export default function Navbar() {
  return (
    <nav className="bg-green-900 flex flex-row flex-nowrap">
      <div
        id="logo"
        className="flex-2 justify-between">
        <h3
          className="px-1 text-5xl font-black"
          id="ende">ENDE</h3>
        <h3
          id="pointe"
          className="transform rotate-180 text-5xl leading-none px-1">POINTE</h3>
      </div>
      <ul className="flex-1">
        <li className="flex justify-end">
          {/* <a href="/"
            className=""></a> */}
        </li>
      </ul>
    </nav>
  )
}