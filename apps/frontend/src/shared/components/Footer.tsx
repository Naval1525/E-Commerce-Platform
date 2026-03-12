import { CircleHelp, Gift, Megaphone, Store, Facebook, Instagram, Youtube } from "lucide-react";

const footerGroups = [
  {
    title: "ABOUT",
    links: ["Contact Us", "About Us", "Careers", "Flipkart Stories", "Press", "Corporate Information"]
  },
  {
    title: "GROUP COMPANIES",
    links: ["Myntra", "Cleartrip", "Shopsy"]
  },
  {
    title: "HELP",
    links: ["Payments", "Shipping", "Cancellation & Returns", "FAQ"]
  },
  {
    title: "CONSUMER POLICY",
    links: ["Cancellation & Returns", "Terms Of Use", "Security", "Privacy", "Sitemap", "Grievance Redressal", "EPR Compliance", "FSSAI Food Safety Connect App"]
  }
];

export function Footer() {
  return (
    <footer className="mt-7 bg-[linear-gradient(90deg,#171717,#1f1f1f_48%,#181818)] text-slate-50">
      <div className="site-container grid grid-cols-[minmax(0,1fr)_520px] gap-7 py-9 max-[1100px]:grid-cols-1">
        <div className="grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          {footerGroups.map((group) => (
            <section key={group.title}>
              <h3 className="mb-3.5 text-[0.82rem] font-medium text-zinc-500">{group.title}</h3>
              <ul className="m-0 list-none p-0">
                {group.links.map((link) => (
                  <li className="mb-1 text-[0.95rem] font-semibold leading-[1.45]" key={link}>
                    {link}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
          <section className="border-r border-slate-700 pr-6 max-md:border-b max-md:border-r-0 max-md:pb-5 max-md:pr-0">
            <h3 className="mb-3.5 text-[0.82rem] font-medium text-zinc-500">Mail Us:</h3>
            <p className="m-0 text-[0.95rem] leading-[1.45] text-slate-100">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &amp;
              <br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </p>
            <div className="mt-4 grid gap-2.5 text-[0.95rem] text-zinc-500">
              <span>Social:</span>
              <div className="flex items-center gap-4 text-white">
                <Facebook size={18} />
                <span className="text-[1.45rem] leading-none">X</span>
                <Youtube size={18} />
                <Instagram size={18} />
              </div>
            </div>
          </section>

          <section>
            <h3 className="mb-3.5 text-[0.82rem] font-medium text-zinc-500">Registered Office Address:</h3>
            <p className="m-0 text-[0.95rem] leading-[1.45] text-slate-100">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &amp;
              <br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
              <br />
              CIN : U51109KA2012PTC066107
              <br />
              Telephone: 044-45614700 / 044-67415800
            </p>
          </section>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="site-container grid min-h-[70px] grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-5 max-[1100px]:grid-cols-1 max-[1100px]:py-[18px]">
          <div className="flex flex-wrap gap-6 text-slate-50 max-md:gap-3.5">
            <span className="inline-flex items-center gap-2"><Store className="text-yellow-400" size={14} /> Become a Seller</span>
            <span className="inline-flex items-center gap-2"><Megaphone className="text-yellow-400" size={14} /> Advertise</span>
            <span className="inline-flex items-center gap-2"><Gift className="text-yellow-400" size={14} /> Gift Cards</span>
            <span className="inline-flex items-center gap-2"><CircleHelp className="text-yellow-400" size={14} /> Help Center</span>
          </div>
          <p className="m-0">© 2007-2026 Flipkart.com</p>
          <div className="flex flex-wrap justify-end gap-2 max-[1100px]:justify-start">
            <span className="inline-flex min-h-5 items-center rounded bg-white px-2 text-[0.72rem] font-bold text-slate-900">VISA</span>
            <span className="inline-flex min-h-5 items-center rounded bg-white px-2 text-[0.72rem] font-bold text-slate-900">Mastercard</span>
            <span className="inline-flex min-h-5 items-center rounded bg-white px-2 text-[0.72rem] font-bold text-slate-900">RuPay</span>
            <span className="inline-flex min-h-5 items-center rounded bg-white px-2 text-[0.72rem] font-bold text-slate-900">UPI</span>
            <span className="inline-flex min-h-5 items-center rounded bg-white px-2 text-[0.72rem] font-bold text-slate-900">NetBanking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
