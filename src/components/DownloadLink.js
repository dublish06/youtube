import React from "react";

const DownloadLink = ({ link }) => {
  if (!link) return null;

  return (
    <div className="download-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        Click here to download
      </a>
    </div>
  );
};

export default DownloadLink;
