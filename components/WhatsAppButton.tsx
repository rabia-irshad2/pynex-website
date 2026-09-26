//app/components/WhatsAppButton.tsx
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923141754779';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="WhatsApp us anytime"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition"
    >
      <MessageCircle size={22} />
      <span className="text-sm font-semibold hidden sm:inline">Chat with us</span>
    </a>
  );
}