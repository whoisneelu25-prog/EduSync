// SyncBuddy Learning Companion Chat Controller


export const promptResponses = {
  'fruits': {
    studentText: 'Why are fruits so colorful and sweet?',
    companionText: 'Nature is super clever! 🍎 Fruits have vibrant colors like bright red strawberries and sunny yellow bananas so birds and friendly animals notice them. The natural sweetness comes from gentle fruit sugars (fructose) packed with energy and vitamins for growing bodies!',
    hasVisual: true,
    visualIcon: '🍓',
    visualDesc: '<strong>Nature Power:</strong> Bright colors = Vitamins + Minerals + Fiber!'
  },
  'adjectives': {
    studentText: 'How do I know when to use -er vs -est?',
    companionText: 'Here is the easy rule! 📏 Compare <strong>2 things</strong>? Use <strong>-ER</strong>: <em>"My pencil is short<strong>er</strong> than yours."</em> Compare <strong>3 or more</strong>? Use <strong>-EST</strong>: <em>"This is the short<strong>est</strong> pencil in the whole class!"</em>',
    hasVisual: true,
    visualIcon: '✏️',
    visualDesc: '<strong>Comparison Formula:</strong> 2 items = -ER | 3+ items = -EST!'
  },
  'pizza': {
    studentText: 'Can you explain fractions with a pizza?',
    companionText: 'Imagine a warm cheesy pizza fresh out of the oven! 🍕 If you share it with one best friend, you cut it down the center into 2 equal slices. You get 1 out of 2 pieces — that is <strong>1/2</strong>! If two more friends join, you cut it into 4 slices. You now get 1 out of 4 — that is <strong>1/4</strong>.',
    hasVisual: true,
    visualIcon: '🍕',
    visualDesc: '<strong>Visual Rule:</strong> 1/2 gives you a huge half-pizza slice, while 1/4 gives a smaller quarter piece!'
  },
  'another-way': {
    studentText: 'Can you explain another way?',
    companionText: 'Think of a chocolate bar with 8 breakable mini-squares 🍫! If you take <strong>1/2</strong> of the bar, you get <strong>4 whole squares</strong>. But if you only take <strong>1/4</strong> of the bar, you get <strong>2 squares</strong>. 4 squares is more chocolate than 2 squares!',
    hasVisual: true,
    visualIcon: '🍫',
    visualDesc: '<strong>Chocolate rule:</strong> Half the bar (4 blocks) > Quarter the bar (2 blocks).'
  },
  'challenge': {
    studentText: 'Can you challenge me with a puzzle?',
    companionText: 'Here is a quick puzzle for you! 🌟 If you have <strong>2/4</strong> of a pizza and your friend has <strong>1/2</strong> of a pizza, who has more pizza? (Hint: Try putting two 1/4 slices together side by side!)',
    hasVisual: true,
    visualIcon: '🏆',
    visualDesc: '<strong>Mastery Challenge:</strong> 2/4 and 1/2 are equal (equivalent fractions)!'
  }
};

export function initCompanionChat() {
  const chatBody = document.querySelector('.companion-chat-body');
  const typingIndicator = document.querySelector('.typing-indicator');
  const promptChips = document.querySelectorAll('.prompt-chip');
  const chatInput = document.querySelector('.companion-input');
  const sendBtn = document.querySelector('.companion-send-btn');

  let isTyping = false;

  function scrollToBottom() {
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  function addStudentMessage(text) {
    if (!chatBody) return;
    const row = document.createElement('div');
    row.className = 'chat-bubble-row student-row';
    row.innerHTML = `
      <div class="chat-avatar-mini">🎒</div>
      <div class="chat-message-bubble">${text}</div>
    `;
    chatBody.appendChild(row);
    scrollToBottom();
  }

  function addCompanionMessage(text, visual = null) {
    if (!chatBody) return;
    const row = document.createElement('div');
    row.className = 'chat-bubble-row companion-row';

    let visualHtml = '';
    if (visual) {
      visualHtml = `
        <div class="chat-visual-card">
          <div class="pizza-icon">${visual.icon}</div>
          <div class="chat-visual-card-text">${visual.desc}</div>
        </div>
      `;
    }

    row.innerHTML = `
      <div class="chat-avatar-mini">✨</div>
      <div class="chat-message-bubble">
        <p>${text}</p>
        ${visualHtml}
      </div>
    `;
    chatBody.appendChild(row);
    scrollToBottom();
  }

  function handlePrompt(promptKey) {
    if (isTyping) return;
    const prompt = promptResponses[promptKey];
    if (!prompt) return;

    isTyping = true;
    addStudentMessage(prompt.studentText);

    // Show typing dots
    if (typingIndicator) {
      typingIndicator.classList.add('active');
      chatBody?.appendChild(typingIndicator);
      scrollToBottom();
    }

    setTimeout(() => {
      if (typingIndicator) {
        typingIndicator.classList.remove('active');
      }
      addCompanionMessage(
        prompt.companionText,
        prompt.hasVisual ? { icon: prompt.visualIcon, desc: prompt.visualDesc } : null
      );
      isTyping = false;
    }, 1100);
  }

  // Bind prompt chips
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.dataset.prompt;
      if (key) handlePrompt(key);
    });
  });

  // Custom user input
  function handleCustomInput() {
    if (isTyping || !chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;

    chatInput.value = '';
    isTyping = true;
    addStudentMessage(text);

    if (typingIndicator) {
      typingIndicator.classList.add('active');
      chatBody?.appendChild(typingIndicator);
      scrollToBottom();
    }

    setTimeout(() => {
      if (typingIndicator) {
        typingIndicator.classList.remove('active');
      }

      // Generate context-aware friendly reply
      const lower = text.toLowerCase();
      let reply = "That's a great question! Let's explore it step by step. What part of the concept feels most confusing?";
      let visual = null;

      if (lower.includes('pizza') || lower.includes('fraction') || lower.includes('half') || lower.includes('quarter')) {
        reply = "Great curiosity! Whenever you see a fraction like 1/2 or 1/4, think of dividing a single whole item into equal portions. The top number is what you have, and the bottom number is the total equal pieces.";
        visual = { icon: '🍕', desc: '<strong>Sync Tip:</strong> 1/2 is 2 equal parts, 1/4 is 4 equal parts!' };
      } else if (lower.includes('why') || lower.includes('how')) {
        reply = "I love how curious you are! When learning new concepts, asking 'Why' is the best superpower. Let's look at a simple everyday example together.";
        visual = { icon: '💡', desc: '<strong>Learning Tip:</strong> Breaking concepts down makes anything easy!' };
      }

      addCompanionMessage(reply, visual);
      isTyping = false;
    }, 1200);
  }

  sendBtn?.addEventListener('click', handleCustomInput);
  chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCustomInput();
    }
  });
}
