import { Social } from "@/components/social";

type SocialType = 'instagram' | 'tiktok';

const CONFIG = {
  className: 'X PPLG 1',
  tagline: 'gass terus',
  message: '',
  Social: [
    {type: 'instagram' as SocialType, href: 'https://www.instagram.com/ide.one_?igsh=MWxlemNxdmk1ZnMycw==', label: 'Instagram'},
    {type: 'tiktok' as SocialType, href: 'https://www.tiktok.com/@x.pplg1smecone?_r=1&_t=ZS-93fJ4kjvXmb', label: 'TikTok'},
  ],
}

export default function HomePage() {
  const activeSocial = CONFIG.Social.filter(social => social.href);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden scanlines">
      
      {/* Floating Pixel Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left */}
        <div className="absolute top-[10%] left-[5%] w-4 h-4 bg-mint animate-float" />
        <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-peach animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[8%] left-[15%] w-2 h-2 bg-blush animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Top Right */}
        <div className="absolute top-[12%] right-[8%] w-4 h-4 bg-sky animate-float" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-[18%] right-[12%] w-3 h-3 bg-lavender animate-float" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[6%] right-[18%] w-2 h-2 bg-mint animate-float" style={{ animationDelay: '1.3s' }} />
        
        {/* Bottom Left */}
        <div className="absolute bottom-[15%] left-[8%] w-4 h-4 bg-blush animate-float" style={{ animationDelay: '0.4s' }} />
        <div className="absolute bottom-[20%] left-[15%] w-3 h-3 bg-sky animate-float" style={{ animationDelay: '0.9s' }} />
        <div className="absolute bottom-[10%] left-[20%] w-2 h-2 bg-peach animate-float" style={{ animationDelay: '1.4s' }} />
        
        {/* Bottom Right */}
        <div className="absolute bottom-[12%] right-[10%] w-4 h-4 bg-lavender animate-float" style={{ animationDelay: '0.6s' }} />
        <div className="absolute bottom-[18%] right-[18%] w-3 h-3 bg-mint animate-float" style={{ animationDelay: '1.1s' }} />
        <div className="absolute bottom-[8%] right-[5%] w-2 h-2 bg-blush animate-float" style={{ animationDelay: '1.6s' }} />
        
        {/* Center scattered */}
        <div className="absolute top-[40%] left-[3%] w-2 h-2 bg-peach animate-float" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-[60%] right-[3%] w-2 h-2 bg-sky animate-float" style={{ animationDelay: '1.2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        
        
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-sm pixel-border pixel-shadow p-6 md:p-10 mb-8">
          
          {/* Coming Soon Badge */}
          <div className="inline-block bg-mint pixel-border px-4 py-2 mb-6 animate-pulse-slow">
            <span className="text-[10px] md:text-xs text-charcoal tracking-wider">
              🚧 COMING SOON 🚧
            </span>
          </div>

          {/* Class Name */}
          <h1 className="text-xl md:text-3xl lg:text-4xl text-charcoal mb-4 leading-relaxed">
            {CONFIG.className}
          </h1>

          {/* Tagline */}
          <h2 className="text-sm md:text-base text-charcoal mb-6 leading-relaxed">
            {CONFIG.tagline}
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-1 bg-mint" />
            <div className="w-2 h-2 bg-peach" />
            <div className="w-8 h-1 bg-blush" />
            <div className="w-2 h-2 bg-sky" />
            <div className="w-8 h-1 bg-lavender" />
          </div>

          {/* Message */}
          <p className="text-xs md:text-sm text-slate leading-relaxed max-w-md mx-auto font-sans">
            {CONFIG.message}
          </p>
        </div>

        {/* Social Media Section */}
        {activeSocial.length > 0 && (
          <div className="space-y-4">
            <p className="text-[10px] md:text-xs text-charcoal">
              📱 Follow kami di sosial media!
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {activeSocial.map((social, index) => (
                <Social
                  key={index}
                  type={social.type}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 md:mt-12">
          <p className="text-[8px] md:text-[10px] text-slate font-sans">
            © {new Date().getFullYear()} {CONFIG.className}
          </p>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 flex gap-1">
        <div className="w-3 h-3 bg-mint" />
        <div className="w-3 h-3 bg-peach" />
        <div className="w-3 h-3 bg-blush" />
      </div>
      
      <div className="absolute top-4 right-4 flex gap-1">
        <div className="w-3 h-3 bg-sky" />
        <div className="w-3 h-3 bg-lavender" />
        <div className="w-3 h-3 bg-mint" />
      </div>
      
      <div className="absolute bottom-4 left-4 flex gap-1">
        <div className="w-3 h-3 bg-lavender" />
        <div className="w-3 h-3 bg-sky" />
        <div className="w-3 h-3 bg-peach" />
      </div>
      
      <div className="absolute bottom-4 right-4 flex gap-1">
        <div className="w-3 h-3 bg-blush" />
        <div className="w-3 h-3 bg-mint" />
        <div className="w-3 h-3 bg-lavender" />
      </div>
    </main>
  )
}