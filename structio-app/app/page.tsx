"use client";
import { Button } from "@mui/material";
import { firestore } from "../firebase";

import { collection, addDoc } from "firebase/firestore";
export default function Home() {
 async function write() {
  const docRef = await addDoc(collection(firestore, "cities"), {
   name: "Tokyo",
   country: "Japan",
  });
  console.log("Document written with ID: ", docRef.id);
 }
 return (
  <>
   <Button onClick={write}>Add</Button>
  </>
 );
}
