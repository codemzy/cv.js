export default ({ children, title = '' }) => (
  <section>
    <h2>{title}</h2>
    { children }
  </section>
)