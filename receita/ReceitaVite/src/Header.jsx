function Header (){
  const imageReceive = '../images/image-omelette.jpeg';

  return(
    <>
      <div className="cabecalho ">
        <picture>
          <img src={imageReceive} alt="Image Receita" className="rounded-xl"/>
        </picture>
        <div className="cabecalho">
          <h1 className="simpleOmelet text-3xl font-black py-2">Simple Omelette Recipe</h1>
          <p className="text-xs text-MarronClaro font-semibold py-2">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        </div>
      </div>
    </>
  );
}

export default Header;