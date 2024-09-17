import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundImage1 from "../assets/images/image1.jpg";
import BackgroundImage2 from "../assets/images/image2.jpg";
import BackgroundImage3 from "../assets/images/image3.jpg";
import BackgroundImage4 from "../assets/images/image4.jpg";
import BackgroundImage5 from "../assets/images/image5.jpg";
import BackgroundImage6 from "../assets/images/image6.jpg";
import BackgroundImage7 from "../assets/images/image7.jpg";
import BackgroundImage8 from "../assets/images/image8.jpg";
import BackgroundImage9 from "../assets/images/image9.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import video from "../assets/images/herobg.mov";

// Manually add info for each card
const cardData = [
  {
    title: "Luminara Beauty",
    text: "Illuminate Your Essence",
    image: BackgroundImage2,
    video: video,
    description:
      "In this captivating brand video, we showcase Luminara Beauty’s luxurious skincare line that transforms your glow. The visuals highlight the elegance and purity of the products, presenting them as essential for anyone looking to enhance their natural radiance.",
  },
  {
    title: "Velocity",
    text: "Push Beyond Limits",
    image: BackgroundImage7,
    video: video,
    description:
      "Our dynamic video for Velocity captures the spirit of pushing boundaries with state-of-the-art fitness gear. Through high-energy visuals and inspiring narratives, we portray the brand as a pioneer in performance enhancement, motivating viewers to reach new heights.",
  },
  {
    title: "Bella Nova",
    text: "Redefine Your Beauty",
    image: BackgroundImage3,
    video: video,
    description:
      "Bella Nova’s brand video showcases a transformative beauty experience. With a focus on elegance and sophistication, we highlight the luxurious makeup collection and its impact on enhancing natural beauty. The visuals create a sense of refinement and allure.",
  },
  {
    title: "MarketJoy",
    text: "Gateway to Gourmet Goodness",
    image: BackgroundImage5,
    video: video,
    description:
      "Our video for MarketJoy captures the essence of gourmet indulgence. Through rich, cinematic imagery, we present their premium artisanal foods, emphasizing their unique qualities and the joy of culinary exploration.",
  },
  {
    title: "EverGlow",
    text: "Unveil the Secret",
    image: BackgroundImage4,
    video: video,
    description:
      "In this engaging brand video, EverGlow’s natural beauty products are portrayed as the key to radiant skin. The visuals focus on purity and rejuvenation, presenting the products in an aspirational and compelling light.",
  },
  {
    title: "Summit Trails",
    text: "Conquer New Heights",
    image: BackgroundImage1,
    video: video,
    description:
      "Summit Trails' brand video highlights their rugged outdoor gear designed for adventurers. Through action-packed sequences and stunning landscapes, we convey the brand’s commitment to quality and exploration.",
  },
  {
    title: "PureSilk",
    text: "Indulge in Luxurious Hair Care",
    image: BackgroundImage6,
    video: video,
    description:
      "Our video for PureSilk focuses on the indulgent experience of their silk-infused hair care products. With smooth, elegant visuals, we present the brand as the epitome of luxury and effectiveness in hair care.",
  },
  {
    title: "Titan Motors",
    text: "Accelerate into the Future",
    image: BackgroundImage8,
    video: video,
    description:
      "The Titan Motors brand video features high-performance vehicles with futuristic design. Through sleek visuals and innovative storytelling, we highlight the brand’s forward-thinking approach and style.",
  },
  {
    title: "FreshHarvest",
    text: "Taste the Freshness",
    image: BackgroundImage9,
    video: video,
    description:
      "FreshHarvest's video showcases their farm-to-table produce with vibrant, fresh imagery. We focus on the quality and taste of their products, emphasizing the brand’s dedication to delivering the freshest ingredients.",
  },
];

function Portfolio() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const modalRef = useRef(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPlaying(false); // Reset video play state
  };

  const handleClose = () => {
    setSelectedCard(null);
    setIsPlaying(false); // Reset video play state
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative h-full bg-stone-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden group shadow-lg cursor-pointer"
            onClick={() => handleCardClick(card)}
            transition={{ duration: 0.3 }}
          >
            <img
              src={card.image}
              alt={`Card ${index + 1}: ${card.title}`}
              className="w-full h-[20rem] md:h-[35rem] object-cover overflow-hidden transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-[2em] font-text">{card.title}</h3>
              <p className="text-[1em] font-text text-center">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleBackdropClick}
          >
            <motion.div
              ref={modalRef}
              className="relative shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-[100%] md:w-[50rem] flex flex-col justify-center items-center text-stone-200">
                {isPlaying ? (
                  <video
                    src={selectedCard.video}
                    controls
                    className="h-[18rem] md:h-[20rem] w-[50rem] object-cover mb-4"
                    aria-label={`Video of ${selectedCard.title}`}
                  />
                ) : (
                  <>
                    <img
                      src={selectedCard.image}
                      alt={`Preview of ${selectedCard.title}`}
                      className="h-[18rem] md:h-[20rem] w-[50rem] object-cover mb-4"
                    />
                    <FaPlay
                      onClick={handlePlayClick}
                      size={60}
                      color="white"
                      className="absolute top-1/4 cursor-pointer hover:scale-[150%] transition-transform duration-300"
                      aria-label="Play video"
                    />
                  </>
                )}
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-[2em] font-text mb-2">
                    {selectedCard.title}
                  </h2>
                  <p className="text-[1em] font-text italic">
                    {selectedCard.text}
                  </p>
                  <p className="text-[1em] font-text w-[90%] md:w-[70%] text-center">
                    {selectedCard.description}
                  </p>
                </div>
              </div>
              <AiOutlineClose
                onClick={handleClose}
                size={40}
                color="white"
                className="cursor-pointer w-[100%] mt-[5%] hover:scale-[200%] transition-transform duration-300"
                aria-label="Close modal"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;
