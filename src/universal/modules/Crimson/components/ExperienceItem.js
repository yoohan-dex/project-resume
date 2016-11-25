import React, { PropTypes } from 'react';
import Section from './Section';
const ExperienceItem = props => {
  const { exp } = props;

  const renderDescription = desc =>
    <dd className="exp-description-item">{desc}</dd>;
  return (
    <Section item section={exp} startTime={exp.start} endTime={exp.end}>
      <dl className="exp-description">
        <dt className="exp-place">{exp.place}</dt>
        {exp.description.map(renderDescription)}
        <dd className="exp-stack"></dd>
      </dl>
    </Section>
  );
};

ExperienceItem.propTypes = {
  exp: PropTypes.object,
};

export default ExperienceItem;
