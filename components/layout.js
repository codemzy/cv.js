import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is an example CV' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
    </Head>
    <header>
      <nav className="navbar navbar-light bg-white flex-row-reverse">
        <form className="form-inline">
          <button className="btn btn-primary" type="button">Create CV</button>
        </form>
      </nav>
    </header>

    { children }

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)