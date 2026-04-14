function Sidebar({ posts }) {
  return (
    <aside id="artigos">
      <h3>Artigos Relacionados</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.titulo}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar