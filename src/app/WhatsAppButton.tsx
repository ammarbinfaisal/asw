import Image from "next/image";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "",
}: WhatsAppButtonProps) {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-fab"
      aria-label="Start a consultation on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/icons8-whatsapp.svg" alt="" width={28} height={28} aria-hidden="true" />
      <span>Let’s chat</span>
    </a>
  );
}
