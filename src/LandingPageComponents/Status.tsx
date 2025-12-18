function Status() {
  const stats = [
    { value: "98%", label: "Automatic payment" },
    { value: "100k+", label: "New users per week" },
    { value: "110k+", label: "Monthly active users" },
    { value: "33%", label: "Growth-over-year" },
  ];

  return (
    <section className="bg-white">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-orange-500 mb-3">
              {stat.value}
            </h2>
            <p className="text-gray-800 text-sm md:text-base font-medium tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Status;