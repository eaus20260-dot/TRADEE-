# Trade E Solutions — Web & Marketing Application

A high-converting web platform engineered for construction contractors and trades, connecting directly to your dedicated online strategy consultation form: **https://form.jotform.com/262643423217049**.

---

## 🛠️ Architecture & 2026 Production Best Practices

- **Frontend:** React 19 + TypeScript + Tailwind CSS (Vite build)
- **Consultation & Lead Intake:** Jotform Dedicated Endpoint (`https://form.jotform.com/262643423217049`)
- **Performance Optimizations:** Preconnected DNS prefetching (`form.jotform.com`) in `<head>` for near-zero latency click-throughs.
- **Conversion UX:** All Call-to-Action buttons (Navbar "Book Call", Hero "BOOK FREE STRATEGY CALL", Service Tier cards "Select Tier" / "BOOK CONSULTATION", and footer "Book Consultation Online") trigger the Jotform flow directly with safe `rel="noopener noreferrer"`.
- **Zero Maintenance Overhead:** By routing form submissions through Jotform, email alerts to your Hostinger address (`hq@tradeesolutions.com.au`), customer auto-responders, anti-spam captchas, and file uploads are handled reliably in the cloud without server dependencies or API key rotation.
- **Static Cloudflare Pages Hosting:** Deploys instantly to Cloudflare Pages directly from GitHub as a high-speed, globally distributed static site.

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 3. Build for Production
```bash
npm run build
```
This generates the optimized static build in the `dist/` directory ready for deployment.

---

## 🌐 Cloudflare Pages Deployment (from GitHub)

1. Commit and push your code to your GitHub repository.
2. In the **Cloudflare Dashboard**:
   - Navigate to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
   - Select your repository.
3. Configure the build settings:
   - **Framework preset:** `Vite` (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Your website will be live globally on Cloudflare's edge network within seconds.
