let wordCounter = document.getElementById('word-count');
let textarea = document.getElementById('text-input');

function wordCount(text) {
  return text.length;
}

function updateCount(text) {
  wordCounter.innerHTML = wordCount(text);
}

textarea.addEventListener('keyup', e => {
  limitMaxWordLength(textarea, 100);
  wordCounter.value = wordCount(textarea.value);
});

function limitMaxWordLength(textarea, max) {
  let text = textarea.value;

  if (text.length > max) {
    alert(`${max}文字以上は入力できません！`);
    textarea.disabled = true;
  }
}