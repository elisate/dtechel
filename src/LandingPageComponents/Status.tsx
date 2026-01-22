import { useState, useEffect, useRef } from 'react';

function Status() {
  const stats = [
    { value: "98%", label: "Solutions Delivered" },
    { value: "100+", label: "New users per week" },
    { value: "1k+", label: "Monthly active users" },
    { value: "33%", label: "Growth-over-year" },
  ];

  const [displayValues, setDisplayValues] = useState<string[]>(stats.map(() => "0"));
  const containerRef = useRef(null);



  const startAnimation = () => {

    stats.forEach((stat, i) => {
      const raw = stat.value;
      const suffixMatch = raw.match(/[^0-9.]+$/);
      const suffix = suffixMatch ? suffixMatch[0] : "";
      const numberPart = parseFloat(raw.replace(/[^0-9.]/g, ""));
      const duration = 2000;
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRatio = Math.min(progress / duration, 1);
        const current = Math.floor(numberPart * progressRatio);
        setDisplayValues((prev) => {
          const newArr = [...prev];
          newArr[i] = `${current}${suffix}`;
          return newArr;
        });
        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          setDisplayValues((prev) => {
            const newArr = [...prev];
            newArr[i] = raw;
            return newArr;
          });
        }
      };
      requestAnimationFrame(step);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);


  return (
    <section ref={containerRef} className="bg-white cursor-pointer" onMouseEnter={startAnimation}>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-orange-500 mb-3">
              {displayValues[index]}
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