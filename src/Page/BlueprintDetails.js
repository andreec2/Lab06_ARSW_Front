import React from 'react';
import BlueprintCanvas from './BlueprintsCanvas'; 

const BlueprintDetails = ({ selectedBlueprint }) => {
  return (
    <div>
      <h3>Detalles del Blueprint: {selectedBlueprint.name}</h3>

      <div className="canvas-container">
        <BlueprintCanvas className="canvas" points={selectedBlueprint.points} />
      </div>
    </div>
  );
};

export default BlueprintDetails;
