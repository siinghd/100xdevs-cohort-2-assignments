const fs = require('node:fs/promises');

const readAndWriteData = async () => {
  const data = await fs.readFile('./medium/1-file-cleaner.md');

  const writData = await fs.writeFile(
    './medium/1-file-cleaner.md',
    data.toString().replace(/\s+/g, ' '),
    {
      encoding: 'utf-8',
    }
  );
};

readAndWriteData();
