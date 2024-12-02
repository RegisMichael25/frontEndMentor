import BtnCart from "./btnCart";

export default function Conteudo() {
  return(
    <>
      <div className="p-8"> 
        <p className="tracking-[.25rem] font-semibold text-Dark-grayish-blue">PERFUME</p>
        <h1 className="text-4xl font-[Fraunces] font-bold text-Very-dark-blue">Gabrielle Essence Eau De Parfum</h1>
        <p className="text-Dark-grayish-blue text-sm font-semibold py-2">A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>

        <div className="flex gap-4 p-2">
          <h2 className="text-4xl font-[Fraunces] font-semibold text-Dark-cyan ">$149.99</h2> <p className=" text-Dark-grayish-blue line-through">$169.99</p>
        </div>
          <BtnCart />
      </div>
    </>
  );
}