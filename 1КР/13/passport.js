document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('transform'); // находим кнопку
  let isLatin = false;

  button.addEventListener('click', () => {
    const elements = document.querySelectorAll('.passport *');
    elements.forEach(el => {
      if(el.children.length === 0) {
        el.textContent = isLatin ? toCyrillic(el.textContent) : toLatin(el.textContent);
      }
    });
    isLatin = !isLatin;
  });

  function toLatin(text) {
    const map = {
      'А': 'A', 'Б': 'B',
      'В': 'V', 'Г': 'G',
      'Д': 'D', 'Е': 'E',
      'Ё': 'E', 'Ж': 'Zh',
      'З': 'Z', 'И': 'I',
      'Й': 'Y', 'К': 'K',
      'Л': 'L', 'М': 'M',
      'Н': 'N', 'О': 'O',
      'П': 'P', 'Р': 'R',
      'С': 'S', 'Т': 'T',
      'У': 'U', 'Ф': 'F',
      'Х': 'Kh', 'Ц': 'Ts',
      'Ч': 'Ch', 'Ш': 'Sh',
      'Щ': 'Sch', 'Ъ': '',
      'Ы': 'Y', 'Ь': '',
      'Э': 'E', 'Ю': 'Yu',
      'Я': 'Ya', 'а': 'a',
      'б': 'b', 'в': 'v',
      'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'e',
      'ж': 'zh', 'з': 'z',
      'и': 'i', 'й': 'y',
      'к': 'k', 'л': 'l',
      'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p',
      'р': 'r', 'с': 's',
      'т': 't', 'у': 'u',
      'ф': 'f', 'х': 'kh',
      'ц': 'ts', 'ч': 'ch',
      'ш': 'sh', 'щ': 'sch',
      'ъ': '', 'ы': 'y',
      'ь': '', 'э': 'e',
      'ю': 'yu', 'я': 'ya'
    };
    return text.split('').map(ch => map[ch] || ch).join('');
  }

  function toCyrillic(text) {
    const map = {
      'Sch': 'Щ', 'sch': 'щ',
      'Sh': 'Ш', 'sh': 'ш',
      'Ch': 'Ч', 'ch': 'ч',
      'Kh': 'Х', 'kh': 'х',
      'Ts': 'Ц', 'ts': 'ц',
      'Yu': 'Ю', 'yu': 'ю',
      'Ya': 'Я', 'ya': 'я',
      'Zh': 'Ж', 'zh': 'ж',
      'A': 'А', 'a': 'а',
      'B': 'Б', 'b': 'б',
      'V': 'В', 'v': 'в',
      'G': 'Г', 'g': 'г',
      'D': 'Д', 'd': 'д',
      'E': 'Е', 'e': 'е',
      'Z': 'З', 'z': 'з',
      'I': 'И', 'i': 'и',
      'Y': 'Й', 'y': 'й',
      'K': 'К', 'k': 'к',
      'L': 'Л', 'l': 'л',
      'M': 'М', 'm': 'м',
      'N': 'Н', 'n': 'н',
      'O': 'О', 'o': 'о',
      'P': 'П', 'p': 'п',
      'R': 'Р', 'r': 'р',
      'S': 'С', 's': 'с',
      'T': 'Т', 't': 'т',
      'U': 'У', 'u': 'у',
      'F': 'Ф', 'f': 'ф'
    };
    return text.replace(/Sch|sch|Sh|sh|Ch|ch|Kh|kh|Ts|ts|Yu|yu|Ya|ya|Zh|zh|[A-Za-z]/g, m => map[m] || m);
  }

});
