import Image from 'next/image';
import styles from './page.module.css';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = '',
}: WhatsAppButtonProps) {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.whatsapp}
      aria-label="Open WhatsApp chat"
    >
      <Image
        src="/icons8-whatsapp.svg"
        alt=""
        width={28}
        height={28}
        aria-hidden="true"
      />
      <span>Let&apos;s chat</span>
    </a>
  );
}
