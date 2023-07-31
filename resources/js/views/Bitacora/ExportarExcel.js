import ExcelJS from 'exceljs';

export async function ExportarExcel(results) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Bitacora');

  worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Id de Artículo', key: 'id_articulo', width: 10 },
    { header: 'Articulo', key: 'elemento', width: 15 },
    { header: 'Usuario', key: 'usuario', width: 15 },
    { header: 'Status', key: 'status', width: 10 },
    { header: 'Nota', key: 'nota', width: 50 },
    { header: 'Fecha', key: 'fecha', width: 15 },
  ];

  results.forEach((result) => {
    worksheet.addRow(result);
  });
  const excelBlob = await workbook.xlsx.writeBuffer();
  return excelBlob;
}