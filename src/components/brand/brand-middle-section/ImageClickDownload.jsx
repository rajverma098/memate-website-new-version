"use client";

export default function ImageClickDownload({ image, alt,title, download }) {
  const handleClick = () => {
    window.open(download, "_self");
  };

  return (
    <img
      src={image}
        alt={alt}
           title={title}
      onClick={handleClick}
      style={{
        cursor: "pointer",
        maxWidth: "100%",
        height: "auto",
        margin: "0 auto",
      }}
    />
  );
}


