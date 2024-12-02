import { IoCartOutline } from "react-icons/io5";

export default function BtnCart(){
  return(
    <>
      <button className="flex justify-center gap-3 bg-Dark-cyan w-11/12 p-3 rounded-xl text-White font-semibold">
        <IoCartOutline /> 
        Add to Cart
      </button>
    </>
  );
}