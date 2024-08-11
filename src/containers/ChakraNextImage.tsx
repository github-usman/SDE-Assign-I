import { chakra, layout } from "@chakra-ui/react";
import Image from "next/image";

export default chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt","priority"].includes(prop),
});