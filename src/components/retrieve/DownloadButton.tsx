
const DownloadButton = ({ filePath }: { filePath: string }) => {
  const handleDownload = () => {
    // Ensure the filePath is valid
    if (!filePath) return;

    const link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank'; // Open the link in a new tab
    link.download = ''; // This attribute is used for setting the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!filePath}
      className={`underline ${!filePath ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'}`}
    >
      Download File
    </button>
  );
};

export default DownloadButton;
