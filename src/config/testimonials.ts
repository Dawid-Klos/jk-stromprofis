export interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 0,
    name: "Kurt",
    position: "Hausbesitzer",
    text: "Die Anmietung von Mitarbeitern ist eine großartige Lösung! Das Unternehmen hat uns hochqualifizierte Mitarbeiter für unser Elektroprojekt bereitgestellt, was die Umsetzung erheblich beschleunigt hat. Vielen Dank!",
  },
  {
    id: 1,
    name: "Katrin",
    position: "Restaurantbesitzer",
    text: "Die installierten Beschallungssysteme in meinem Objekt funktionieren einwandfrei. Der Klang ist perfekt verteilt, und die Bedienung ist intuitiv. Ich kann es nur empfehlen.",
  },
  {
    id: 2,
    name: "Thomas",
    position: "Property Manager",
    text: "Ich empfehle dieses Unternehmen auf jeden Fall! Der professionelle Ansatz bei der Elektroinstallation in meinem Haus gibt mir ein sicheres und zuversichtliches Gefühl. Sehr zufrieden mit den Ergebnissen!",
  },
];
