// Baut die Seite aus den Angaben in config.js auf. Hier musst du nichts ändern.
(function () {
  "use strict";

  var MOCKUPS = ["sheet", "doc", "board", "social", "chat"];
  var COLORS = ["green", "blue", "amber", "rose", "violet", "teal"];

  var shop = window.SHOP;
  var errorBox = document.getElementById("config-error");

  function showErrors(list) {
    if (!errorBox) return;
    errorBox.hidden = false;
    if (list && list.length) {
      var ul = document.createElement("ul");
      list.forEach(function (msg) {
        var li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
      });
      errorBox.appendChild(ul);
    }
  }

  if (!shop) {
    showErrors();
    return;
  }

  // ---------- Hilfsfunktionen ----------
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function setText(id, value) {
    var node = document.getElementById(id);
    if (node && value) node.textContent = value;
  }

  function isLive(link) {
    return typeof link === "string" && link !== "" && link !== "#";
  }

  var euro = function (n) {
    if (typeof n !== "number" || !isFinite(n)) return String(n);
    var whole = Math.round(n * 100) % 100 === 0;
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: whole ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(n);
  };

  function buyButton(link, label, extraClass) {
    var live = isLive(link);
    var btn = el("a", "btn " + (live ? "btn-primary" : "btn-disabled") + (extraClass ? " " + extraClass : ""), live ? label : "Bald verfügbar");
    if (live) {
      btn.href = link;
      btn.target = "_blank";
      btn.rel = "noopener";
    } else {
      btn.setAttribute("aria-disabled", "true");
    }
    return btn;
  }

  // Kleine, gezeichnete Produktvorschau (ohne Bilddateien)
  function mockup(type, color) {
    var m = el("div", "mock mock-" + type + " c-" + color);
    var bar = el("div", "mock-bar");
    bar.appendChild(el("i"));
    bar.appendChild(el("i"));
    bar.appendChild(el("i"));
    m.appendChild(bar);
    var body = el("div", "mock-body");
    var i;

    if (type === "sheet") {
      var table = el("div", "mock-table");
      for (i = 0; i < 20; i++) table.appendChild(el("span", i < 4 ? "head" : i % 4 === 3 ? "num" : ""));
      body.appendChild(table);
      var chart = el("div", "mock-chart");
      [45, 70, 55, 85, 65, 95].forEach(function (h) {
        var b = el("span");
        b.style.height = h + "%";
        chart.appendChild(b);
      });
      body.appendChild(chart);
    } else if (type === "doc") {
      body.appendChild(el("div", "line title"));
      body.appendChild(el("div", "line short"));
      var box = el("div", "mock-doc-box");
      for (i = 0; i < 3; i++) {
        var row = el("div", "doc-row");
        row.appendChild(el("span"));
        row.appendChild(el("span", "num"));
        box.appendChild(row);
      }
      body.appendChild(box);
      body.appendChild(el("div", "line"));
      body.appendChild(el("div", "line medium"));
    } else if (type === "board") {
      var cols = el("div", "mock-cols");
      [3, 2, 3].forEach(function (n, ci) {
        var col = el("div", "col");
        col.appendChild(el("span", "col-head"));
        for (var k = 0; k < n; k++) col.appendChild(el("span", "card-mini" + (ci === 2 ? " done" : "")));
        cols.appendChild(col);
      });
      body.appendChild(cols);
    } else if (type === "social") {
      var grid = el("div", "mock-grid");
      for (i = 0; i < 9; i++) grid.appendChild(el("span", "tile t" + (i % 3)));
      body.appendChild(grid);
    } else if (type === "chat") {
      body.appendChild(el("div", "bubble me"));
      body.appendChild(el("div", "bubble ai long"));
      body.appendChild(el("div", "bubble ai"));
      body.appendChild(el("div", "bubble me short"));
      var input = el("div", "chat-input");
      input.appendChild(el("span"));
      body.appendChild(input);
    }

    m.appendChild(body);
    return m;
  }

  // ---------- Konfiguration prüfen ----------
  var products = Array.isArray(shop.products) ? shop.products : [];
  var categories = Array.isArray(shop.categories) ? shop.categories : [];
  var byId = {};
  var problems = [];

  products.forEach(function (p, idx) {
    var label = "Produkt " + (idx + 1) + (p.title ? " (" + p.title + ")" : "");
    if (!p.id) problems.push(label + ": 'id' fehlt.");
    else if (byId[p.id]) problems.push(label + ": Die id '" + p.id + "' ist doppelt vergeben.");
    else byId[p.id] = p;
    if (typeof p.price !== "number") problems.push(label + ": 'price' muss eine Zahl ohne Anführungszeichen sein, z. B. 19");
    if (categories.indexOf(p.category) === -1) problems.push(label + ": Kategorie '" + p.category + "' steht nicht in 'categories'.");
    if (MOCKUPS.indexOf(p.mockup) === -1) p.mockup = "doc";
    if (COLORS.indexOf(p.color) === -1) p.color = "green";
  });

  if (shop.bundle) {
    (shop.bundle.includes || []).forEach(function (id) {
      if (!byId[id]) problems.push("Paket: Das Produkt mit der id '" + id + "' gibt es nicht.");
    });
    if (typeof shop.bundle.price !== "number") problems.push("Paket: 'price' muss eine Zahl sein.");
  }

  if (problems.length) showErrors(problems);

  // ---------- Allgemeine Texte ----------
  if (shop.name) {
    var h1 = document.querySelector(".legal h1");
    document.title = h1
      ? h1.textContent + " – " + shop.name
      : shop.name + (shop.tagline ? " – " + shop.tagline : "");
  }

  document.querySelectorAll("[data-shop]").forEach(function (node) {
    var value = shop[node.getAttribute("data-shop")];
    if (value) node.textContent = value;
    else if (node.classList.contains("brand-tag")) node.remove();
  });

  var hero = shop.hero || {};
  setText("hero-eyebrow", hero.eyebrow);
  setText("hero-headline", hero.headline);
  setText("hero-accent", hero.headlineAccent);
  setText("hero-subline", hero.subline);
  setText("hero-cta1", hero.ctaPrimary);
  setText("hero-cta2", hero.ctaSecondary);
  if (!hero.eyebrow) {
    var eb = document.getElementById("hero-eyebrow");
    if (eb) eb.remove();
  }
  if (!shop.freebie) {
    var cta2 = document.getElementById("hero-cta2");
    if (cta2) cta2.remove();
  }

  document.querySelectorAll("[data-mockup]").forEach(function (node) {
    node.appendChild(mockup(node.getAttribute("data-mockup"), node.getAttribute("data-color")));
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".mail-link").forEach(function (a) {
    if (shop.email) {
      a.href = "mailto:" + shop.email;
      a.textContent = shop.email;
    } else {
      a.remove();
    }
  });

  var works = document.getElementById("works-list");
  if (works) {
    (shop.worksWith || []).forEach(function (w) { works.appendChild(el("li", null, w)); });
    if (!works.children.length) works.closest(".works").remove();
  }

  // ---------- Produktdetails (Dialog) ----------
  var modal = document.getElementById("modal");
  var modalContent = document.getElementById("modal-content");

  function openProduct(p, updateHash) {
    if (!modal || !modalContent) return;
    modalContent.textContent = "";

    var close = el("button", "modal-close");
    close.type = "button";
    close.setAttribute("aria-label", "Schließen");
    close.textContent = "×";
    close.addEventListener("click", function () { modal.close(); });
    modalContent.appendChild(close);

    var visual = el("div", "modal-visual c-" + p.color);
    visual.appendChild(mockup(p.mockup, p.color));
    modalContent.appendChild(visual);

    var body = el("div", "modal-body");
    body.appendChild(el("p", "kicker", p.category));
    var h = el("h2", null, p.title);
    h.id = "modal-title";
    // Fokus beim Öffnen auf den Titel statt auf den Schließen-Knopf
    h.tabIndex = -1;
    h.setAttribute("autofocus", "");
    body.appendChild(h);
    if (p.description) body.appendChild(el("p", "muted", p.description));

    if (p.includes && p.includes.length) {
      body.appendChild(el("h3", "modal-sub", "Das ist enthalten"));
      var ul = el("ul", "check-list");
      p.includes.forEach(function (x) { ul.appendChild(el("li", null, x)); });
      body.appendChild(ul);
    }

    if (p.formats && p.formats.length) {
      var fm = el("div", "formats");
      p.formats.forEach(function (f) { fm.appendChild(el("span", "chip", f)); });
      body.appendChild(fm);
    }

    var foot = el("div", "modal-foot");
    var priceBox = el("div", "price-box");
    priceBox.appendChild(el("span", "price", euro(p.price)));
    if (shop.priceNote) priceBox.appendChild(el("span", "price-note", shop.priceNote));
    foot.appendChild(priceBox);
    foot.appendChild(buyButton(p.link, "Jetzt kaufen", "btn-large"));
    body.appendChild(foot);

    modalContent.appendChild(body);

    if (updateHash !== false && history.replaceState) history.replaceState(null, "", "#" + p.id);
    if (!modal.open) modal.showModal();
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.close();
    });
    modal.addEventListener("close", function () {
      if (byId[location.hash.slice(1)] && history.replaceState) {
        history.replaceState(null, "", location.pathname + location.search);
      }
    });
  }

  function openFromHash() {
    var p = byId[decodeURIComponent(location.hash.slice(1))];
    if (p) openProduct(p, false);
  }
  window.addEventListener("hashchange", openFromHash);

  // ---------- Produktkarten ----------
  var grid = document.getElementById("product-grid");

  function productCard(p) {
    var card = el("article", "product c-" + p.color);
    card.setAttribute("data-category", p.category);

    var visual = el("button", "product-visual");
    visual.type = "button";
    visual.setAttribute("aria-label", "Details zu " + p.title);
    visual.appendChild(mockup(p.mockup, p.color));
    if (p.badge) visual.appendChild(el("span", "badge", p.badge));
    visual.addEventListener("click", function () { openProduct(p); });
    card.appendChild(visual);

    var body = el("div", "product-body");
    body.appendChild(el("p", "product-cat", p.category));
    body.appendChild(el("h3", null, p.title));
    if (p.tagline) body.appendChild(el("p", "muted", p.tagline));

    var foot = el("div", "product-foot");
    var priceBox = el("div", "price-box");
    priceBox.appendChild(el("span", "price", euro(p.price)));
    if (shop.priceNote) priceBox.appendChild(el("span", "price-note", shop.priceNote));
    foot.appendChild(priceBox);

    var more = el("button", "btn btn-ghost", "Details");
    more.type = "button";
    more.addEventListener("click", function () { openProduct(p); });
    foot.appendChild(more);
    body.appendChild(foot);

    card.appendChild(body);
    return card;
  }

  if (grid) {
    products.forEach(function (p) { grid.appendChild(productCard(p)); });
  }

  // ---------- Kategorie-Filter ----------
  var filters = document.getElementById("filters");
  if (filters) {
    var used = categories.filter(function (c) {
      return products.some(function (p) { return p.category === c; });
    });
    if (used.length > 1) {
      ["Alle"].concat(used).forEach(function (c, idx) {
        var b = el("button", "filter" + (idx === 0 ? " active" : ""), c);
        b.type = "button";
        b.setAttribute("role", "tab");
        b.setAttribute("aria-selected", idx === 0 ? "true" : "false");
        b.addEventListener("click", function () {
          filters.querySelectorAll(".filter").forEach(function (x) {
            x.classList.remove("active");
            x.setAttribute("aria-selected", "false");
          });
          b.classList.add("active");
          b.setAttribute("aria-selected", "true");
          grid.querySelectorAll(".product").forEach(function (card) {
            card.hidden = c !== "Alle" && card.getAttribute("data-category") !== c;
          });
        });
        filters.appendChild(b);
      });
    } else {
      filters.remove();
    }
  }

  // ---------- Paket ----------
  var bundleBox = document.getElementById("bundle");
  var bundle = shop.bundle;
  if (bundleBox && bundle) {
    var items = (bundle.includes || []).map(function (id) { return byId[id]; }).filter(Boolean);
    var sum = items.reduce(function (acc, p) { return acc + (typeof p.price === "number" ? p.price : 0); }, 0);
    var saving = Math.round((sum - bundle.price) * 100) / 100;

    var left = el("div", "bundle-copy");
    left.appendChild(el("p", "kicker kicker-light", "Bestes Angebot"));
    left.appendChild(el("h2", null, bundle.title));
    if (bundle.text) left.appendChild(el("p", "bundle-text", bundle.text));
    var list = el("ul", "bundle-list");
    items.forEach(function (p) {
      var li = el("li");
      li.appendChild(el("span", null, p.title));
      li.appendChild(el("span", "bundle-item-price", euro(p.price)));
      list.appendChild(li);
    });
    left.appendChild(list);
    bundleBox.appendChild(left);

    var right = el("div", "bundle-offer");
    if (saving > 0) {
      right.appendChild(el("span", "save-pill", "Du sparst " + euro(saving)));
      right.appendChild(el("p", "bundle-compare", "Einzeln zusammen " + euro(sum)));
    }
    right.appendChild(el("p", "bundle-price", euro(bundle.price)));
    if (shop.priceNote) right.appendChild(el("p", "price-note price-note-light", shop.priceNote));
    right.appendChild(buyButton(bundle.link, "Paket kaufen", "btn-large btn-light"));
    bundleBox.appendChild(right);
  } else if (bundleBox) {
    bundleBox.closest("section").remove();
    document.querySelectorAll('a[href="#paket"]').forEach(function (a) { a.remove(); });
  }

  // ---------- Kundenstimmen ----------
  var tWrap = document.getElementById("testimonials");
  if (tWrap && Array.isArray(shop.testimonials) && shop.testimonials.length) {
    shop.testimonials.forEach(function (t) {
      var fig = el("figure", "testimonial");
      fig.appendChild(el("blockquote", null, "„" + t.text + "“"));
      var cap = el("figcaption");
      cap.appendChild(el("strong", null, t.name));
      if (t.product) cap.appendChild(el("span", "muted", " · " + t.product));
      fig.appendChild(cap);
      tWrap.appendChild(fig);
    });
    document.getElementById("stimmen").hidden = false;
  }

  // ---------- Gratis-Vorlage ----------
  var freeBox = document.getElementById("freebie");
  var free = shop.freebie;
  if (freeBox && free) {
    var fv = el("div", "freebie-visual");
    fv.appendChild(mockup("sheet", "amber"));
    freeBox.appendChild(fv);
    var fc = el("div", "freebie-copy");
    fc.appendChild(el("p", "kicker", "0 € · Sofort-Download"));
    fc.appendChild(el("h2", null, free.title));
    if (free.text) fc.appendChild(el("p", "muted", free.text));
    fc.appendChild(buyButton(free.link, free.button || "Kostenlos herunterladen", "btn-large"));
    freeBox.appendChild(fc);
  } else if (freeBox) {
    freeBox.closest("section").remove();
  }

  // ---------- FAQ ----------
  var faq = document.getElementById("faq-list");
  if (faq) {
    (shop.faq || []).forEach(function (item) {
      var d = el("details", "faq");
      d.appendChild(el("summary", null, item.q));
      d.appendChild(el("p", "muted", item.a));
      faq.appendChild(d);
    });
  }

  // ---------- Kopfzeile beim Scrollen ----------
  var topbar = document.querySelector(".topbar");
  if (topbar) {
    var onScroll = function () { topbar.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  openFromHash();
})();
