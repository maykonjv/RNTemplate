export function applyMask(mask = '', value) {
  if (!mask) {
    return value;
  }
  if (!value) {
    return '';
  }
  value = value.replace(/[^\d]/g, '');
  var max =
    value.length < mask.length - mask.replace('_', '').length
      ? value.length
      : mask.length;
  var result = '';
  let valueIndex = 0;
  for (var i = 0; i < max; i++) {
    if (mask.charAt(i) !== '_') {
      result += mask.charAt(i);
    } else {
      result += value.charAt(valueIndex++);
    }
    if (valueIndex === value.length) {
      return result;
    }
  }
  return result;
}

/// test function applyMask
//console.log(applyMask('___.___.___-__', '059.670.106.378'));
// console.log(applyMask('(__)_____-____', '(17)981676991'));

export function applyMaskMoney(v) {
  if (v) {
    let value = String(v);
    value = value.replace(/[^\d]/g, '');
    if (value.length > 2) {
      let valueFormated = '';
      let toFixed = 0;
      for (let i = value.length - 1; i >= 0; i--) {
        valueFormated = value.charAt(i) + valueFormated;
        if (++toFixed === 2) {
          valueFormated = ',' + valueFormated;
        }
      }
      return valueFormated;
    }
    return value;
  }
  return '';
}

export function applyMaskMoneyBR(value) {
  if (value) {
    const v = ((value.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');
    const m = v[0]
      .split('')
      .reverse()
      .join('')
      .match(/.{1,3}/g);
    for (let i = 0; i < m.length; i++) {
      m[i] = m[i].split('').reverse().join('') + '.';
    }
    const r = m.reverse().join('');
    const vl = r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
    return vl;
  }
  return '';
}
