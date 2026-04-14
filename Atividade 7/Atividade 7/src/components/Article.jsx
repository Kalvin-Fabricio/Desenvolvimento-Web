function Article({ titulo, autor, data, dataISO, conteudo, imagem }) {
  return (
    <article>
      <h2>{titulo}</h2>

      <p>Por {autor}</p>

      <p>
        Publicado em <time dateTime={dataISO}>{data}</time>
      </p>

      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <section id="imagem">
        <figure>
          <img
            src={imagem.src}
            alt={imagem.alt}
            width="400"
          />
          <figcaption>{imagem.legenda}</figcaption>
        </figure>
      </section>
    </article>
  )
}

export default Article