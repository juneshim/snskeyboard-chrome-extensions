document.addEventListener("DOMContentLoaded", () => {
  const githubBtn = document.getElementById("github-btn");
  const addBtn = document.getElementById("add-btn");
  const deleteBtn = document.getElementById("delete-btn");
  const container0 = document.getElementById("container-0");
  const container1 = document.getElementById("container-1");
  const container2 = document.getElementById("container-2");
  const toast = document.getElementById("toast");

  let isAddMode = false;
  let isDeleteMode = false;

  loadFavorites();
  loadCategories();

  githubBtn.addEventListener("click", () => {
    window.open("https://github.com/juneshim/snskeyboard-chrome-extensions", "_blank");
  });

  addBtn.addEventListener("click", () => {
    isAddMode = !isAddMode;
    isDeleteMode = false;
    updateButtonStates();
  });

  deleteBtn.addEventListener("click", () => {
    isDeleteMode = !isDeleteMode;
    isAddMode = false;
    updateButtonStates();
  });

  function updateButtonStates() {
    addBtn.className = isAddMode ? "add-active" : "add-no";
    deleteBtn.className = isDeleteMode ? "delete-active" : "delete-no";
  }

  function loadFavorites() {
    chrome.storage.sync.get(["favorites"], (result) => {
      container0.innerHTML = "";
      const favorites = result.favorites || [];
      favorites.forEach((favorite) => {
        const btn = createButton(favorite, 0);
        container0.appendChild(btn);
      });
    });
  }

  function loadCategories() {
    const totalCategories = 43;
    const categoriesWithLevels = Array.from({ length: totalCategories }, (_, index) => ({
      id: `${index + 1}` 
    }));
  
    Promise.all([
      fetch('assets/category.txt').then(response => response.text()),
      fetch('assets/class.txt').then(response => response.text())
    ])
    .then(([categoryText, levelText]) => {
      const categoryNames = categoryText.split('\n').filter(name => name.trim() !== '');
      const levelNames = levelText.split('\n').filter(level => level.trim() !== '');
  
      categoriesWithLevels.forEach((category, index) => {
        const btn = document.createElement('button');
        
        btn.textContent = categoryNames[index] || `Category ${category.id}`;
        
        const levelClass = levelNames[index] ? `${levelNames[index]}` : 'lv1';
        btn.classList.add('category-btn', levelClass);
        
        btn.addEventListener('click', () => loadEmoticons(category.id));
        container1.appendChild(btn);
      });
    })
    .catch(error => {
      console.error('Error loading categories or levels:', error);
      
      categoriesWithLevels.forEach((category, index) => {
        const btn = document.createElement('button');
        btn.textContent = `Category ${category.id}`;
        btn.classList.add('category-btn', 'lv1');
        btn.addEventListener('click', () => loadEmoticons(category.id));
        container1.appendChild(btn);
      });
    });
  }

  function loadEmoticons(category) {
    container2.innerHTML = "";
    container1.style.display = "none";
    container2.style.display = "flex";

    fetch(`assets/${category}.txt`)
      .then((response) => response.text())
      .then((text) => {
        const emoticons = text.split("\n").filter((e) => e.trim() !== "");
        emoticons.forEach((emoticon) => {
          const btn = createButton(emoticon, 2);
          container2.appendChild(btn);
        });
      })
      .catch((error) => console.error("Error loading emoticons:", error));
  }

  function createButton(text, containerId) {
    const btn = document.createElement('button');
    btn.textContent = text;
  
    if (containerId === 0 || containerId === 2) {
      const styleVariants = [
        { rgb: 'rgb(245,245,245)', class: 'btn-style-1' },
        { rgb: 'rgb(250,250,250)', class: 'btn-style-2' },
        { rgb: 'rgb(255,255,255)', class: 'btn-style-3' }
      ];
      const randomStyle = styleVariants[Math.floor(Math.random() * styleVariants.length)];
      btn.classList.add('random-style-btn', randomStyle.class);
      btn.style.backgroundColor = randomStyle.rgb;
    }
  
    btn.addEventListener('click', () => {
      if (containerId === 0 && isDeleteMode) {
        chrome.storage.sync.get(['favorites'], (result) => {
          const favorites = result.favorites || [];
          const updatedFavorites = favorites.filter(f => f !== text);
          chrome.storage.sync.set({ favorites: updatedFavorites }, () => {
            loadFavorites();
          });
        });
      } else if (containerId === 2 && isAddMode) {
        chrome.storage.sync.get(['favorites'], (result) => {
          const favorites = result.favorites || [];
          if (!favorites.includes(text)) {
            favorites.push(text);
            chrome.storage.sync.set({ favorites }, () => {
              loadFavorites();
            });
          }
        });
      } else {
        navigator.clipboard.writeText(text).then(() => {
          showToast('특수문자를 복사했어요 👏');
        });
      }
    });
  
    return btn;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 500);
  }

  container2.addEventListener("click", (e) => {
    if (e.target === container2) {
      container2.style.display = "none";
      container1.style.display = "flex";
    }
  });
});
