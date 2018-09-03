import Layout from '../components/layout'

export default () => (
  <Layout title='The Name'>
    <div className="container">
      <h1 className="display-1 font-weight-bold">Name Surname</h1>
      <div className="d-flex justify-content-between">
        <div><span className="badge badge-dark">HTML</span> <span className="badge badge-dark">JavaScript</span> <span className="badge badge-dark">ReactJS</span></div>
        <div><span className="badge badge-pill badge-success">Available Now</span></div>
      </div>
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