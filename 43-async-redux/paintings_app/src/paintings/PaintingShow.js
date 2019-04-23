import React from 'react';

const PaintingShow = ({ painting, handleDelete }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={painting.image} alt={painting.slug} />
      </div>
      <div className="content">
        <div className="header">{painting.title}</div>
        <div className="meta">{painting.date}</div>
        <div className="meta">
          {painting.dimensions.width} in. x {painting.dimensions.height} in.
        </div>
        <div className="meta">{painting.museum.name}</div>
        <div className="description">
          by {painting.artist.name}
          <p>
            {painting.artist.birthday} - {painting.artist.deathday}
          </p>
          <p>{painting.artist.hometown}</p>
        </div>
        <div
          onClick={handleDelete}
          className="ui basic red right aligned button"
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default PaintingShow;
