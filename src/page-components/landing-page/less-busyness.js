import React, { useEffect, useRef, useState } from "react";
import style from "./less-busyness.module.scss";
import "./videostyles.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PlayIconVideo from "../../svg/PlayIconVideo";
import PauseIconVideo from "../../svg/PauseIconVideo";

const LessBusyness = () => {
  const [open, setOpen] = useState(false);
  const [fromUrlParam, setFromUrlParam] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const modalVideoRef = useRef(null);
  const previewVideoRef = useRef(null);
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
    setFromUrlParam(false);
    setIsPlaying(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("intro_video")) {
      setFromUrlParam(true);
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    const video = previewVideoRef.current;
    if (!video) return undefined;

    video.pause();
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35, rootMargin: "0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open && modalVideoRef.current) {
      if (fromUrlParam) {
        modalVideoRef.current.muted = false;
        modalVideoRef.current.play();
        setIsPlaying(true);
      } else {
        modalVideoRef.current.muted = true;
        modalVideoRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [open, fromUrlParam]);

  const togglePlayPause = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className={style.shelfgradientwrap}>
        {/* <div className={style.videobackground}>
                   <video
                  width="100%"
                  height="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={style.reactPlayer}
                >
                  <source
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/video-bg-compressed-main1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
          </div> */}

        <div className={`${style.shelfgradient} ${style.videoOverlyWrap} `}>
          <div className={style.lessContainers}>
            <h3>More Business - Less Busyness</h3>
             <p>
              You can send a quote in just a few clicks, convert it into a
              project, and assign team members instantly.
              <br />
              Project timelines, expenses, client chats, invoices - it’s all
              right here.
            </p>

            <div className={style.videoWrapper}>
              <div className={style.videoWrapper1}></div>
              <div className={style.videoWrapperv}>
                <video
                  ref={previewVideoRef}
                  width="100%"
                  height="100%"
                  poster="https://memate-website.s3.ap-southeast-2.amazonaws.com/videoposter-memate-bg.jpg"
                  muted
                  loop
                  playsInline
                  preload="none"
                  className={style.reactPlayer}
                >
                  <source
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Memate+Video+-+revised.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className={style.videopopupwrap}>
                  <button
                    className={style.videoPlayIcon}
                    onClick={onOpenModal}
                    aria-label="Play video"
                  >
                    <PlayIconVideo />
                  </button>
                </div>
              </div>
              <div className={style.videoWrapper2}></div>
            </div>
          </div>
        </div>

        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            modal: style.customModal,
          }}
        >
          <div className={style.modalVideoContainer}>
            <video
              ref={modalVideoRef}
              width="100%"
              height="100%"
              poster="https://memate-website.s3.ap-southeast-2.amazonaws.com/videoposter_p3khgg.png"
              style={{ backgroundColor: "white", borderRadius: "40px" }}
              loop
              autoPlay
              playsInline
              className={style.reactPlayer}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Memate+Video+-+revised.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {fromUrlParam && (
              <button
                className={style.videoPlayIconIn}
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <PauseIconVideo /> : <PlayIconVideo />}
              </button>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default LessBusyness;
