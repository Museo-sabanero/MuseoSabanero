export const data = {
  formData: {
    numRefInter: '',
    otherRef: '',
    name: '',
    title: '',
    objectType: '',
    acquisitionType: '',
    width: '',
    measureWidth: '',
    height: '',
    measureHeight: '',
    lenght: '',
    measureLenght: '',
    diameter: '',
    measureDiameter: '',
    weight: '',
    measureWeight: '',
    conservationStatus: '',
    legalStatus: '',
    value: '',
    typeCoin: '',
    distinguishingFeature: '',
    location: '',
    fragmented: '',
    replica: '',
    cedulaDonor: '',
  },
  history: {
    materials: '',
    manufacturing: '',
    inscripsionMarcas: '',
    antiquity: '',
    history: '',
  },
  itemId: '',
  showPopup: false,
  file: null,
  imageUrl: null,
  donors: [],
  weights: [
    'Gramos (g)',
    'Kilogramos (kg)',
    'Onzas (oz)',
    'Libras (lb)',
    'Toneladas (t)',
  ],
  distances: [
    'Milímetros (mm)',
    'Centímetros (cm)',
    'Metros (m)',
    'Pulgadas (in)',
    'Pies (ft)',
  ],
  currencies: [
    { label: 'Colón costarricense', value: 'CRC' },
    { label: 'Dólar estadounidense', value: 'USD' },
    { label: 'Euro', value: 'EUR' },
    { label: 'Dólar canadiense', value: 'CAD' },
    { label: 'Peso mexicano', value: 'MXN' },
    { label: 'No aplica', value: 'N/A' },
  ],
}

import Articles from '../../../services/ArticleService'
import Histors from '../../../services/HistoryService'
import Bitacora from '../../../services/BitacoraService'
import Files from '../../../services/FileService'

const buildArticle = (form) => ({
  numRefInter: form.numRefInter,
  otherRef: form.otherRef,
  name: form.name,
  title: form.title,
  objectType: form.objectType,
  acquisitionType: form.acquisitionType,
  width: form.width,
  measureWidth: form.measureWidth,
  height: form.height,
  measureHeight: form.measureHeight,
  lenght: form.lenght,
  measureLenght: form.measureLenght,
  diameter: form.diameter,
  measureDiameter: form.measureDiameter,
  weight: form.weight,
  measureWeight: form.measureWeight,
  conservationStatus: form.conservationStatus,
  legalStatus: form.legalStatus,
  value: form.value,
  typeCoin: form.typeCoin,
  distinguishingFeature: form.distinguishingFeature,
  location: form.location,
  fragmented: form.fragmented,
  replica: form.replica,
  cedulaDonor: form.cedulaDonor,
})

const buildHistory = (history, id) => ({
  materials: history.materials,
  manufacturing: history.manufacturing,
  inscripsionMarcas: history.inscripsionMarcas,
  antiquity: history.antiquity,
  history: history.history,
  itemId: id,
})

const createBitacora = (article) => ({
  name: article.name,
  status: 'A',
  nota: 'Se creó por nuevo Artículo',
  id_articulo: article.id,
})

export function clearData() {
  const form = this.formData

  form.numRefInter = ''
  form.otherRef = ''
  form.name = ''
  form.title = ''
  form.objectType = ''
  form.acquisitionType = ''
  form.width = ''
  form.measureWidth = ''
  form.height = ''
  form.measureHeight = ''
  form.lenght = ''
  form.measureLenght = ''
  form.diameter = ''
  form.measureDiameter = ''
  form.weight = ''
  form.measureWeight = ''
  form.conservationStatus = ''
  form.legalStatus = ''
  form.value = ''
  form.typeCoin = ''
  form.distinguishingFeature = ''
  form.location = ''
  form.fragmented = ''
  form.replica = ''
  form.cedulaDonor = ''

  this.itemId = ''
  this.showPopup = false
  this.file = null
  this.imageUrl = null
}

export async function handleSubmit() {
  const article = buildArticle(this.formData)
  const articleCreated = await Articles.createArticle(article)
  let id = articleCreated.id
  this.itemId = id

  //no hay que esperar a que se cree el historial para que se cree la bitacora
  Histors.createHistory(buildHistory(this.history, this.itemId))
  await Bitacora.createBitacora(createBitacora(articleCreated))

  if (this.file == null) {
    this.clearData()
    return this.$router.push('/article/index')
  }

  const fileData = new FormData()

  fileData.append('file', this.file)
  fileData.append('elementId', this.itemId)

  await Files.registerFile(fileData)
  this.clearData()
  return this.$router.push('/article/index')
}
