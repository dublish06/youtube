import React, { useState } from "react";
import Header from "./components/Header";
import DownloaderForm from "./components/DownloaderForm";
import DownloadLink from "./components/DownloadLink";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [downloadLink, setDownloadLink] = useState("");

  return (
    <ThemeProvider>
      <Header />
      <DownloaderForm onDownloadSuccess={setDownloadLink} />
      <DownloadLink link={downloadLink} />
    </ThemeProvider>
  );
};

export default App;
