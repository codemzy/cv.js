import Layout from '../components/layout'

export default () => (
  <Layout title='The Name'>
    <div className="container">
      <h1 className="display-1">Name Surname</h1>
      <p><span className="badge badge-dark">HTML</span> <span className="badge badge-dark">JavaScript</span> <span className="badge badge-dark">ReactJS</span></p>
      <hr/>
      <section>
        <h2>Profile</h2>
        <p>An introduction to the person. Keep it snappy, keep it on point, include key facts.</p>
      </section>
      <section>
        <h2>Experience</h2>
      </section>
      <section>
        <h2>Qualifications</h2>
      </section>
      <section>
        <h2>Skills</h2>
      </section>
      <section>
        <h2>Interests</h2>
      </section>
    </div>
  </Layout>
)