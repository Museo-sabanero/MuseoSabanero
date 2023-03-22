import xlsx from 'xlsx/dist/xlsx.full.min'

export const exportExcel = (fileName, sheetName, dataJson, headers) => {
  const workbook = xlsx.utils.book_new()
  const worksheet = xlsx.utils.json_to_sheet(dataJson)

  xlsx.utils.sheet_add_aoa(worksheet, [headers])
  xlsx.utils.book_append_sheet(workbook, worksheet, sheetName)

  xlsx.writeFile(workbook, fileName + '.xlsx')
}
