import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  const post = {
    tituloPrincipal: 'Gravidade: Força x Geometria',
    tituloArtigo: 'De Newton a Einstein',
    autor: 'João Silva',
    data: '3 de março de 2026',
    dataISO: '2026-03-03',
    conteudo: [
      'Durante séculos, a gravidade foi compreendida a partir do paradigma proposto por Isaac Newton. Segundo ele, a gravidade é uma força de atração que atua entre dois corpos com massa. Essa força depende da massa dos objetos e da distância entre eles. Foi com essa ideia que conseguimos explicar o movimento dos planetas, a queda dos corpos e até prever órbitas com grande precisão.',
      'No início do século XX, Albert Einstein apresentou uma nova visão. Para ele, a gravidade não é exatamente uma força, mas o resultado da curvatura do espaço-tempo causada pela presença de massa e energia. Objetos seguem essa curvatura, como se estivessem se movendo sobre uma superfície deformada. Essa teoria explica fenômenos que a física clássica não conseguia, como a dilatação do tempo gravitacional e a curvatura da luz próxima a estrelas massivas.'
    ],
    imagem: {
      src: 'https://revistaplaneta.com.br/wp-content/uploads/sites/3/2021/07/lentegravitacional.jpg',
      alt: 'Imagem de uma lente gravitacional representando o conceito da geometria do espaço-tempo.',
      legenda: 'Imagem de uma lente gravitacional representando o conceito da geometria do espaço-tempo.'
    }
  }

  const linksNavegacao = [
    { nome: 'Home', href: '#home' },
    { nome: 'Imagem', href: '#imagem' },
    { nome: 'Artigos', href: '#artigos' }
  ]

  const postsRelacionados = [
    {
      titulo: 'O que é espaço-tempo?',
      link: 'https://pt.wikipedia.org/wiki/Espa%C3%A7o-tempo'
    },
    {
      titulo: 'Como funcionam os buracos negros?',
      link: 'https://pt.wikipedia.org/wiki/Buraco_negro'
    },
    {
      titulo: 'A história da relatividade',
      link: 'https://pt.wikipedia.org/wiki/Relatividade_geral'
    }
  ]

  return (
    <>
      <Header titulo={post.tituloPrincipal} />
      <Navigation links={linksNavegacao} />

      <main id="home">
        <Article
          titulo={post.tituloArtigo}
          autor={post.autor}
          data={post.data}
          dataISO={post.dataISO}
          conteudo={post.conteudo}
          imagem={post.imagem}
        />

        <Sidebar posts={postsRelacionados} />
      </main>

      <Footer texto="© 2026 - Todos os direitos reservados." />
    </>
  )
}

export default App