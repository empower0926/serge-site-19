const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const gui = new dat.GUI();
dat.GUI.toggleHide();

canvas.width = innerWidth;
canvas.height = document.querySelector('.intro').offsetHeight;

const wave = {
    y: canvas.height / 2 +  150,
    length: 0.003,
    amplitude: 200,
    frequency: 0.003,
}

const strokeColor = {
    hue: 50,
    saturation: 100,
    light: 50
}
const bgColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 0.027
}

const waveFolder = gui.addFolder('wave');
waveFolder.add(wave, 'y', 0, canvas.height);
waveFolder.add(wave, 'length', -0.01, 0.01);
waveFolder.add(wave, 'amplitude', -300, 1000);
waveFolder.add(wave, 'frequency', -0.01, 1);
waveFolder.open();

const bgFolder = gui.addFolder('background');
bgFolder.add(bgColor, 'r', 0, 255);
bgFolder.add(bgColor, 'g', 0, 255);
bgFolder.add(bgColor, 'b', 0, 255);
bgFolder.add(bgColor, 'a', 0, 1);
bgFolder.open();

const strockFolder = gui.addFolder('strock');
strockFolder.add(strokeColor, 'hue', 0, 255);
strockFolder.add(strokeColor, 'saturation', 0, 100);
strockFolder.add(strokeColor, 'light', 0, 100);
strockFolder.open();

let change = wave.frequency;

function animate() {
    requestAnimationFrame(animate);
    
    c.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.moveTo(0, canvas.height / 2);
    for (i = -80; i < canvas.width; i+=0.1) {
        c.lineTo(i, wave.y + Math.sin(i * wave.length + change) * wave.amplitude * Math.sin(change));
    }
    c.strokeStyle = `hsl(${strokeColor.hue}, ${strokeColor.saturation}%, ${strokeColor.light}%)`;
    c.stroke();
    change += wave.frequency;
}

animate();