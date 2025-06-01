const Hero: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center"
    style={{ backgroundImage: "url('/images/hero.jpg')"}}>
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-white text-4x1 font-bold mb-4">
          find your favorite place here!
        </h1>
        <p className="text-white text-lg">
          the best  prices for over 2 million properties worldwilde.
        </p>
      </div>
    </section>
  )
}

export default Hero;