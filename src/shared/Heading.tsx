const Heading = ({ title }: { title: string }) => {
  return (
    <>
      <h2
        data-aos="fade-up"
        className="md:text-5xl text-4xl text-center font-bold mb-12 text-secondary"
        style={{ fontFamily: "Priestacy" }}
      >
        {title}
      </h2>
    </>
  );
};

export default Heading;
