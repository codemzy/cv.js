export default ({ children, title = '' }) => (
  <section className="mt-5 pb-4">
    <h2 className="font-weight-bold text-uppercase pb-3">{title}</h2>
    { children }
  </section>
)