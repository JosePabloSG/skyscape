'use client'

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GallerySection() {
  const images = Array.from({ length: 9 }, (_, index) => ({
    src: `/img/img-${index + 1}.jpg`,
    alt: `Imagen de galería ${index + 1}`,
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestra Galería</h2>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <Image
                src={src.src}
                alt={src.alt}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}