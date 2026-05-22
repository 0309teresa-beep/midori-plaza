import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Clock, MapPin, Phone, Train, Sparkles } from "lucide-react";
import "./style.css";

const logoImage = "/assets/logo.png";
const buildingImage = "/assets/midori-building.png";

const photo = {
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  rooftop: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
  cinema: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
  cinemaLobby: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1200&auto=format&fit=crop",
  izakaya: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
  cafe: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
  market: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  business: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
};

function Logo() {
  return (
    <img
      src={logoImage}
      alt="MIDORI PLAZA logo"
      className="h-16 w-auto object-contain mix-blend-multiply"
    />
  );
}

function InfoItem({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#6d8565] text-[#53734f]">
        {icon}
      </div>
      <div>
        <p className="mb-1 text-[#53734f]">{title}</p>
        <p className="text-[#343a35]">{text}</p>
      </div>
    </div>
  );
}

function BuildingVisual({ className = "", mode = "hero" }) {
  return (
    <div className={`relative overflow-hidden bg-[#f7f4ec] ${className}`}>
      <img
        src={buildingImage}
        alt="MIDORI PLAZA building"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: mode === "hero" ? "50% 8%" : "50% 38%" }}
      />
      {mode === "hero" && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/72 via-white/12 to-transparent" />
      )}
    </div>
  );
}

