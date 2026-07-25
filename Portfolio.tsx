import React, { useState } from 'react';

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@xf1st.ru');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-['Rubik'] selection:bg-white selection:text-black">
      
      {/* Apple-style Frosted Glass Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 text-white font-medium tracking-tight">
            <span className="w-6 h-6 rounded-full bg-white text-black font-extrabold flex items-center justify-center text-xs">x</span>
            <span className="font-bold text-base tracking-wide">xf1st</span>
          </a>

          <nav className="hidden sm:flex items-center space-x-8 text-xs font-medium text-[#86868b]">
            <a href="#hero" className="hover:text-white transition-colors">Обзор</a>
            <a href="#travellm" className="hover:text-white transition-colors">TravelLM</a>
            <a href="#siplyi" className="hover:text-white transition-colors">Sipliy Folder VPS</a>
            <a href="#skills" className="hover:text-white transition-colors">Навыки</a>
            <a href="#contact" className="hover:text-white transition-colors">Связь</a>
          </nav>

          <div>
            <a
              href="https://t.me/xf1st"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 transition-all"
            >
              <i className="ri-telegram-fill text-sky-400"></i>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 space-y-24 sm:space-y-32 py-16 sm:py-24">
        
        {/* HERO SECTION */}
        <section id="hero" className="text-center max-w-3xl mx-auto space-y-8 pt-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-[#86868b]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="tracking-wide">Full-Stack & AI Integration Engineer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Full-Stack Developer.<br />AI Integration Engineer.
          </h1>

          <p className="text-base sm:text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto font-normal">
            Проектирование и разработка высоконагруженных веб-сервисов на <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">Supabase</span> и <span className="text-white font-medium">Node.js</span> с интеграцией языковых моделей (<span className="text-white font-medium">Claude, OpenAI API</span>).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <a
              href="#travellm"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10"
            >
              Посмотреть проекты
            </a>

            <a
              href="https://t.me/xf1st"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold text-sm border border-white/15 transition-all flex items-center justify-center space-x-2"
            >
              <i className="ri-telegram-fill text-sky-400 text-base"></i>
              <span>Написать в Telegram</span>
            </a>
          </div>

          <div className="pt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-mono text-[#86868b]">
            <span>Next.js App Router</span>
            <span className="text-white/20">•</span>
            <span>Supabase PostgreSQL</span>
            <span className="text-white/20">•</span>
            <span>Prompt Caching & Streaming</span>
            <span className="text-white/20">•</span>
            <span>Docker</span>
          </div>
        </section>

        {/* CASE 1: TravelLM */}
        <section id="travellm" className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest font-semibold">Флагманский Проект</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">TravelLM (.ru / .world)</h2>
            <p className="text-sm text-[#86868b]">Комплексная AI-платформа для генерации туристических маршрутов</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[#121215]/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 flex flex-col justify-between backdrop-blur-xl">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
                  Non-commercial Production Project
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  Генерация персонализированных маршрутов с помощью нейросетей
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  Полный цикл разработки с нуля. Сервис позволяет генерировать кастомные туристические маршруты, имеет встроенную медиаленту впечатлений (Travel Reels), систему персональных AI-гидов и полноценную панель администратора для управления промптами и контентом.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs text-[#86868b]">
                <div className="space-y-1"><span className="text-white font-semibold block">🗺️ AI-Маршруты</span><span>Учет бюджета, локации и интересов</span></div>
                <div className="space-y-1"><span className="text-white font-semibold block">🎬 Travel Reels</span><span>Интерактивная лента впечатлений</span></div>
                <div className="space-y-1"><span className="text-white font-semibold block">🤖 AI-Гиды</span><span>Персональный инфо-помощник</span></div>
                <div className="space-y-1"><span className="text-white font-semibold block">⚙️ Админ-панель</span><span>Управление промптами и пользователями</span></div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="bg-[#121215]/80 border border-white/10 rounded-3xl p-8 space-y-4 backdrop-blur-xl">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#86868b]">Стек проекта</h4>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Supabase', 'i18n', 'Docker', 'Tailwind CSS', 'OpenAI / Claude API'].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-full bg-white/5 text-white text-xs font-mono border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-3">
                  <a
                    href="https://github.com/xf1st"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold text-center border border-white/15 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <i className="ri-github-fill text-base"></i>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://travellm.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-full bg-white text-black font-bold text-xs text-center hover:bg-slate-200 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <i className="ri-external-link-line text-base"></i>
                    <span>Демо</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#121215]/80 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-xl font-bold font-mono text-white">230+</div>
                  <div className="text-[10px] text-[#86868b] mt-1">коммитов</div>
                </div>
                <div className="bg-[#121215]/80 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-xs font-bold font-mono text-white">SSR / CI-CD</div>
                  <div className="text-[10px] text-[#86868b] mt-1">деплои</div>
                </div>
                <div className="bg-[#121215]/80 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-xs font-bold font-mono text-emerald-400">Production</div>
                  <div className="text-[10px] text-[#86868b] mt-1">готовность</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE 2: Sipliy Folder VPS */}
        <section id="siplyi" className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest font-semibold">Высоконагруженный Сервис</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Sipliy Folder VPS (siplyifolder.ru)</h2>
            <p className="text-sm text-[#86868b]">Personal VPS download manager со скоростью 1 Гбит/с + Extension MV3</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[#121215]/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 flex flex-col justify-between backdrop-blur-xl">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400">
                  Node.js + Chrome Extension Manifest V3
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  Быстрые загрузки файлов на VPS и браузерное расширение в один клик
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  Сервис позволяет отправлять любые ссылки (HTTP, HTTPS, magnet) на личный VPS-сервер и качать их на скорости 1 Гбит/с с помощью движка aria2c (JSON-RPC). Расширение Chrome/Edge позволяет отправлять файлы на VPS прямо из контекстного меню браузера.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs text-[#86868b]">
                <div className="space-y-1"><span className="text-white font-semibold block">⚡ 1 Gbps Движок aria2c</span><span>Скачивание файлов по JSON-RPC</span></div>
                <div className="space-y-1"><span className="text-white font-semibold block">🧩 Extension Manifest V3</span><span>Контекстное меню Chrome / Edge</span></div>
                <div className="space-y-1"><span className="text-white font-semibold block">🛡️ VirusTotal API</span><span>Авто-проверка файлов на вирусы</span></div>
                <div className="space-y-1"><span className="text-white font-semibold block">🔔 Push & Мультиаккаунт</span><span>Уведомления и авто-очистка</span></div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="bg-[#121215]/80 border border-white/10 rounded-3xl p-8 space-y-4 backdrop-blur-xl">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#86868b]">Стек проекта</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js + Express', 'aria2c (JSON-RPC)', 'Chrome Extension MV3', 'VirusTotal API', 'Nginx + SSL'].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-full bg-white/5 text-white text-xs font-mono border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-3">
                  <a
                    href="https://github.com/xf1st/sipliy-folder-vps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold text-center border border-white/15 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <i className="ri-github-fill text-base"></i>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://github.com/xf1st/sipliy-folder-vps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-full bg-white text-black font-bold text-xs text-center hover:bg-slate-200 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <i className="ri-code-box-line text-base"></i>
                    <span>Код</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#121215]/80 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-sm font-bold font-mono text-white">1 Gbps</div>
                  <div className="text-[10px] text-[#86868b] mt-1">скорость</div>
                </div>
                <div className="bg-[#121215]/80 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-xs font-bold font-mono text-white">Manifest V3</div>
                  <div className="text-[10px] text-[#86868b] mt-1">расширение</div>
                </div>
                <div className="bg-[#121215]/80 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-xs font-bold font-mono text-emerald-400">VirusTotal</div>
                  <div className="text-[10px] text-[#86868b] mt-1">защита</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLE SKILLS GRID */}
        <section id="skills" className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest font-semibold">Специализация</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Навыки и Инструменты</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#121215]/80 border border-white/10 rounded-3xl p-6 space-y-4 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white text-xl">
                <i className="ri-layout-4-line"></i>
              </div>
              <h3 className="text-lg font-bold text-white">Frontend</h3>
              <p className="text-xs text-[#86868b] leading-relaxed">Разработка интерфейсов с SSR, чистой типографикой и поддержкой мульти-язычности.</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Next.js', 'React', 'TypeScript', 'Tailwind', 'i18n'].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-white font-mono">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#121215]/80 border border-white/10 rounded-3xl p-6 space-y-4 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 text-xl">
                <i className="ri-database-2-line"></i>
              </div>
              <h3 className="text-lg font-bold text-white">Backend & DB</h3>
              <p className="text-xs text-[#86868b] leading-relaxed">Проектирование реляционных баз PostgreSQL, RLS безопасность и миграции данных.</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Supabase', 'Node.js', 'PostgreSQL', 'REST API'].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-white font-mono">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#121215]/80 border border-white/10 rounded-3xl p-6 space-y-4 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 text-xl">
                <i className="ri-brain-line"></i>
              </div>
              <h3 className="text-lg font-bold text-white">AI Integration</h3>
              <p className="text-xs text-[#86868b] leading-relaxed">Интеграция LLM моделей (Claude, GPT), Prompt Caching и потоковый вызов (SSE).</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Claude API', 'OpenAI', 'Prompt Cache'].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-white font-mono">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#121215]/80 border border-white/10 rounded-3xl p-6 space-y-4 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-sky-400 text-xl">
                <i className="ri-cloud-line"></i>
              </div>
              <h3 className="text-lg font-bold text-white">DevOps</h3>
              <p className="text-xs text-[#86868b] leading-relaxed">Контейнеризация сервисов в Docker и автоматизация сборки на Vercel/VPS.</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Docker', 'Git', 'Vercel', 'VPS'].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-white font-mono">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* APPLE CONTACT */}
        <section id="contact" className="bg-[#121215]/80 border border-white/10 rounded-3xl p-10 sm:p-14 text-center space-y-6 backdrop-blur-xl">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Связаться со мной</h2>
          <p className="text-sm sm:text-base text-[#86868b] max-w-md mx-auto">
            Открыт к предложениям по Full-Stack разработке и интеграции искусственного интеллекта.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://t.me/xf1st"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all flex items-center justify-center space-x-2"
            >
              <i className="ri-telegram-fill text-lg text-sky-500"></i>
              <span>Написать в Telegram (@xf1st)</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/15 transition-all flex items-center justify-center space-x-2"
            >
              <i className="ri-mail-send-line text-slate-300 text-base"></i>
              <span>{copied ? 'Скопировано!' : 'Скопировать Email'}</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-[#86868b]">
        © 2026 xf1st. Next.js, Supabase & Node.js. Designed with Apple principles.
      </footer>
    </div>
  );
}
