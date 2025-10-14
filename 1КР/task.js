const elX = document.getElementById('x');
const elA = document.getElementById('a');
const elB = document.getElementById('b');
const btn = document.getElementById('check');
const out = document.getElementById('out');

function validateAndCheck() {
    const vx = parseFloat(elX.value);
    const va = parseFloat(elA.value);
    const vb = parseFloat(elB.value);

    if (isNaN(vx) || isNaN(va) || isNaN(vb)) {
        out.textContent = '❌ Введи числа в поля X, a и b.';
        out.style.display = 'block';
        return;
    }

    let left = Math.min(va, vb);
    let right = Math.max(va, vb);

    if (vx >= left && vx <= right) {
        out.textContent = `✅ Число ${vx} принадлежит интервалу [${left}, ${right}].`;
    } else {
        out.textContent = `❌ Число ${vx} не принадлежит интервалу [${left}, ${right}].`;
    }

    out.style.display = 'block';
}

btn.addEventListener('click', validateAndCheck);
