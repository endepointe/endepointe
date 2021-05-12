
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-end">
      <div className="menu">
        <input type="checkbox" id="toggle" />
        <label id="show-menu" htmlFor="toggle">
          <div className="btn bottom-4 right-4">
            <i className="material-icons md-36 toggleBtn menuBtn">menu</i>
            <i className="material-icons md-36 toggleBtn closeBtn">close</i>
          </div>
          <div className="btn">
            <i className="material-icons md-36">code</i>
          </div>
          <div className="btn">
            <i className="material-icons md-36">email</i>
          </div>
          <div className="btn">
            <i className="material-icons md-36">insert_emoticon</i>
          </div>
        </label>
      </div>
    </footer>
  )
}