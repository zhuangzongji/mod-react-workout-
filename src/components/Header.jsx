function Header(){
    return(
        <header>
    {/* 最上方區塊：登入註冊按鈕 */}
    {/* 中間區塊：Logo、搜尋框與選單按鈕 */}
    <div className="middle-bar">
      <a className="header-logo" href="index.html">
        WORKOUT PLAN
      </a>
    </div>
    {/* 最下方區塊：導航連結 */}
    <nav className="bottom-nav">
      <a href="monday.html">MONDAY</a>
      <a href="tuesday.html">TUESDAY</a>
      <a href="wednesday.html">WEDNESDAY</a>
      <a href="thursday.html">THURSDAY</a>
      <a href="friday.html">FRIDAY</a>
      <a href="holdon.html">SATURDAY</a>
      <a href="holdon.html">SUNDAY</a>
    </nav>
  </header>
    );
}

export default Header;