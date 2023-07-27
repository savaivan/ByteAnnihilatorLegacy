const config = require("./config.json");
const fs = require("fs");

// ДЕЛАЕТ СПИСОК ВООБЩЕ ВСЕХ ФАЙЛОВ В ПАПКЕ
let filesList = [];
fs.readdir(config.path, {recursive:true}, (error, files) => {
    if (error) {console.log(error);} else {
        files.forEach(file => {
            if (!fs.statSync(`${config.path}\\${file}`).isDirectory()) {
                filesList.push(`${config.path}\\${file}`);
            }
        });
    }
});

console.log(`ВСЕ ФАЙЛИКИ`);
console.log(filesList);
console.log(`\n`);

// ПОМЕЧАЕТ ФАЙЛЫ НА СМЕРТЬ
MECHENIE_filesList = [];
for (let i = 0; i < Math.floor(filesList.length * (config.filesPercentage / 100)); i++) {
    let file = filesList[Math.floor(Math.random() * filesList.length)];
    if (!MECHENIE_filesList.includes(file)) {MECHENIE_filesList.push(file);} else {i--;}
}

console.log(`ФАЙЛИКИ МЕЧЕНЫЕ`);
console.log(MECHENIE_filesList);
console.log(`\n`);

// УБИВАЕТ МЕЧЕНЫЕ ФАЙЛЫ
MECHENIE_filesList.forEach(file => {
    EBALO_BAITOV = [];
    let buffer = fs.readFileSync(file);
    let bytes = Math.floor(fs.statSync(file).size * (config.fileDamagePercentage / 100));

    console.log(`СЕЙЧАС ПИЗДИМ ЕГО ---> ${file}`);
    console.log(`РАЗМЕР ФАЙЛИКА ${fs.statSync(file).size} БАЙТОВ`);
    console.log(`БУДУ МЕНЯТЬ ${bytes} БАЙТОВ`);
    //console.log(`ФАЙЛИК ДО ДРОЧКИ`); console.log(buffer.toString('hex'));

    for (let i = 0; i < bytes; i++) {
        let byte = Math.floor(Math.random() * fs.statSync(file).size);
        if (!EBALO_BAITOV.includes(byte)) {
            EBALO_BAITOV.push(byte);

            console.log(`ВСЕГО ${Math.round(((MECHENIE_filesList.indexOf(file) + 1) / MECHENIE_filesList.length) * 100)}% | ФАЙЛ ${Math.round(((i + 1) / bytes) * 100)}% | МЕНЯЮ БАЙТИК НОМЕР ${byte} КОТОРЫЙ ${buffer[byte].toString(16)} (${i + 1}/${bytes})... (ФАЙЛА (${MECHENIE_filesList.indexOf(file) + 1}/${MECHENIE_filesList.length}) ${file})`);

            buffer[byte] = Math.floor(Math.random() * 256)
        } else {i--;}
    }

    fs.writeFileSync(file, buffer);

    console.log(`ЗАКОНЧИЛ ЭТОТ ФАЙЛИК!`);
    //console.log(`ФАЙЛИК ПОСЛЕ ДРОЧКИ`); console.log(buffer.toString('hex'));
    console.log(`\n`);
})

console.log(`ЗАКОНЧИЛ!!!`);