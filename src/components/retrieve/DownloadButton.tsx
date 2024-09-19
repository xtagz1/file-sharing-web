const DownloadButton = ({ blob, fileName, fileUrl }: { blob: Blob | null; fileName: string; fileUrl: string }) => {
  const buttonText = blob ? 'Download File' : 'Open URL';

  const handleDownload = () => {
    if (blob) {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName || 'downloaded_file';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (fileUrl) {
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={`underline ${!blob && !fileUrl ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'}`}
      disabled={!blob && !fileUrl}
    >
      {buttonText}
    </button>
  );
};

export default DownloadButton;
