import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { deleteTheTechs } from '../../actions/techActions';
const TechItem = ({ tech, deleteTheTechs }) => {
  const deleteTech = async (e) => {
    const myModal = M.Modal.getInstance(
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement
    );

    myModal.close();
    await deleteTheTechs(tech._id);
  };
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName + '   '}
        {tech.lastName}
        <a href='#!' onClick={deleteTech} className='secondary-content'>
          <i className='material-icons grey-item'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTheTechs })(TechItem);
