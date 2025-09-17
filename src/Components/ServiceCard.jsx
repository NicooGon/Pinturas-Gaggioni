export default function ServiceCard({ icon, text }) {
  return (
    <div className="flex items-start gap-4 w-80">
      <img src={icon} alt={text} className="h-18 w-18" />
      <p className="text-xl text-black font-karla">{text}</p>
    </div>
  );
}
