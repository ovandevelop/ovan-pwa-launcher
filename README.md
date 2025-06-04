# 🚀 اَپ لانچر اُوان » OVAN PWA Launcher

این اسکریپت یک ساختار استاندارد برای تبدیل وب‌ سایت شما به یک اپلیکیشن نصب‌ پذیر (PWA) است ؛
این لانچر با استفاده از قابلیت‌های Progressive Web App در مرورگ رهای مدرن، تجربه‌ ای مشابه اپلیکیشن‌ ها (native) را برای کاربران فراهم میکند !

---

## 📦 محتویات پروژه
```
/public
├── index.html ← صفحه اصلی نمونه
├── pwa-ovan.js ← اسکریپت ثبت Service Worker (قابل فراخوانی در هر پروژه)
├── service-worker-ovan.js ← فایل Service Worker اصلی
├── manifest.json ← تنظیمات متادیتای اپلیکیشن
```

---

## 🛠 نحوه استفاده

1. فایل‌های `pwa.js` و `service-worker-ovan.js` را در ریشه پروژه یا پوشه `public/` قرار دهید
2. در فایل `index.html` خود، موارد زیر را اضافه کنید:

```html
<!-- insert in <head> -->
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#0057B8">
<script src="/pwa-ovan.js" defer></script>
```
3. آیکون‌ های مورد نیاز را در سایزهای 192x192 و 512x512 با نام‌ های زیر در مسیر /public/ قرار دهید :
```
icon-192.png
icon-512.png
```

## 🧩 سفارشی سازی
در فایل manifest.json :
```
"name": "OVAN Progressive Web App",
"short_name": "OVAN PWA",
"theme_color": "#0057B8",
"start_url": "/"
````

---
`Powered By RezaEi.Ali` `ovan.dev` `info@ovan.dev`
