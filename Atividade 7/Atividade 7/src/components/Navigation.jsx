function Navigation({ links }) {
  return (
    <nav aria-label="Menu principal">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.nome}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation