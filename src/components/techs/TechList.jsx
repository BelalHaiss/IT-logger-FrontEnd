import React from 'react';

import { connect } from 'react-redux';
import { getTheTechs } from '../../actions/techActions';
const TechList = ({ tech: { loading, techs } }) => {
  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => (
      <option key={tech._id} value={tech._id}>
        {' '}
        {tech.firstName + ' ' + tech.lastName}
      </option>
    ))
  );
};
const mapStateToProps = (state) => ({
  tech: state.tech
});
export default connect(mapStateToProps, { getTheTechs })(TechList);
