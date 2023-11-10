export interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 0,
    name: "Maximilian",
    position: "Homeowner",
    text: "JK-Stromprofis took care of all the electrical installations for my new house. Despite being a young company, they worked like seasoned professionals. Quite commendable!",
  },
  {
    id: 1,
    name: "Sophie",
    position: "Cafe owner",
    text: "Introducing smart solutions to my cafe was a smooth process, all thanks to JK-Stromprofis. Their young, vibrant team infuses energy into their work, and it shows!",
  },
  {
    id: 2,
    name: "Lukas",
    position: "Property Manager",
    text: "Whitin just one year, JK-Stromprofis has demonstrated exceptional competence in their field. Their electrical services are top-notch and highly reliable.",
  },
];
