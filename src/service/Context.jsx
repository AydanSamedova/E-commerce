import { createContext , useState, useEffect} from "react";
import image from "../images/products/Rectangle 364 (13).jpg";
import image1 from "../images/products/Rectangle 364 (1).jpg";
import image2 from "../images/products/Rectangle 364 (2).jpg";
import image3 from "../images/products/Rectangle 364 (3).jpg";
import image4 from "../images/products/Rectangle 364 (4).jpg";
import image5 from "../images/products/Rectangle 364 (5).jpg";
import image6 from "../images/products/Rectangle 364 (6).jpg";
import image7 from "../images/products/Rectangle 364 (7).jpg";
import image9 from "../images/products/Rectangle 364 (9).jpg";
import image10 from "../images/products/Rectangle 364 (10).jpg";
import image11 from "../images/products/Rectangle 364 (11).jpg";
import image12 from "../images/products/Rectangle 364.png";

//context
export const Cards = createContext({});

//provider
export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([
        {id:1, image: image1, discount: true, delivery: true },
        {id:2, image: image2, discount: false, delivery: true },
        {id:3, image: image3, discount: true, delivery: true },
        {id:4, image: image4, discount: true, delivery: false },
        {id:5, image: image5, discount: false, delivery: true },
        {id:6, image: image6, discount: false, delivery: false },
        {id:7, image: image7, discount: true, delivery: true },
        {id:8, image: image, discount: false, delivery: false },
        {id:9, image: image9, discount: false, delivery: false },
        {id:10, image: image10, discount: false, delivery: false },
        {id:11, image: image11, discount: false, delivery: false },
        {id:12, image: image12, discount: false, delivery: false },
      ]);
  

  

   
  
   

return <Cards.Provider value={{cards}}>{children}</Cards.Provider>;
};

