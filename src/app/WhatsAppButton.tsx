import Image from 'next/image';
import React from 'react';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
    className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    message = '',
}) => {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    return (
        <a
            href={whatsappUrl}
            className={`fixed bottom-0 left-0 w-screen bg-white p-2 flex items-center justify-center gap-2 
                bg-gradient-to-r from-green-500 to-green-600 md:bg-none
                md:w-auto md:bottom-8 md:right-8 md:left-auto md:p-2 md:rounded-full`}
            aria-label="Open WhatsApp chat"
        >
            <Image
                src="/icons8-whatsapp.svg"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8 md:w-16 md:h-16"
            />
            <p className="text-white font-bold md:hidden">Let&apos;s Chat</p>
        </a>
    );
};

export default WhatsAppButton;
