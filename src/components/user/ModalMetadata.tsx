import React from "react";

export default function ModalMetadata() {
  return (
    <div className="previewModal--detailsMetadata">
      <div className="previewModal--tags">
        <span className="previewModal--tags-label">Cast:</span>
        <span className="tag-item">
          <a href="/"> Tom Cruise, </a>
        </span>
        <span className="tag-item">
          <a href="/">Jamie Foxx, </a>
        </span>
        <span className="tag-item">
          <a href="/">Jada Pinkett Smith, </a>
        </span>
        <span className="tag-more">
          <a href="/">more</a>
        </span>
      </div>
      <div className="previewModal--tags">
        <span className="previewModal--tags-label">Genres:</span>
        <span className="tag-item">
          <a href="/"> Romatic TV Comedies, </a>
        </span>
        <span className="tag-item">
          <a href="/">Sitcoms, </a>
        </span>
        <span className="tag-item">
          <a href="/">Comedy Programmes</a>
        </span>
      </div>
      <div className="previewModal--tags">
        <span className="previewModal--tags-label">This programme is:</span>
        <span className="tag-item">
          <a href="/"> Sentimental</a>
        </span>
      </div>
    </div>
  );
}
