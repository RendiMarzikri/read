/* ====================================
*  RENDI-MARZIKRJ.JS |
*  PUBLIC UNIVERSAL CDN v1
==================================== */

/* ===============================
   RENDER CONTENT
================================= */
function render(x, y, z) {
  const content = document.getElementById(y);
  var textcon = x;
  content.innerHTML = "";
  textcon.forEach(w => {
    content.innerHTML += `
      <div class="${z}">
        <h2>${w.title}</h2>
        <p>${w.text}</p>
      </div>
    `;
  });
}

/* ===============================
   RENDER TEXT
================================= */
function render_text(x, y) {
  const content = document.getElementById(y);
  var textcon = x;
  content.innerHTML = "";
  textcon.forEach(w => {
    content.innerHTML += `
      ${w.content}
    `;
  });
}
