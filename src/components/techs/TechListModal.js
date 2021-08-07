import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { getTheTechs } from '../../actions/techActions';
import { connect } from 'react-redux';
const TechListModal = ({ getTheTechs, tech, tech: { techs, loading } }) => {
  useEffect(() => {
    getTheTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='modal' id='tech-list-modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech._id} />)}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tech: state.tech
});
export default connect(mapStateToProps, { getTheTechs })(TechListModal);
