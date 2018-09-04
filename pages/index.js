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

// profile
function Profile(props) {
  const paragraphs = props.profile.map((paragraph, i) => {
    return <p key={i}>{paragraph}</p>;
  });
  return (
    <Section title='Profile'>
      {paragraphs}
    </Section>
  );
}

// experience
function Experience(props) {
  const experiences = props.experience.map((experience, i) => {
    return (
      <div className="row pt-3" key={i}>
        <div className="col-md-4 col-lg-3"><h5 className="text-muted">{experience.time}</h5></div>
        <div className="col-md-8 col-lg-9">
          <h4>{experience.place}</h4>
          <h6 className="font-italic text-primary">{experience.role}</h6>
          <p>{experience.description}</p></div>
      </div>
    );
  });
  return (
    <Section title='Experience'>
      {experiences}
    </Section>
  );
};

// education
function Education(props) {
  const results = props.education.map((result, i) => {
    return (
      <div className="row pt-3" key={i}>
        <div className="col-md-4 col-lg-3"><h5 className="text-muted">{result.time}</h5></div>
        <div className="col-md-8 col-lg-9">
          <h4>{result.qualification}</h4>
          { result.grade ? <h6 className="font-italic text-primary">{result.grade}</h6> : false }
          <p>{result.from}</p></div>
      </div>
    );
  });
  return (
    <Section title='Education'>
      {results}
    </Section>
  );
};


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
      <Profile profile={cvData.profile} />
      <Experience experience={cvData.experience} />
      <Education education={cvData.education} />
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