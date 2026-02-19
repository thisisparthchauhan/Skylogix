const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(process.cwd(), 'src');

function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        if (fs.statSync(dirPath + '/' + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                arrayOfFiles.push(path.join(dirPath, '/', file));
            }
        }
    });

    return arrayOfFiles;
}

function checkAltTags() {
    if (!fs.existsSync(SRC_DIR)) {
        console.log('src directory not found. Skipping check.');
        return;
    }
    const files = getAllFiles(SRC_DIR);
    let missingAltCount = 0;
    let filesChecked = 0;

    console.log('Checking for missing alt tags in', files.length, 'files...');

    files.forEach((file) => {
        filesChecked++;
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');

        lines.forEach((line, index) => {
            // Check for <img> without alt
            if (line.includes('<img') && !line.includes('alt=')) {
                console.warn(`[WARNING] Missing alt in <img ...> at ${file}:${index + 1}`);
                console.warn(`Line: ${line.trim()}`);
                missingAltCount++;
            }

            // Check for <Image> without alt
            if (line.includes('<Image') && !line.includes('alt=')) {
                console.warn(`[WARNING] Missing alt in <Image ...> at ${file}:${index + 1}`);
                console.warn(`Line: ${line.trim()}`);
                missingAltCount++;
            }

            // Check for empty alt=""
            if (line.match(/alt=["']["']/)) {
                console.warn(`[WARNING] Empty alt="" at ${file}:${index + 1}`);
                console.warn(`Line: ${line.trim()}`);
                missingAltCount++;
            }
        });
    });

    if (missingAltCount > 0) {
        console.log(`\nFound ${missingAltCount} missing or empty alt tags.`);
        // Don't exit with error, just report
    } else {
        console.log('\nAll images have alt tags! Great job.');
    }
}

checkAltTags();
