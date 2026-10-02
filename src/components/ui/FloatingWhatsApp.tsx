import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/971556927191?text=Hello%20NJS%20Logistics%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-all duration-300"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </a>
  );
}
