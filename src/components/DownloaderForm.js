import React, { useState } from "react";
import axios from "axios";

const DownloaderForm = ({ onDownloadSuccess }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [format, setFormat] = useState("mp4");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!videoUrl) {
      alert("Please enter a valid YouTube URL");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("YOUR_RAPID_API_ENDPOINT", {
        params: { url: videoUrl, format },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        },
      });
      onDownloadSuccess(response.data.download_url);
    } catch (error) {
      console.error("Error generating download link:", error);
      alert("Failed to generate download link.");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Enter YouTube URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="mp4">MP4</option>
        <option value="mp3">MP3</option>
      </select>
      <button onClick={handleDownload} disabled={loading}>
        {loading ? "Processing..." : "Download"}
      </button>
    </div>
  );
};

export default DownloaderForm;
