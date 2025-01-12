const responses = {
  merhaba: "Merhaba! Nasılsın?",
  nasılsın: "İyiyim, teşekkür ederim. Sen nasılsın?",
  iyiyim: "Bunu duymak güzel!",
  "adın ne": "Benim adım ChatBot!",
  görüşürüz: "Görüşmek üzere! İyi günler!",
  teşekkürler: "Rica ederim!",
  "ne yapıyorsun": "Sana yardımcı olmaya çalışıyorum!",
  nerelisin: "Ben bir yazılımım, belirli bir yerden değilim!",
  "bugün hava nasıl":
    "Ben bir hava durumu uygulaması değilim ama internette kontrol edebilirsin!",
  "bana şarkı söyle":
    "Maalesef şarkı söyleyemem ama seni mutlu etmek için buradayım!",
  "kaç yaşındasın": "Benim yaşım yok ama sürekli öğreniyorum!",
  "yemek tarifi ver": "Bazı güzel yemek tariflerini internette bulabilirsin!",
  "fıkra anlat":
    "Tabii! Adamın biri uçakla gidiyormuş, ama uçmayı bilmiyormuş! 😊",
  "film öner":
    "Bazı harika filmler: Inception, Interstellar, ve Matrix. Senin favorin hangisi?",
  "nasıl kod yazılır":
    "Kod yazmak harika bir süreç! Nereden başlayacağını söylersen, yardımcı olabilirim.",
  "saat kaç": "Ben saati bilmiyorum ama cihazının saatine bakabilirsin!",
  "yardım et": "Tabii ki, neye ihtiyacın var?",
  "programlama nedir":
    "Programlama, bilgisayarlara ne yapacaklarını söylemenin bir yoludur!",
  "spor yapıyor musun":
    "Ben bir yazılımım, spor yapmam ama sen yapmayı düşünüyorsan çok iyi bir karar olur!",
  "uyuyor musun": "Hayır, ben hiç uyumam!",
  "komik bir şey söyle":
    "Tabii! Bilgisayar neden limonata yapamaz? Çünkü yeterince RAM’i yok! 😊",
};

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value.toLowerCase().trim();

  if (message === "") return;

  // Kullanıcı mesajını ekle
  addMessage(message, "user");

  // Bot yanıtını ekle
  setTimeout(() => {
    const botResponse = getBotResponse(message);
    addMessage(botResponse, "bot");
  }, 500);

  messageInput.value = "";
}

function getBotResponse(message) {
  // Mesajda anahtar kelime var mı kontrol et
  for (let key in responses) {
    if (message.includes(key)) {
      return responses[key];
    }
  }
  return "Üzgünüm, ne demek istediğini anlayamadım.";
}

function addMessage(message, sender) {
  const chatBox = document.getElementById("chatBox");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;

  if (sender === "bot") {
    // Bot mesajlarına icon ekle
    const botIcon = document.createElement("img");
    botIcon.src = "./images/icon.png";
    botIcon.alt = "Bot Icon";
    botIcon.className = "bot-icon";
    messageDiv.appendChild(botIcon);
  }

  const messageText = document.createElement("span");
  messageText.textContent = message;

  messageDiv.appendChild(messageText);
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Enter tuşuna basıldığında mesaj gönderme
document
  .getElementById("messageInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const chatContainer = document.querySelector(".chat-container");
  let isDarkMode = false;

  themeToggleButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      chatContainer.classList.add("dark-mode");
      chatContainer.classList.remove("light-mode");
      themeToggleButton.textContent = "☀️";
    } else {
      chatContainer.classList.add("light-mode");
      chatContainer.classList.remove("dark-mode");
      themeToggleButton.textContent = "🌙";
    }
  });
});
