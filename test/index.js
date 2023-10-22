import fs from 'fs';
import path from 'path';

export const webFileFindEngine = (folderPath) => {
    try {
        const resolvePath = path.resolve(folderPath);
        const files = fs.readdirSync(resolvePath);

        const supportFileExtensions = ['html', 'ejs', 'hbs'];
        const fullFileNames = supportFileExtensions.map(ext => '.' + ext);

        const filteredFiles = [];

        files.forEach(file => {
            const filePath = path.join(resolvePath, file);
            const isDirectory = fs.statSync(filePath).isDirectory();

            if (isDirectory) {
                const subFolderFiles = webFileFindEngine(filePath);
                subFolderFiles.forEach(subFile => {
                    // Alt klasördeki dosya yolunu, ana klasör yoluna ekleyerek klasör ismini dahil edin
                    filteredFiles.push(path.join(file, subFile).split('\\').join('/'));
                });
            } else {
                for (const ffn of fullFileNames) {
                    if (file.endsWith(ffn)) {
                        filteredFiles.push(file);
                        break;
                    }
                }
            }
        });

        return filteredFiles;
    } catch (error) {
        console.info('error: ', error.message);
        return [];
    }
}

export const findExt = (filename)=>{
    const split = filename.split('.')
    return split[split.length -1]
}



console.log(

    //webFileFindEngine('src'),
    "index.ejs".split('.')[0],
    //findExt('index.ejs') === 'ejs' ? '!!ejs-compiled-loader!' : null
)