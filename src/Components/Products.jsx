import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const product = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description: `We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.`,
      live: true,
      case: true,
    },
    {
      title: "Layout Land",
      description: `An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.`,
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description: `We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.`,
      live: true,
      case: true,
    },
    {
      title: "Maniv",
      description: `A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.`,
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description: `Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.`,
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 20);
  };
  return (
    <div className="mt-20 relative">
      {product.map((elem, index) => {
        return <Product key={index} count={index} mover={mover} val={elem} />;
      })}

      <div className="w-full h-full absolute top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window w-[30vw] h-[20rem] absolute top-0 left-1/2 -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ease : [0.76, 0, 0.24, 1],duration : 0.5}}
            className="w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ease : [0.76, 0, 0.24, 1],duration : 0.5}}
            className="w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ease : [0.76, 0, 0.24, 1],duration : 0.5}}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ease : [0.76, 0, 0.24, 1],duration : 0.5}}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ease : [0.76, 0, 0.24, 1],duration : 0.5}}
            className="w-full h-full bg-sky-500"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ease : [0.76, 0, 0.24, 1],duration : 0.5}}
            className="w-full h-full bg-sky-600"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
