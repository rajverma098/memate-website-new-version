"use client";

export default function LogoImageBox({ image }) {
 

  return (
    <img
      src={image}
      alt="Logo"
      style={{
        maxWidth: "100%",
        height: "auto",
        margin: "0 auto",
      }}
    />
  );
}
