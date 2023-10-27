const fs = require('fs');
const path = require('path');
const name = process.argv[2];

if (!name) {
  console.error('Por favor, forneça um nome para a estrutura.');
  process.exit(1);
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const baseDir = path.join(__dirname, capitalize(name));

const subDirs = ['controllers', 'dto', 'repositories', 'routes', 'services'];

try {
  fs.mkdirSync(baseDir);

  subDirs.forEach((subDir) => {
    const dirPath = path.join(baseDir, subDir);
    const filePath = path.join(dirPath, `${capitalize(name)}${capitalize(subDir)}.ts`);
    
    fs.mkdirSync(dirPath);
    fs.writeFileSync(filePath, '');
  });

  console.log(`Estrutura de pastas e arquivos criada com sucesso para "${capitalize(name)}".`);
} catch (err) {
  console.error(`Erro ao criar a estrutura de pastas e arquivos: ${err}`);
  process.exit(1);
}