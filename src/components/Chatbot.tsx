import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { AnimatePresence, motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `You are Siya-Bot, the official assistant for Siyabonga Recycling, a scrap yard and recycling center based in Gauteng, South Africa.

Business Information:
- Germiston Branch: 24 Meyer St, North Germiston, Germiston, 1401 (Call: +27 79 394 2061)
- Boksburg Branch: Vredebos, 42 R103, Mapleton, Boksburg, 1459 (Call: +27 74 656 7209)
- Emails: SiyabongaRecycling@gmail.com, Ernestticha8@gmail.com
- Hours: Mon - Sat 08:00 - 17:30. Closed on Sundays.
- Services: We swap basic recycling materials (cardboard, paper, plastics, scrap metal), intact glass bottles, and printed circuit boards from old phones for cash. We also do collecting and sorting.

Website Navigation:
- [Home](/)
- [Services](/services)
- [Contact Us](/contact)

Style & Tone:
- You are representing an informal scrap yard.
- Be straightforward, friendly, and practical. 
- Tell people we prioritize community cleanup and giving them cash for their scrap.
- Do NOT make big formal corporate promises we can't keep. Keep it real.
- Give short, concise answers.
- Use markdown links if referring to other pages, e.g., "Check our [Services](/services) for more."`;

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; parts: { text: string }[] }[]>([
    { role: 'model', parts: [{ text: "Sho! I'm Siya-Bot. Got scrap to sell, or need to know where we're at? Ask away!" }] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', parts: [{ text: userMsg }] }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: SYSTEM_INSTRUCTION }] },
          { role: 'model', parts: [{ text: "Understood. I am Siya-Bot." }] },
          ...messages,
          { role: 'user', parts: [{ text: userMsg }] }
        ]
      });

      if (response.text) {
        setMessages(prev => [...prev, { role: 'model', parts: [{ text: response.text }] }]);
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: "Sorry, I'm having trouble connecting right now. Please try again later or [contact us](/contact) directly!" }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 bg-[#05812A] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#034b18] hover:scale-105 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
          aria-label="Open Chatbot"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[380px] h-[550px] max-h-[80vh] bg-white border border-[#1A1A1A]/10 shadow-2xl flex flex-col overflow-hidden font-sans rounded-lg"
          >
            {/* Header */}
            <div className="bg-[#1A1A1A] p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#05812A] flex items-center justify-center">
                  <span className="font-serif italic font-bold">SR</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wide">Siya-Bot</h3>
                  <p className="text-[10px] text-white/70 uppercase tracking-widest">Siyabonga Recycling</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAF9]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === 'user'
                        ? 'bg-[#1A1A1A] text-white rounded-tr-sm'
                        : 'bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-tl-sm shadow-sm'
                    }`}
                  >
                    <div className="markdown-body prose prose-sm max-w-none">
                       <ReactMarkdown>
                          {msg.parts[0].text}
                       </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-tl-sm shadow-sm flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[#05812A]" />
                    <span className="text-xs">Siya-Bot is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-[#1A1A1A]/10">
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-[#FAFAF9] border border-[#1A1A1A]/10 focus:border-[#05812A] outline-none text-sm transition-colors rounded-full"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#05812A] text-white flex items-center justify-center transition-colors disabled:opacity-50 disabled:hover:bg-[#1A1A1A]"
                >
                  <Send className="w-4 h-4 -ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
