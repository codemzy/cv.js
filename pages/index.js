// components
import Layout from '../components/layout';
import Section from '../components/section';

// data
import cvData from '../data/cv.json';

// categories
function Categories(props) {
  const categories = props.list;
  const listItems = categories.map((category, i) =>
    <span className="badge badge-dark mr-1" key={i}>{category}</span>
  );
  return (
    <div>{listItems}</div>
  );
}


// cv
export default () => (
  <Layout title={cvData.name}>
    <div className="container">
      <h1 className="display-1 font-weight-bold">{cvData.name}</h1>
      <div className="d-flex justify-content-between">
        <Categories list={cvData.categories} />
        <div><span className="badge badge-pill badge-success">Available {cvData.availability}</span></div>
      </div>
      <hr/>
      <Section title='Profile'>
        <p>An introduction to the person. Keep it snappy, keep it on point, include key facts.</p>
      </Section>
      <Section title='Experience'>
      </Section>
      <Section title='Education'>
      </Section>
      <Section title='Skills'>
      </Section>
      <Section title='Interests'>
      </Section>
    </div>
  </Layout>
);