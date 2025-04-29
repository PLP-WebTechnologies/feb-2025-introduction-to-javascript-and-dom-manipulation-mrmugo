// Change text and style
document.getElementById("change-btn").addEventListener("click", function () {
    const desc = document.getElementById("description");
    desc.textContent = "You just changed this text with JavaScript!";
    desc.style.color = "green";
    desc.style.fontWeight = "bold";
  });
  
  // Add or remove element dynamically
  document.getElementById("toggle-element-btn").addEventListener("click", function () {
    const container = document.getElementById("element-container");
    const existing = document.getElementById("dynamic-element");
  
    if (existing) {
      existing.remove();
    } else {
      const newEl = document.createElement("p");
      newEl.id = "dynamic-element";
      newEl.textContent = "🎉 You added a new element!";
      container.appendChild(newEl);
    }
  });
  