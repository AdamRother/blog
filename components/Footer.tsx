export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 bg-ink">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[22px] font-light leading-none text-gold select-none">|</span>
          <span className="text-sm font-semibold text-[#F4F0EB]">Client Intelligence</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-faint">
          <a
            href="https://clientintelligence.ai/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F0EB] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://clientintelligence.ai/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F0EB] transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="https://clientintelligence.ai/status"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F0EB] transition-colors"
          >
            Status
          </a>
          <a
            href="mailto:hello@clientintelligence.ai"
            className="hover:text-[#F4F0EB] transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-xs text-faint/60">© 2026 Client Intelligence. All rights reserved.</p>
      </div>
      <p className="text-xs text-faint/40 text-center mt-6 max-w-xl mx-auto px-6">
        Client Intelligence is an AI-powered operating system for service providers. Your data is
        encrypted, isolated per client, and never used to train external models.
      </p>
    </footer>
  )
}
