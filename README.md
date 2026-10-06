# 🌐 IoT & Embedded Systems Hub

Welcome to my hardware engineering and Internet of Things (IoT) repository hub! This site serves as the central directory and main landing page for hosting, organizing, and accessing my micro-ecosystem of web interfaces.

By using **GitHub Pages** paired with a single custom domain, this project automatically routes and manages independent firmware and hardware interfaces across separate repositories using an organized subfolder hierarchy.

---

## 📂 Project Categories

### 📟 ESP8266 Projects
*   **[Onboard LED Blink](./esp8266-onboard-led-blink/)** 💡 – A template project running a 5Hz onboard LED blinker built using PlatformIO to establish a structured repository baseline for future builds.
*   **[7-Segment Counter](./esp8266-7segment-counter/)** 🔢 – A single-digit numerical counter cycling 0→9 every second on a 3631AS common cathode display using a custom byte lookup table.

### 📶 ESP32 Projects
*   *Coming Soon* 🔒 – Future smart automation systems, Bluetooth Low Energy (BLE) matrices, and dual-core processing applications.

### 🔌 Arduino Projects
*   *Coming Soon* 🔒 – Legacy standalone firmware modules, sensor array integrations, and physical computing micro-projects.

---

## 🛠️ Architecture & Routing Mechanics

This layout utilizes GitHub's native **User Site Architecture**:
1. This base repository handles the root directory mapping for my custom domain (`yourdomain.com`).
2. Secondary module repositories are configured for GitHub Pages with their *Custom Domain fields left entirely blank*.
3. GitHub automatically reads the project structure and maps the standalone builds into corresponding subfolders (e.g., `yourdomain.com/project-title`).

## 💻 Technical Stack
*   **HTML5** – Structured presentation layers and semantic groupings.
*   **CSS3** – Minimalist dark aesthetics, custom glassmorphism card surfaces, and dynamic hover animations (`transform: translateX`).
*   **JavaScript (ES6)** – Interactive DOM event handlers providing contextual project status feeds.
