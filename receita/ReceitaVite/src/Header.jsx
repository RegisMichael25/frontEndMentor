function Header (){
  const imageReceive = '../images/image-omelette.jpeg';

  return(
    <>
      <div className="cabecalho ">
        <picture>
          <img src={imageReceive} alt="Image Receita" className="rounded-xl"/>
        </picture>
        <div className="cabecalho">
          <h1 className="text-2xl font-['Young-Serif'] font-semibold text-marrom">Simple Omelette Recipe</h1>
          <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        </div>
      </div>
    </>
  );
}

export default Header;