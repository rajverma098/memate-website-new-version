"use client";

import Image from "next/image";
import { useState } from "react";
import DownloadIcon from "../../../svg/downloadIcon";

export default function LogoDownload({ image, downloads }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="logo-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Image
        src={image}
        alt="Brand Logo"
        width={470}
        height={263}
        className="logo-img"
        onClick={() => setOpen(!open)} // mobile support
      />

      {open && (
        <div className="download-popup">
          <p className="popup-title">Download</p>

          {downloads?.svg && (
            <a href={downloads.svg} download>
              <span>SVG</span>
              <span><DownloadIcon /></span>
            </a>
          )}

          {downloads?.ai && (
            <a href={downloads.ai} download>
              <span>AI</span>
              <span><DownloadIcon /></span>
            </a>
          )}

          {downloads?.pdf && (
            <a href={downloads.pdf} download>
              <span>PDF</span>
              <span><DownloadIcon /></span>
            </a>
          )}

          {downloads?.png && (
            <a href={downloads.png} download>
              <span>PNG</span>
              <span><DownloadIcon /></span>
            </a>
          )}

          {downloads?.jpg && (
            <a href={downloads.jpg} download>
              <span>JPG</span>
              <span><DownloadIcon /></span>
            </a>
          )}

          {downloads?.gif && (
            <a href={downloads.gif} download>
              <span>GIF</span>
              <span><DownloadIcon /></span>
            </a>
          )}
          {downloads?.fig && (
            <a href={downloads.fig} download>
              <span>FIG</span>
              <span><DownloadIcon /></span>
            </a>
          )}

          {downloads?.zip && (
            <>
   
              <a href={downloads.zip} download className="zip">
                <span>All files ZIP</span>
                <span><DownloadIcon /></span>
              </a>
               <div className="dividerBG"></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
