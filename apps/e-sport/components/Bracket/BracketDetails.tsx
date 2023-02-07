// import {
//   SingleEliminationBracket,
//   Match,
//   SVGViewer,
//   createTheme
// } from "@g-loot/react-tournament-brackets";
import axios from "axios";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { simpleSmallBracket } from "../../simpleSmallBracket";
import { useWindowSize } from "../Hooks/useWindowSize";
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  import("@g-loot/react-tournament-brackets");
}
const SingleEliminationBracket = dynamic(
  async () => {
    const mod = await import("@g-loot/react-tournament-brackets");
    return mod.SingleEliminationBracket;
  },
  { ssr: false }
);
const Match = dynamic(
  async () => {
    const mod = await import("@g-loot/react-tournament-brackets");
    return mod.Match;
  },
  { ssr: false }
);
const SVGViewer = dynamic(
  async () => {
    const mod = await import("@g-loot/react-tournament-brackets");
    return mod.SVGViewer;
  },
  { ssr: false }
);
// const createTheme = dynamic(
//   async () => {
//     const mod = await import("@g-loot/react-tournament-brackets");
//     return mod.createTheme;
//   },
//   { ssr: false }
// );
// const GlootTheme = createTheme({
//   textColor: { main: "#000000", highlighted: "#F4F2FE", dark: "#707582" },
//   matchBackground: { wonColor: "#2D2D59", lostColor: "#1B1D2D" },
//   score: {
//     background: {
//       wonColor: `#10131C`,
//       lostColor: "#10131C"
//     },
//     text: { highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94" }
//   },
//   border: {
//     color: "#292B43",
//     highlightedColor: "RGBA(152,82,242,0.4)"
//   },
//   roundHeader: { backgroundColor: "#3B3F73", fontColor: "#F4F2FE" },
//   connectorColor: "#3B3F73",
//   connectorColorHighlight: "RGBA(152,82,242,0.4)",
//   svgBackground: "#0F121C"
// });

 const BracketDetails = () => {
  const {width,height}=useWindowSize()
  const [BracketList,setBracketList]=useState([])

  const getBracket=async()=>{
    axios.get(`http://localhost:8081/getBracket/${Cookies.get("_t_id")}`).then((res)=>{
    setBracketList(res.data)
   }).catch((err)=>{
    console.log(err)
   })
  }
  useEffect(()=>{
   getBracket(),
   ()=>getBracket()
  },[])
  return(
    <div>
      {
        BracketList.length>0?
        <SingleEliminationBracket
    // theme={GlootTheme}
    matches={BracketList}
      // @ts-ignore
    matchComponent={Match}

    svgWrapper={({ children, ...props }:any) => (
      <SVGViewer
        width={width}
        height={height/2}
        background="transparent"
        SVGBackground="transparent"

        {...props}
      >
        {children}
      </SVGViewer>
    )}
   
  />:null
      }
    
  </div>
  )

    };




export default BracketDetails