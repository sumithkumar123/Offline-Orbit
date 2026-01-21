import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envContent = `PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/offline_orbit
JWT_SECRET=thisisasecretkey
`;

const filePath = path.join(__dirname, '.env');
fs.writeFileSync(filePath, envContent, { encoding: 'utf8' });
console.log('Clean .env file written to:', filePath);
