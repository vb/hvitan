import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const jwt = new JWT({
  email: import.meta.env.GOOGLE_SHEET_CLIENT_EMAIL,
  key: import.meta.env.GOOGLE_SHEET_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ],
});

export const readFromSheet = async () => {
  const doc = new GoogleSpreadsheet(import.meta.env.GOOGLE_SHEET_ID, jwt);

  await doc.loadInfo();

  return doc;
};

export const getBarbershopContent = async () => {
  const response = await readFromSheet();
  const sheet = response.sheetsByTitle['Barbershop'];
  const rows = await sheet.getRows();

  const tableData = rows
    .filter((row) => row.get('Service') && row.get('Pris'))
    .map((row) => [row.get('Service'), row.get('Pris')]);

  const text = rows[0].get('Text');

  return { tableData, text };
};
