// Baut die Seite aus den Angaben in config.js auf. Hier musst du nichts ändern.
(function () {
  var shop = window.SHOP;
  if (!shop) return;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  document.title = shop.name;
  document.querySelectorAll("[data-shop]").forEach(function (node) {
    var value = shop[node.getAttribute("data-shop")];
    if (value) node.textContent = value;
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var mail = document.getElementById("mail");
  if (mail && shop.email) {
    mail.href = "mailto:" + shop.email;
    mail.textContent = shop.email;
  }

  var grid = document.getElementById("product-grid");
  if (grid) {
    (shop.products || []).forEach(function (p) {
      var card = el("article", "card");
      if (p.badge) card.appendChild(el("span", "badge", p.badge));
      card.appendChild(el("div", "emoji", p.emoji || "📦"));
      card.appendChild(el("h3", null, p.title));
      card.appendChild(el("p", "muted", p.description));

      var list = el("ul", "features");
      (p.features || []).forEach(function (f) { list.appendChild(el("li", null, f)); });
      card.appendChild(list);

      var foot = el("div", "card-foot");
      foot.appendChild(el("span", "price", p.price));
      var ready = p.link && p.link !== "#";
      var btn = el("a", "btn " + (ready ? "btn-primary" : "btn-disabled"), ready ? "Jetzt kaufen" : "Bald verfügbar");
      if (ready) {
        btn.href = p.link;
        btn.target = "_blank";
        btn.rel = "noopener";
      }
      foot.appendChild(btn);
      card.appendChild(foot);
      grid.appendChild(card);
    });
  }

  var faq = document.getElementById("faq-list");
  if (faq) {
    (shop.faq || []).forEach(function (item) {
      var d = el("details", "faq");
      d.appendChild(el("summary", null, item.q));
      d.appendChild(el("p", "muted", item.a));
      faq.appendChild(d);
    });
  }
})();
