"use client";
import { Button } from "@mui/material";
import {useState} from "react";
import { firestore } from "../firebase";

import { collection, addDoc, getDoc, getDocs, query} from "firebase/firestore";
export default function Home() {
    const[customers, setCustomers] = useState([]);
 async function write() {
  const docRef = await addDoc(collection(firestore, "cities"), {
   name: "Tokyo",
   country: "Japan111",
  });
  console.log("Document written with ID: ", docRef.id);
 }
 
 async function getCustomers(){
    const docs = await getDocs(query(collection(firestore, "customers")));
    const customerList= [];
    docs.forEach((doc) => {
        customerList.push({
            name: doc.id,
            ...doc.data(),
        })
    });
    setCustomers(customerList);
    console.log(customerList);
 }
 
 return (
  <>
   <Button onClick={write}>Add</Button>
   <Button onClick={getCustomers}>get customers</Button>
  </>
 );
}