function App() {
  const [selectedService, setSelectedService] = useState("餐廳訂位");
  const [sent, setSent] = useState(false);

  const frontFloors = [
    { floor: "5F", title: "餐酒館 / 露臺", desc: "高空景觀・微醺時光", image: photo.rooftop },
    { floor: "4F", title: "精品影廳", desc: "VIP 尊榮座席・極致體驗", image: photo.cinema },
    { floor: "3F", title: "影城大廳 / 影廳", desc: "首輪強檔・沉浸觀影", image: photo.cinemaLobby },
    { floor: "2F", title: "深夜食堂 / 特色居酒屋", desc: "職人料理・深夜食刻", image: photo.izakaya },
    { floor: "1F", title: "精品咖啡廳 / 香氛選物店", desc: "日常精品・香氛美學", image: photo.cafe },
    { floor: "B1", title: "超市 + 伴手禮店", desc: "嚴選食材・台灣伴手禮", image: photo.market }
  ];

  const annexFloors = [
    { floor: "2F", title: "SPA", desc: "日式療癒・身心放鬆", image: photo.spa },
    { floor: "1F", title: "商務中心", desc: "會議室・商務服務", image: photo.business },
    { floor: "B1", title: "超市 + 伴手禮店", desc: "退輔會農產・特色選物", image: photo.market }
  ];

  const cards = [
    { title: "DINING", subtitle: "餐飲美饌", image: photo.dining, button: "立即訂位" },
    { title: "CINEMA", subtitle: "影城娛樂", image: photo.cinema, button: "探索更多" },
    { title: "SPA & WELLNESS", subtitle: "日式 SPA", image: photo.spa, button: "立即預約" },
    { title: "GIFT & MARKET", subtitle: "伴手禮 & 超市", image: photo.market, button: "探索更多" },
    { title: "BUSINESS", subtitle: "商務服務", image: photo.business, button: "探索更多" }
  ];

  const services = ["餐廳訂位", "SPA 預約", "影城包廂", "商務會議室", "禮賓服務"];

  function handleReservation(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main
      className="min-h-screen bg-[#faf8f2] text-[#222722]"
      style={{ fontFamily: "'Noto Serif TC', 'Songti TC', 'Yu Mincho', Georgia, serif" }}
    >
      <nav className="sticky top-0 z-50 border-b border-[#e7e0d4] bg-[#fffdf8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-8 py-4">
          <a href="#home"><Logo /></a>
          <div
            className="hidden items-center gap-9 text-sm tracking-wide text-[#263528] lg:flex"
            style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}
          >
            <a href="#home" className="text-[#53734f]">首頁</a>
            <a href="#floor" className="hover:text-[#53734f]">樓層導覽</a>
            <a href="#dining" className="hover:text-[#53734f]">餐飲美饌</a>
            <a href="#cinema" className="hover:text-[#53734f]">影城娛樂</a>
            <a href="#service" className="hover:text-[#53734f]">商務服務</a>
            <a href="#news" className="hover:text-[#53734f]">會員專區</a>
            <span>繁體中文⌄</span>
          </div>
          <a
            href="#reservation"
            className="rounded bg-[#4f6f47] px-6 py-3 text-sm text-white shadow-sm hover:bg-[#405d3b]"
            style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}
          >
            立即預約
          </a>
        </div>
      </nav>

      <section id="home" className="relative min-h-[540px] overflow-hidden bg-white">
        <BuildingVisual className="absolute inset-0" mode="hero" />
        <div className="relative mx-auto grid min-h-[540px] max-w-[1240px] grid-cols-1 items-center gap-8 px-8 py-14 lg:grid-cols-[0.75fr_1.25fr_0.78fr]">
          <div>
            <h1 className="mb-6 text-5xl font-light leading-tight tracking-[0.12em] md:text-6xl">
              質感生活・<br />品味之選
            </h1>
            <p className="mb-3 text-xl tracking-[0.08em] text-[#3d473f]">日式美學 × 極致款待</p>
            <p className="mb-8 text-lg leading-8 text-[#5d665a]">奢華體驗，從這裡開始</p>
            <a
              href="#floor"
              className="inline-block rounded bg-[#4f6f47] px-10 py-4 text-sm text-white shadow-lg hover:bg-[#405d3b]"
              style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}
            >
              探索 MIDORI PLAZA
            </a>
          </div>
          <div className="hidden lg:block" />
          <aside className="rounded-2xl bg-white/95 p-8 shadow-2xl ring-1 ring-[#e2dbcf] backdrop-blur">
            <div className="space-y-7 text-sm" style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}>
              <InfoItem icon={<Clock size={18} />} title="營業時間" text="11:00 - 03:00" />
              <InfoItem icon={<MapPin size={18} />} title="地址" text="台北市中山區林森北路周邊" />
              <InfoItem icon={<Phone size={18} />} title="聯絡我們" text="02-2567-1234" />
              <InfoItem icon={<Train size={18} />} title="交通方式" text="捷運中山站出口步行 3 分鐘" />
            </div>
            <a
              href="#reservation"
              className="mt-7 block rounded bg-[#4f6f47] px-5 py-3 text-center text-sm text-white hover:bg-[#405d3b]"
              style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}
            >
              餐廳線上訂位
            </a>
          </aside>
        </div>
      </section>

      <section id="floor" className="mx-auto max-w-[1240px] px-8 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-light tracking-[0.18em]">樓層導覽</h2>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs tracking-[0.28em] text-[#53734f]">
            <span className="h-px w-16 bg-[#9bb684]" />FLOOR GUIDE<span className="h-px w-16 bg-[#9bb684]" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr_1fr]">
          <div>
            <h3 className="mb-5 text-2xl font-light tracking-[0.12em]">前館</h3>
            <div className="overflow-hidden rounded border border-[#ddd6ca] bg-white shadow-sm">
              {frontFloors.map((item) => (
                <article key={item.floor} className="grid grid-cols-[72px_1fr_96px] items-center gap-4 border-b border-[#eee8de] px-5 py-3 last:border-b-0">
                  <div className="text-3xl font-light text-[#53734f]">{item.floor}</div>
                  <div>
                    <h4 className="font-medium tracking-[0.06em]">{item.title}</h4>
                    <p className="mt-1 text-xs text-[#6f766d]" style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}>{item.desc}</p>
                  </div>
                  <img src={item.image} alt={item.title} className="h-[58px] w-[96px] rounded object-cover" />
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <BuildingVisual className="h-[430px] w-full rounded shadow-xl ring-1 ring-[#e2dbcf]" mode="floor" />
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-light tracking-[0.12em]">後館</h3>
            <div className="overflow-hidden rounded border border-[#ddd6ca] bg-white shadow-sm">
              {annexFloors.map((item) => (
                <article key={item.floor} className="grid grid-cols-[72px_1fr_96px] items-center gap-4 border-b border-[#eee8de] px-5 py-6 last:border-b-0">
                  <div className="text-3xl font-light text-[#53734f]">{item.floor}</div>
                  <div>
                    <h4 className="font-medium tracking-[0.06em]">{item.title}</h4>
                    <p className="mt-1 text-xs text-[#6f766d]" style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}>{item.desc}</p>
                  </div>
                  <img src={item.image} alt={item.title} className="h-[70px] w-[96px] rounded object-cover" />
                </article>
              ))}
            </div>
            <button
              className="mt-5 w-full rounded border border-[#8aa17e] bg-white py-4 text-sm text-[#53734f] hover:bg-[#eef3ea]"
              style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}
            >
              前後館聯通　→
            </button>
          </div>
        </div>
      </section>

      <section id="reservation" className="relative overflow-hidden bg-[#f4f2ec] px-8 py-12">
        <div className="absolute left-0 top-0 h-full w-[32%] opacity-85">
          <img src={photo.dining} alt="reservation dining" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white" />
        </div>
        <div className="relative mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[0.28fr_1fr]">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs tracking-[0.3em] text-[#53734f]">RESERVATION</p>
            <h2 className="text-4xl font-light tracking-[0.08em]">餐廳線上訂位</h2>
            <p className="mt-4 leading-7 text-[#5d665a]" style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}>精緻美饌，為您預留美好時光</p>
          </div>

          <form onSubmit={handleReservation} className="rounded-xl bg-white p-7 shadow-xl ring-1 ring-[#e2dbcf]" style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}>
            <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-5">
              {services.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedService(item)}
                  className={selectedService === item ? "rounded bg-[#4f6f47] px-3 py-3 text-sm text-white" : "rounded border border-[#ddd4c7] px-3 py-3 text-sm text-[#586157] hover:bg-[#eef3ea]"}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              <label className="block"><span className="mb-2 block text-sm text-[#586157]">選擇餐廳</span><select className="w-full rounded border border-[#d6cec0] bg-white px-4 py-3"><option>5F 餐酒館・空中花園露臺</option><option>2F 深夜食堂・特色居酒屋</option><option>1F 精品咖啡廳</option></select></label>
              <label className="block"><span className="mb-2 block text-sm text-[#586157]">日期</span><input type="date" className="w-full rounded border border-[#d6cec0] bg-white px-4 py-3" /></label>
              <label className="block"><span className="mb-2 block text-sm text-[#586157]">時間</span><select className="w-full rounded border border-[#d6cec0] bg-white px-4 py-3"><option>18:00</option><option>19:30</option><option>21:00</option><option>23:00</option><option>01:00</option></select></label>
              <label className="block"><span className="mb-2 block text-sm text-[#586157]">人數</span><select className="w-full rounded border border-[#d6cec0] bg-white px-4 py-3"><option>2 人</option><option>3-4 人</option><option>5-8 人</option><option>9 人以上</option></select></label>
              <label className="block"><span className="mb-2 block text-sm text-[#586157]">姓名</span><input type="text" placeholder="您的姓名" className="w-full rounded border border-[#d6cec0] bg-white px-4 py-3" /></label>
              <label className="block"><span className="mb-2 block text-sm text-[#586157]">手機</span><input type="tel" placeholder="09XXXXXXXX" className="w-full rounded border border-[#d6cec0] bg-white px-4 py-3" /></label>
              <label className="block"><span className="mb-2 block text-sm text-[#586157]">電子郵件</span><input type="email" placeholder="example@mail.com" className="w-full rounded border border-[#d6cec0] bg-white px-4 py-3" /></label>
              <button type="submit" className="self-end rounded bg-[#4f6f47] px-8 py-4 font-medium text-white shadow-sm hover:bg-[#405d3b]">立即預約</button>
            </div>
            {sent && <p className="mt-4 rounded bg-[#eef3ea] p-4 text-sm text-[#53734f]">已送出 {selectedService} 需求。正式上線時可串接訂位系統。</p>}
          </form>
        </div>
      </section>

      <section id="dining" className="mx-auto grid max-w-[1240px] gap-6 px-8 py-16 md:grid-cols-2 lg:grid-cols-5">
        {cards.map((card) => (
          <article key={card.title} className="overflow-hidden rounded border border-[#e2dbcf] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <img src={card.image} alt={card.subtitle} className="h-44 w-full object-cover" />
            <div className="p-5">
              <p className="mb-1 text-xs tracking-[0.25em] text-[#6e8b64]">{card.title}</p>
              <h3 className="mb-4 text-2xl font-light">{card.subtitle}</h3>
              <a href="#reservation" className="inline-block rounded bg-[#4f6f47] px-5 py-2 text-sm text-white hover:bg-[#405d3b]" style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}>{card.button}</a>
            </div>
          </article>
        ))}
      </section>

      <section id="service" className="mx-auto max-w-[1240px] px-8 pb-12">
        <div className="grid rounded border border-[#e2dbcf] bg-white shadow-sm md:grid-cols-4">
          {[
            ["國際旅客服務", "退稅・行李寄放・外幣兌換"],
            ["會員專屬禮遇", "點數回饋・生日禮・專屬活動"],
            ["五星飯店合作", "尊榮接駁・貴賓禮遇"],
            ["免費 Wi-Fi", "全館高速上網服務"]
          ].map((item) => (
            <div key={item[0]} className="border-b border-[#e2dbcf] p-7 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full border border-[#53734f] text-[#53734f]"><Sparkles size={18} /></div>
              <h3 className="mb-1 text-lg">{item[0]}</h3>
              <p className="text-sm text-[#70776d]" style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}>{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="news" className="border-t border-[#e2dbcf] bg-white px-8 py-10">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-8 md:flex-row">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-[#70776d]" style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}>© 2026 MIDORI PLAZA. All Rights Reserved.</p>
          </div>
          <div className="grid gap-8 text-sm text-[#586157] sm:grid-cols-3" style={{ fontFamily: "'Noto Sans TC', Arial, sans-serif" }}>
            <div><h4 className="mb-3 text-[#1f2a22]">關於我們</h4><p>品牌理念</p><p>最新消息</p><p>樓層導覽</p></div>
            <div><h4 className="mb-3 text-[#1f2a22]">顧客服務</h4><p>營業時間</p><p>交通資訊</p><p>常見問題</p></div>
            <div><h4 className="mb-3 text-[#1f2a22]">聯絡我們</h4><p>02-2567-1234</p><p>service@midoriplaza.com.tw</p><p>台北市中山區林森北路周邊</p></div>
          </div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
