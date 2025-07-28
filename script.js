
function playVideo() {
  const url = document.getElementById("m3u8-url").value.trim();
  const vast = document.getElementById("vast-url").value.trim();
  if (!url) return alert("Please enter a video stream URL.");

  const defaultVAST = "https://droopy-management.com/d.muFNzod/G-NrvUZgGbUS/leamt9WuaZAUqlZkIPRTzY/1gMozhcay/NODSM/tZNdjFUlzFNhzRI/0_N/CtZ/sFaxWW1ypNdyD/0/xS";
  jwplayer("videoPlayer").setup({
    file: url,
    width: "100%",
    height: "100%",
    aspectratio: "16:9",
    autostart: true,
    mute: false,
    advertising: {
      client: "vast",
      tag: vast || defaultVAST,
      skipoffset: 5
    }
  });

  const baseUrl = window.location.href.replace(/(index\.html)?(#.*)?$/, "");
  const embedUrl = \`\${baseUrl}player.html?url=\${encodeURIComponent(url)}&vast=\${encodeURIComponent(vast || defaultVAST)}\`;
  document.getElementById("embed-url").value = embedUrl;
}

function copyLink() {
  const embedUrl = document.getElementById("embed-url").value;
  navigator.clipboard.writeText(embedUrl).then(() => {
    alert("Embed URL copied!");
  }).catch(err => console.error("Copy error: ", err));
}
