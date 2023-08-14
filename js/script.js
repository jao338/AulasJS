let text = '  Lorem Ipsum Ipsum        '

let p = document.querySelector('p')

p.innerHTML = text.length;
p.innerHTML += (' : ' + text.slice(0,5));
p.innerHTML += (' : ' + text.slice(-12,5));
p.innerHTML += (' : ' + text.substr(6,5));
p.innerHTML += (' : ' + text.replace("Ipsum", "Ipsun"));
p.innerHTML += (' : ' + text.replace(/Ipsum/i, "Ipsun"));
p.innerHTML += (' : ' + text.replaceAll('Ipsum', 'Ipsun'));
p.innerHTML += (' : ' + text.toUpperCase());
p.innerHTML += (' : ' + text.toLowerCase());
p.innerHTML += (' : ' + text.trim)