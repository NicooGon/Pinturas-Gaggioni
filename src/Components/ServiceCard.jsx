export default function ServiceCard({ icon: Icon, text, description, delay = 0 }) {
  return (
    <div
      className="flex items-start gap-4 w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Icon className="h-20 w-20 shrink-0 text-yellow-500" />
      <div>
        <p className="text-xl font-semibold">{text}</p>
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
}
