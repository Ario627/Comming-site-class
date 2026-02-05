import { siInstagram, siTiktok} from "simple-icons";

type SocialType = 'instagram' | 'tiktok';

interface SocialProps {
    type: SocialType;
    href: string;
    label?: string;
}

const iconMap: Record<SocialType, {icon: string; color: string; hoverColor: string}> = {
    instagram: {
        icon: siInstagram.svg,
        color: 'bg-blush',
        hoverColor: 'hover:bg-blush/80'
    },

    tiktok: {
        icon: siTiktok.svg,
        color: 'bg-lavender',
        hoverColor: 'hover:bg-lavender/80'
    },
}

export function Social({type, href, label}: SocialProps) {
    const {icon, color, hoverColor} = iconMap[type]

    return (
        <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center
        w-14 h-14 md:w-16 md:h-16
        ${color} ${hoverColor}
        pixel-border pixel-hover
        transition-all duration-100
      `}
      aria-label={label || type}
    >
      <div className="w-6 h-6 md:w-7 md:h-7 text-charcoal" dangerouslySetInnerHTML={{ __html: icon }} />
      

      {label && (
        <span className="
          absolute -bottom-8 left-1/2 -translate-x-1/2
          px-2 py-1 bg-charcoal text-cream text-[8px] md:text-[10px]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
          whitespace-nowrap
          pointer-events-none
        ">
          {label}
        </span>
      )}
    </a>
    )
}