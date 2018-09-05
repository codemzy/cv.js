import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is an example CV' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
      <link rel="stylesheet" href="./static/style.css" />
  </Head>
    <header>
      <nav className="navbar navbar-light bg-white flex-row-reverse">
        <form className="form-inline">
          <a href="https://codemzy.github.io/cv.js" className="btn btn-outline-primary">Create CV</a>
        </form>
      </nav>
    </header>

    { children }

  </div>
)