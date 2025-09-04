function previewPlayer() {
  const streamUrl = document.getElementById("streamUrl").value.trim();
  const vastUrl = document.getElementById("vastUrl").value.trim();

  if (!streamUrl) {
    alert("Please enter a valid M3U8 URL.");
    return;
  }

  const embedUrl = `player.html?url=${encodeURIComponent(streamUrl)}&vast=${encodeURIComponent(vastUrl)}`;

  const embedCode = `<iframe src="${embedUrl}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
  
  document.getElementById("embedBox").classList.remove("hidden");
  document.getElementById("embedCode").value = embedCode;

  window.open(embedUrl, "_blank");
}

function copyEmbed() {
  const embedCode = document.getElementById("embedCode");
  embedCode.select();
  document.execCommand("copy");
  alert("Embed code copied!");
}

// Anti-copy (disable right-click)
document.addEventListener("contextmenu", e => e.preventDefault());
