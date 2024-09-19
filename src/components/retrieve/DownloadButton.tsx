const DownloadButton = ({ blob, fileName }: { blob: Blob, fileName: string }) => {
  const handleDownload = () => {
    if (!blob) return;

    // Create an object URL for the blob
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName || 'downloaded_file'; // Set filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!blob}
      className={`underline ${!blob ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'}`}
    >
      Download File
    </button>
  );
};

export default DownloadButton;
