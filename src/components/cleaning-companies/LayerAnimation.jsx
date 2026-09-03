"use client";

import Image from "next/image";
import EnquiryFunnerlIcon from "../../svg/EnquiryFunnerlIcon";
import PaymentReceivedIcon from "../../svg/PaymentReceivedIcon";
import CleaningTechIcon from "../../svg/CleaningTechIcon";
import { motion } from "framer-motion";

export default function LayerAnimation() {
  return (
    <div className="rightLayoutLayers">
      <div className="topLeftLayers">
        <motion.div
          className="demo-bubble positionValue"
          animate={{
            y: [0, -12, 0, 10, 0],
            x: [0, 4, 0, -4, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <strong>Let us show you</strong>

          <span>
            <em>▶</em> 10 Min Demo →
          </span>
        </motion.div>
        <motion.div
          className="enquiries-card positionValue"
          animate={{
            y: [0, -10, 0, 8, 0],
            x: [0, -3, 0, 3, 0],
            rotate: [0, -1, 0, 1, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <div className="card-small-icon">
            <EnquiryFunnerlIcon />
          </div>
          <div>
            <span className="card-label">Enquiries</span>

            <div className="enquiry-value">
              <strong>15</strong>
              <small>↗ 10%</small>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="middleLayoutLayers">
          <Image
            alt="Your competitors are still texting. That's your advantage."
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaningBusinessGirl-img1.png"
            priority
            placeholder="empty"
            width={538}
            height={474}
          />
      </div>
      <div className="bottomRightLayers">
        <motion.div
          className="positionValue paymentCardWrap"
          animate={{
            y: [0, -11, 0, 9, 0],
            x: [0, 3, 0, -3, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <Image
            alt="Dollar"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/dolor-img.png"
            priority
            placeholder="empty"
            width={65}
            height={46}
          />
          <div className="payment-card">
            <div className="payment-icon">
              <PaymentReceivedIcon />
            </div>
            <div>
              <span className="payment-label">
                Payment Received
              </span>
              <strong>$1,385</strong>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="job-completed positionValue"
          animate={{
            y: [0, -9, 0, 7, 0],
            x: [0, -3, 0, 3, 0],
            rotate: [0, -1, 0, 1, 0],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        >
          <span className="check-icon">
            <CleaningTechIcon />
          </span>
          Job Complete
        </motion.div>
      </div>
    </div>
  );
}