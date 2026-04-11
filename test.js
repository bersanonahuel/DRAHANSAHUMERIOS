
// ===== CONFIG =====
const ADMIN_PASS = 'armonia2026';
let isAdmin = false;

// ===== DATA =====
const RAW_DATA = `Imagen\tSAHUMERIOS DUENDES ALQUIMISTAS - VAINILLA ENCANTADA\t$860,70\t1\t$860,70
Imagen\tSAHUMERIOS DUENDES ALQUIMISTAS - MUSK\t$860,70\t1\t$860,70
Imagen\tSAHUMERIOS DUENDES ALQUIMISTAS - SALVIA BLANCA\t$860,70\t1\t$860,70
Imagen\tSAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - BERRIES\t$490,26\t1\t$490,26
Imagen\tSAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - AQUA\t$490,26\t1\t$490,26
Imagen\tSAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - LEMONGRASS\t$490,26\t1\t$490,26
Imagen\tSAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - MANGO\t$490,26\t1\t$490,26
Imagen\tSAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - SANDIA\t$490,26\t1\t$490,26
Imagen\tSAHUMERIOS INDIA HEXAGONAL x 15 PROMO - CHAMPA\t$440,08\t1\t$440,08
Imagen\tSAHUMERIOS INDIA HEXAGONAL x 15 PROMO - COCO\t$440,08\t1\t$440,08
Imagen\tSAHUMERIOS INDIA HEXAGONAL x 15 PROMO - JAZMIN\t$440,08\t1\t$440,08
Imagen\tSAHUMERIOS INDIA HEXAGONAL x 15 PROMO - LAVANDA\t$440,08\t1\t$440,08
Imagen\tSAHUMERIOS INDIA HEXAGONAL x 15 PROMO - PATCHOULI\t$440,08\t1\t$440,08
Imagen\tSAHUMERIOS INDIA HEXAGONAL x 15 PROMO - ROSA\t$440,08\t1\t$440,08
Imagen\tSAHUMERIOS INDIA HEXAGONAL x 15 PROMO - SANDAL WOOD\t$440,08\t1\t$440,08
Imagen\tSAHUMERIOS INDIA HEXAGONAL x 15 PROMO - VIOLETAS\t$440,08\t1\t$440,08
Imagen\tSAHUMERIOS INDIA HEXAGONAL x 15 PROMO - VAINILLA\t$440,08\t1\t$440,08
Imagen\tSAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - CHAMPA\t$375,62\t1\t$375,62
Imagen\tSAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - FRUTILLA\t$375,62\t1\t$375,62
Imagen\tSAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - INCIENSO\t$375,62\t1\t$375,62
Imagen\tSAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - LAVANDA FRANCESA\t$375,62\t1\t$375,62
Imagen\tSAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - MIRRA\t$375,62\t1\t$375,62
Imagen\tSAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - REINA DE LA NOCHE\t$375,62\t1\t$375,62
Imagen\tSAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - SÁNDALO\t$375,62\t1\t$375,62
Imagen\tSAHUMERIOS 7 CHAKRAS ( 7 X 3 ) ILUMINARTE -\t$970,91\t1\t$970,91
Imagen\tSAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - 212 PARFUM\t$510,44\t1\t$510,44
Imagen\tSAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - ATRAE DINERO (RIQUEZA)\t$510,44\t1\t$510,44
Imagen\tSAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - ABUNDANCIA (PROSPERIDAD)\t$510,44\t1\t$510,44
Imagen\tSAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - BUENA ONDA (FUERZA POSITIVA)\t$510,44\t1\t$510,44
Imagen\tSAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - FELICIDAD (ALEGRIA Y DICHA)\t$510,44\t1\t$510,44
Imagen\tSAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - LIMPIEZA (QUITA MALA ONDA)\t$510,44\t1\t$510,44
Imagen\tSAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - VARIEDAD\t$510,44\t1\t$510,44
Imagen\tSAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - ENERGÍA LIMPIA\t$510,44\t1\t$510,44
Imagen\tSAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD PROMO - VIOLETAS\t$290,99\t1\t$290,99
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - BERRIES\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - FRUTILLA\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - MANGO\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - VAINILLA\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - SÁNDALO\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - ROSA\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - PALO SANTO\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - LIMÓN\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - LAVANDA\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - INCIENSO\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS INDIA PAQUETE X 15 - ATRAE DINERO\t$420,44\t1\t$420,44
Imagen\tSAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - FRAGANCIA ORIENTAL\t$960,59\t1\t$960,59
Imagen\tSAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - DIAMANTE NEGRO\t$960,59\t1\t$960,59
Imagen\tSAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - FRUTOS ROJOS\t$960,59\t1\t$960,59
Imagen\tSAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - GARDENIA Y FLORES BLANCAS\t$960,59\t1\t$960,59
Imagen\tSAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - LA VIDA ES BELLA\t$960,59\t1\t$960,59
Imagen\tSAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - NARANJA PIMIENTA\t$960,59\t1\t$960,59
Imagen\tSAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - SANDALO HINDU\t$960,59\t1\t$960,59
Imagen\tSAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - VARIEDAD\t$960,59\t1\t$960,59
Imagen\tSAHUMERIOS MINI PALO SANTO BUENA ONDA - COCO VAI\t$655,28\t1\t$655,28
Imagen\tSAHUMERIOS MINI PALO SANTO BUENA ONDA - YAGRA\t$655,28\t1\t$655,28
Imagen\tSAHUMERIOS MINI PALO SANTO BUENA ONDA - VARIEDAD\t$655,28\t1\t$655,28
Imagen\tSAHUMERIOS MINI TIBETANO AROMANZA - REAL ROSE\t$980,53\t1\t$980,53
Imagen\tSAHUMERIOS MINI TIBETANO AROMANZA - OCEAN BLUE\t$980,53\t1\t$980,53
Imagen\tSAHUMERIOS MINI TIBETANO AROMANZA - NECTAR DE LOS DIOSES\t$980,53\t1\t$980,53
Imagen\tSAHUMERIOS MINI TIBETANO AROMANZA - VARIEDAD\t$980,53\t1\t$980,53
Imagen\tSAHUMERIOS MINI TIBETANO AROMANZA - 7 PODERES\t$980,53\t1\t$980,53
Imagen\tBOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - ABUNDANCIA INFINITA\t$545,33\t1\t$545,33
Imagen\tBOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - ATRAE DINERO\t$545,33\t1\t$545,33
Imagen\tBOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - FUERZA INFINITA\t$545,33\t1\t$545,33
Imagen\tBOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - DESTRABE\t$545,33\t1\t$545,33
Imagen\tBOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - LIMPIEZA ENERGÉTICA\t$545,33\t1\t$545,33
Imagen\tBOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - LIMPIEZA AURICA\t$545,33\t1\t$545,33
Imagen\tBOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - ABRECAMINO\t$545,33\t1\t$545,33
Imagen\tSAHUMERIOS SAGRADA MADRE NATURAL PREMIUM SLIM - POMELO\t$740,70\t1\t$740,70
Imagen\tSAHUMERIOS SAGRADA MADRE NATURAL PREMIUM SLIM - UVA\t$740,70\t1\t$740,70
Imagen\tSAHUMERIOS SAGRADA MADRE NATURAL PREMIUM SLIM - MELON\t$740,70\t1\t$740,70
Imagen\tSAHUMERIOS SAGRADA MADRE NATURAL PREMIUM SLIM - SANDIA\t$740,70\t1\t$740,70
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - ALMIZCLE\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - ANTIESTRES\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - FLOR DE LIS\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - NAG CHAMPA\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - NARANJA - COCO\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - MIL FLORES\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - MADERA DE ORIENTE\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - OM\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - PATCHOULI Y NARANJA\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - SÁNDALO CANELA\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS VISHNU HEXAGONAL x 20 - ROSA BLANCA\t$830,16\t1\t$830,16
Imagen\tSAHUMERIOS TUK TUK HINDU X 100 VARILLAS PROMO - BUBBLEGUM\t$1.890,16\t1\t$1.890,16
Imagen\tSAHUMERIOS DARSHAN DHOOP - COOL WATER\t$670,07\t1\t$670,07
Imagen\tSAHUMERIOS DARSHAN POUCH X 15 UNIDADES - AROMAS DE LA INDIA\t$460,98\t1\t$460,98
Imagen\tSAHUMERIOS DARSHAN POUCH X 15 UNIDADES - FRUTOS TROPICALES\t$460,98\t1\t$460,98
Imagen\tSAHUMERIOS DARSHAN POUCH X 15 UNIDADES - SALUD, DINERO Y AMOR\t$460,98\t1\t$460,98
Imagen\tSAHUMERIOS DARSHAN POUCH X 15 UNIDADES - MIL FLORES\t$460,98\t1\t$460,98
Imagen\tTEXTIL AMBAR 150ml. - UVA\t$1.572,00\t1\t$1.572,00
Imagen\tTEXTIL AMBAR 150ml. - PAPAYA\t$1.572,00\t1\t$1.572,00
Imagen\tTEXTIL AMBAR 150ml. - TROPICAL\t$1.572,00\t1\t$1.572,00
Imagen\tTEXTIL AMBAR 150ml. - LIMÓN\t$1.572,00\t1\t$1.572,00
Imagen\tTEXTIL AMBAR 150ml. - MAGNOLIA Y FRESIAS\t$1.572,00\t1\t$1.572,00
Imagen\tTEXTIL AMBAR 150ml. - HAWAI\t$1.572,00\t1\t$1.572,00
Imagen\tTEXTIL AMBAR 150ml. - COCO VAI\t$1.572,00\t1\t$1.572,00
Imagen\tTEXTIL AMBAR 150ml. - BEBE\t$1.572,00\t1\t$1.572,00`;

const imageMap = {
    "SAHUMERIOS DUENDES ALQUIMISTAS - VAINILLA ENCANTADA": "img/SAHUMERIO DUENDES ALQUIMISTAS MUSK BLACK LIMPIEZA.png",
    "SAHUMERIOS DUENDES ALQUIMISTAS - MUSK": "img/SAHUMERIO DUENDES ALQUIMISTAS MUSK BLACK LIMPIEZA.png",
    "SAHUMERIOS DUENDES ALQUIMISTAS - SALVIA BLANCA": "img/SAHUMERIO DUENDES ALQUIMISTAS SALVIA BLANCA DISFRUTE.png",
    "SAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - BERRIES": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - AQUA": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - LEMONGRASS": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - MANGO": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA HEXAGONAL LINEA BLANCA x 15 - SANDIA": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA HEXAGONAL x 15 PROMO - CHAMPA": "img/SAHUMERIO CHAMPA ILUMINARTE INDIA.png",
    "SAHUMERIOS INDIA HEXAGONAL x 15 PROMO - COCO": "img/SAHGUMERIO EXAGONAL ILUMINARTE INDIA COCO COCONUT.png",
    "SAHUMERIOS INDIA HEXAGONAL x 15 PROMO - JAZMIN": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA HEXAGONAL x 15 PROMO - LAVANDA": "img/SAHUMERIO EXAGONAL ILUMINARTE INDIA LAVANDA.png",
    "SAHUMERIOS INDIA HEXAGONAL x 15 PROMO - PATCHOULI": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA HEXAGONAL x 15 PROMO - ROSA": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA HEXAGONAL x 15 PROMO - SANDAL WOOD": "img/SAHUMERIO EXAGONAL ILUMINARTE INDIA SANDAL WOOD.png",
    "SAHUMERIOS INDIA HEXAGONAL x 15 PROMO - VIOLETAS": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA HEXAGONAL x 15 PROMO - VAINILLA": "img/SAHUMERIO EXAGONAL ILUMINARTE INDIA VAINILLA.png",
    "SAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - CHAMPA": "img/SAHUMERIO CHAMPA ILUMINARTE INDIA.png",
    "SAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - FRUTILLA": "img/SAHGUMERIO EXAGONAL ILUMINARTE INDIA COCO COCONUT.png",
    "SAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - INCIENSO": "img/SAHGUMERIO EXAGONAL ILUMINARTE INDIA COCO COCONUT.png",
    "SAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - LAVANDA FRANCESA": "img/SAHUMERIO EXAGONAL ILUMINARTE INDIA LAVANDA.png",
    "SAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - MIRRA": "img/SAHGUMERIO EXAGONAL ILUMINARTE INDIA COCO COCONUT.png",
    "SAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - REINA DE LA NOCHE": "img/SAHUMERIO REINA DE LA NOCHE ILUMINARTE.png",
    "SAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD (NUEVO) - S\u00c1NDALO": "img/SAHGUMERIO EXAGONAL ILUMINARTE INDIA COCO COCONUT.png",
    "SAHUMERIOS 7 CHAKRAS ( 7 X 3 ) ILUMINARTE -": "img/SAHUMERIOS EXAGONALES ILUMINARTE LIMON.png",
    "SAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - 212 PARFUM": "img/SAHUMERIO BOMBAY 212 PARFUM TRIPLE EMPASTE.png",
    "SAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - ATRAE DINERO (RIQUEZA)": "img/SAHUMERIO BOMBAY ATRAE DINERO TRIPLE EMPASTE.png",
    "SAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - ABUNDANCIA (PROSPERIDAD)": "img/SAHUMERIO BOMBAY ABUNDANCIA TRIPLE EMPASTE.png",
    "SAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - BUENA ONDA (FUERZA POSITIVA)": "img/SAHUMERIO BOMBAY BUENA ONDA TRIPLE EMPASTE.png",
    "SAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - FELICIDAD (ALEGRIA Y DICHA)": "img/SAHUMERIO BOMBAY FELICIDAD TRIPLE EMPASTE.png",
    "SAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - LIMPIEZA (QUITA MALA ONDA)": "img/SAHUMERIO BOMBAY BUENA ONDA TRIPLE EMPASTE.png",
    "SAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - VARIEDAD": "img/SAHUMERIO BOMBAY VARIEDAD TRIPLE EMPASTE.png",
    "SAHUMERIOS BOMBAY TRIPLE EMPASTE x 6 PROMO - ENERG\u00cdA LIMPIA": "img/SAHUMERIO BOMBAY ENERGIA LIMPIA TRIPLE EMPASTE.png",
    "SAHUMERIOS INDIA ILUMINARTE POUCH X UNIDAD PROMO - VIOLETAS": "img/SAHGUMERIO EXAGONAL ILUMINARTE INDIA COCO COCONUT.png",
    "SAHUMERIOS INDIA PAQUETE X 15 - BERRIES": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA PAQUETE X 15 - FRUTILLA": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA PAQUETE X 15 - MANGO": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA PAQUETE X 15 - VAINILLA": "img/SAHUMERIO EXAGONAL ILUMINARTE INDIA VAINILLA.png",
    "SAHUMERIOS INDIA PAQUETE X 15 - S\u00c1NDALO": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA PAQUETE X 15 - ROSA": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA PAQUETE X 15 - PALO SANTO": "img/SAHUMERIO PALO SANTO BUENA ONDA AROMANZA SANDALO HINDU PURIFICACION.png",
    "SAHUMERIOS INDIA PAQUETE X 15 - LIM\u00d3N": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA PAQUETE X 15 - LAVANDA": "img/SAHUMERIO EXAGONAL ILUMINARTE INDIA LAVANDA.png",
    "SAHUMERIOS INDIA PAQUETE X 15 - INCIENSO": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS INDIA PAQUETE X 15 - ATRAE DINERO": "img/BOMBITA ATRAE DINERO X4 SAGRADA MADRE.jpg",
    "SAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - FRAGANCIA ORIENTAL": "img/SAHUMERIO PALO SANTO BUENA ONDA FRAGANCIA ORIENTAL MEDITACION AROMANZA.png",
    "SAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - DIAMANTE NEGRO": "img/SAHUMERIO PALO SANTO BUENA ONDA DIAMANTE NEGRO AQUI Y AHORA.png",
    "SAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - FRUTOS ROJOS": "img/SAHUMERIO PALO SANTO BUENA ONDA FRUTOS ROJOS EMPODERAMIENTO.png",
    "SAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - GARDENIA Y FLORES BLANCAS": "img/SAHUMERIO PALO SANTO BUENA ONDA GARDENIAS FLORES BLANCAS BIENESTAR.png",
    "SAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - LA VIDA ES BELLA": "img/SAHUMERIO PALO SANTO BUENA ONDA LA VIDA ES BELLA OPTIMISMO.png",
    "SAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - NARANJA PIMIENTA": "img/SAHUMERIO PALO SANTO BUENA ONDA NARANJA POIMIENTA ATRACCION.png",
    "SAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - SANDALO HINDU": "img/SAHUMERIO PALO SANTO BUENA ONDA AROMANZA SANDALO HINDU PURIFICACION.png",
    "SAHUMERIOS PALO SANTO BUENA ONDA CAJA X 8 PROMO - VARIEDAD": "img/SAHUMERIO PALO SANTO BUENA ONDA VARIEDAD AROMATICA BUENA ONDA.png",
    "SAHUMERIOS MINI PALO SANTO BUENA ONDA - COCO VAI": "img/SAHUMERIO PALO SANTO BUENA ONDA MINI COCO VAINILLA PAZ INTERIOR.png",
    "SAHUMERIOS MINI PALO SANTO BUENA ONDA - YAGRA": "img/SAHUMERIO PALO SANTO BUENA ONDA MINI YAGRA DE LA ABUNDANCIA PROSPERIDAD.png",
    "SAHUMERIOS MINI PALO SANTO BUENA ONDA - VARIEDAD": "img/SAHUMERIO PALO SANTO BUENA ONDA MINI COCO VAINILLA PAZ INTERIOR.png",
    "SAHUMERIOS MINI TIBETANO AROMANZA - REAL ROSE": "img/SAHUMERIO AROMANZA MINI TIBITANOS 7 PODERES.png",
    "SAHUMERIOS MINI TIBETANO AROMANZA - OCEAN BLUE": "img/SAHUMERIO MINI TIBETANOS OCEAN BLUE PLENITUD.png",
    "SAHUMERIOS MINI TIBETANO AROMANZA - NECTAR DE LOS DIOSES": "img/SAHUMERIO MINI TIBETANOS NECTAR DE LOS DIOSES CONEXION DIVINA.png",
    "SAHUMERIOS MINI TIBETANO AROMANZA - VARIEDAD": "img/SAHUMERIO AROMANZA MINI TIBITANOS 7 PODERES.png",
    "SAHUMERIOS MINI TIBETANO AROMANZA - 7 PODERES": "img/SAHUMERIO AROMANZA MINI TIBITANOS 7 PODERES.png",
    "BOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - ABUNDANCIA INFINITA": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "BOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - ATRAE DINERO": "img/BOMBITA ATRAE DINERO X4 SAGRADA MADRE.jpg",
    "BOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - FUERZA INFINITA": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "BOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - DESTRABE": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "BOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - LIMPIEZA ENERG\u00c9TICA": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "BOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - LIMPIEZA AURICA": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "BOMBITA SAGRADA MADRE DEFUMACION PAQUETE X 4 - ABRECAMINO": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS SAGRADA MADRE NATURAL PREMIUM SLIM - POMELO": "img/SAHUMERIO PREMIUM POMELO PINK GRAFERNAT SLIM.png",
    "SAHUMERIOS SAGRADA MADRE NATURAL PREMIUM SLIM - UVA": "img/SAHUMERIO PREMIUM SLIM UVA DELICIOUS GRAPE.png",
    "SAHUMERIOS SAGRADA MADRE NATURAL PREMIUM SLIM - MELON": "img/BOMBITA ATRAE DINERO X4 SAGRADA MADRE.jpg",
    "SAHUMERIOS SAGRADA MADRE NATURAL PREMIUM SLIM - SANDIA": "img/BOMBITA ATRAE DINERO X4 SAGRADA MADRE.jpg",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - ALMIZCLE": "img/SAHUMERIO EXAGONAL VISHNU ALMIZCLE.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - ANTIESTRES": "img/SAHUMERIO EXAGONALES VISHNU ANTIESTRES.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - FLOR DE LIS": "img/SAHUMERIO EXAGONAL VISHNU FLOR DE LIS.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - NAG CHAMPA": "img/SAHUMERIO EXAGONAL VISHNU NAG CHAMPA.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - NARANJA - COCO": "img/SAHUMERIO EXAGONAL VISHNU PATCHOLU Y NARANJA.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - MIL FLORES": "img/SAHUMERIO EXAGONAL VISHNU MIL FLORES.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - MADERA DE ORIENTE": "img/SAHUMERI OEXAGONAL MADERAS DE ORIENTE VISHNU.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - OM": "img/SAHUMERIO EXAGONAL VISHNU OM.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - PATCHOULI Y NARANJA": "img/SAHUMERIO EXAGONAL VISHNU PATCHOLU Y NARANJA.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - S\u00c1NDALO CANELA": "img/SAHUMERIO EXAGONAS VISHNU SANDALO Y CANELA.png",
    "SAHUMERIOS VISHNU HEXAGONAL x 20 - ROSA BLANCA": "img/SAHUMERIO EXAGONAL VISHNU TOSA BLANCA.png",
    "SAHUMERIOS TUK TUK HINDU X 100 VARILLAS PROMO - BUBBLEGUM": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS DARSHAN DHOOP - COOL WATER": "img/SAHUMERIO COOL WATER DARSHAN INCENSE.png",
    "SAHUMERIOS DARSHAN POUCH X 15 UNIDADES - AROMAS DE LA INDIA": "img/SAHUMERIO.COM AROMAS DE LA INDIA.png",
    "SAHUMERIOS DARSHAN POUCH X 15 UNIDADES - FRUTOS TROPICALES": "img/BOMBITA X 4 LIMPIEZA AURICA SAGRADA MADRE.jpg",
    "SAHUMERIOS DARSHAN POUCH X 15 UNIDADES - SALUD, DINERO Y AMOR": "img/SAHUMERIO.COM SALUD DINERO Y AMOR.png",
    "SAHUMERIOS DARSHAN POUCH X 15 UNIDADES - MIL FLORES": "img/SAHUMERIO EXAGONAL VISHNU MIL FLORES.png",
    "TEXTIL AMBAR 150ml. - UVA": "img/AROMATIZANTE PARA TELAS UVA.jpg",
    "TEXTIL AMBAR 150ml. - PAPAYA": "img/AROMATIZANTE PARA TELAS PAPAYA.jpg",
    "TEXTIL AMBAR 150ml. - TROPICAL": "img/AROMATIZANTE PARA TELA TROPICAL.jpg",
    "TEXTIL AMBAR 150ml. - MAGNOLIA Y FRESIAS": "img/SAHUMERIO EXAGONAL VISHNU PATCHOLU Y NARANJA.png",
    "TEXTIL AMBAR 150ml. - COCO VAI": "img/AROMATIZANTE PARA TELAS COCO VAI.jpg",
    "TEXTIL AMBAR 150ml. - BEBE": "img/AROMATIZANTE PARA TELAS BEBE.jpg"
};
function getImage(name) { return imageMap[name] || "imagen.png"; }
function prettify(name) { return name.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase()).replace(/ - $/, '').trim(); }

// ===== INIT =====
function initProducts() {
    const saved = localStorage.getItem('armonia_stock');
    if (saved) { products = JSON.parse(saved); return; }
    RAW_DATA.split('\n').forEach(line => {
        if (!line.trim()) return;
        const p = line.split('\t');
        if (p.length < 5) return;
        const cost = parsePrice(p[2]);
        if (isNaN(cost)) return;
        products.push({ name: p[1], cost, publicPrice: publicPrice(cost), stock: parseInt(p[3])||0, image: getImage(p[1]) });
    });
    saveStock(true);
}
function saveStock(silent) {
    localStorage.setItem('armonia_stock', JSON.stringify(products));
    if (!silent) showToast('✅ Stock guardado correctamente');
}

// ===== AUTH =====
function toggleAdmin() {
    if (isAdmin) { logoutAdmin(); return; }
    document.getElementById('login-modal').classList.add('show');
    document.getElementById('admin-pass').value = '';
    document.getElementById('login-error').style.display = 'none';
    setTimeout(() => document.getElementById('admin-pass').focus(), 100);
}
function closeModal() { document.getElementById('login-modal').classList.remove('show'); }
function doLogin() {
    const pass = document.getElementById('admin-pass').value;
    if (pass === ADMIN_PASS) {
        isAdmin = true;
        document.body.classList.add('is-admin');
        document.getElementById('admin-btn').textContent = '🔓 Cerrar Sesión';
        closeModal();
        renderCatalog();
        showToast('✅ Sesión de administrador iniciada');
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}
function logoutAdmin() {
    isAdmin = false;
    document.body.classList.remove('is-admin');
    document.getElementById('admin-btn').textContent = '🔒 Admin';
    switchTab('catalogo');
    renderCatalog();
    showToast('🔒 Sesión de administrador cerrada');
}

// ===== CATALOG (PUBLIC) =====
function renderCatalog() {
    const c = document.getElementById('catalog');
    c.innerHTML = '';
    const visible = products.filter(p => p.stock > 0);
    if (visible.length === 0) {
        c.innerHTML = '<div class="no-products"><h3>😔 No hay productos disponibles</h3><p>Volvé pronto, estamos reponiendo stock</p></div>';
        return;
    }
    visible.forEach(p => {
        // Public: only name + price. Admin: also stock badge
        const stockBadge = isAdmin
            ? `<span class="product-stock ${p.stock<=2?'stock-low':'stock-ok'}">${p.stock} disp.</span>`
            : '';
        c.innerHTML += `<article class="product-card">
            <div class="product-image-container"><img src="${p.image}" alt="${prettify(p.name)}" class="product-image" onerror="this.src='imagen.png'"></div>
            <div class="product-info">
                <h2 class="product-title">${prettify(p.name)}</h2>
                <div class="product-footer">
                    <p class="product-price"><span class="currency">$</span>${formatARS(p.publicPrice)}</p>
                    ${stockBadge}
                </div>
            </div>
        </article>`;
    });
}

// ===== STOCK TABLE (ADMIN ONLY) =====
function renderStockTable() {
    const b = document.getElementById('stock-body');
    b.innerHTML = '';
    let totalItems = 0, totalValue = 0, outOfStock = 0;
    products.forEach((p, i) => {
        totalItems += p.stock; totalValue += p.stock * p.publicPrice;
        if (p.stock <= 0) outOfStock++;
        const stockClass = p.stock<=0?'stock-out':p.stock<=2?'stock-low':'stock-ok';
        const statusText = p.stock<=0?'🔴 Sin stock':p.stock<=2?'🟡 Bajo':'🟢 OK';
        b.innerHTML += `<tr data-name="${p.name.toLowerCase()}">
            <td>${i+1}</td>
            <td style="max-width:350px">${prettify(p.name)}</td>
            <td>$${formatARS(p.cost)}</td>
            <td style="font-weight:600;color:var(--price-color)">$${formatARS(p.publicPrice)}</td>
            <td><input type="number" class="stock-input" value="${p.stock}" min="0" onchange="updateStock(${i},this.value)"></td>
            <td><span class="product-stock ${stockClass}">${statusText}</span></td>
        </tr>`;
    });
    document.getElementById('stats-row').innerHTML = `
        <div class="stat-card"><h3>Total Productos</h3><div class="stat-value">${products.length}</div></div>
        <div class="stat-card"><h3>Unidades en Stock</h3><div class="stat-value">${totalItems}</div></div>
        <div class="stat-card"><h3>Valor del Stock</h3><div class="stat-value">$${formatARS(totalValue)}</div></div>
        <div class="stat-card"><h3>Sin Stock</h3><div class="stat-value" style="color:var(--danger)">${outOfStock}</div></div>`;
}
function updateStock(i, val) { products[i].stock = parseInt(val)||0; saveStock(true); renderCatalog(); renderStockTable(); }
function filterStock() {
    const q = document.getElementById('stock-search').value.toLowerCase();
    document.querySelectorAll('#stock-body tr').forEach(r => { r.style.display = r.dataset.name.includes(q)?'':'none'; });
}

// ===== PDF =====
function downloadStockPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p','mm','a4');
    const pw = doc.internal.pageSize.getWidth();
    doc.setFillColor(74,93,78); doc.rect(0,0,pw,45,'F');
    doc.setTextColor(255); doc.setFont('helvetica','bold'); doc.setFontSize(24);
    doc.text('DRAHAN SAHUMERIOS', pw/2, 20, {align:'center'});
    doc.setFontSize(11); doc.setFont('helvetica','normal');
    doc.text('Reporte de Stock — '+new Date().toLocaleDateString('es-AR'), pw/2, 30, {align:'center'});
    doc.text(`Total: ${products.length} productos`, pw/2, 38, {align:'center'});
    const rows = products.map((p,i) => [i+1, prettify(p.name), `$${formatARS(p.cost)}`, `$${formatARS(p.publicPrice)}`, p.stock, p.stock<=0?'Sin stock':p.stock<=2?'Bajo':'OK']);
    doc.autoTable({ startY:52, head:[['#','Producto','Costo','P. Público','Stock','Estado']], body:rows, theme:'grid',
        headStyles:{fillColor:[107,143,113],textColor:255,fontStyle:'bold',fontSize:9}, bodyStyles:{fontSize:8,cellPadding:3},
        columnStyles:{0:{cellWidth:10},1:{cellWidth:75},2:{cellWidth:25},3:{cellWidth:28},4:{cellWidth:15,halign:'center'},5:{cellWidth:20,halign:'center'}},
        alternateRowStyles:{fillColor:[245,248,245]},
        didParseCell:function(d){if(d.column.index===5&&d.section==='body'){if(d.cell.raw==='Sin stock')d.cell.styles.textColor=[192,80,58];else if(d.cell.raw==='Bajo')d.cell.styles.textColor=[196,148,10];else d.cell.styles.textColor=[90,158,111];}},
        margin:{left:12,right:12}});
    doc.save('stock_armonia_natural.pdf'); showToast('📥 PDF de Stock descargado');
}
function downloadPriceListPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p','mm','a4');
    const pw = doc.internal.pageSize.getWidth();
    doc.setFillColor(107,143,113); doc.rect(0,0,pw,40,'F');
    doc.setTextColor(255); doc.setFont('helvetica','bold'); doc.setFontSize(22);
    doc.text('Lista de Precios', pw/2, 18, {align:'center'});
    doc.setFontSize(10); doc.setFont('helvetica','normal');
    doc.text('DRAHAN SAHUMERIOS — '+new Date().toLocaleDateString('es-AR'), pw/2, 28, {align:'center'});
    const rows = products.filter(p=>p.stock>0).map((p,i) => [i+1, prettify(p.name), `$${formatARS(p.publicPrice)}`]);
    doc.autoTable({ startY:48, head:[['#','Producto','Precio']], body:rows, theme:'striped',
        headStyles:{fillColor:[74,93,78],fontSize:10}, bodyStyles:{fontSize:9},
        columnStyles:{0:{cellWidth:12},1:{cellWidth:130},2:{cellWidth:30,halign:'right',fontStyle:'bold'}},
        alternateRowStyles:{fillColor:[247,245,240]}, margin:{left:12,right:12}});
    doc.save('lista_precios_armonia_natural.pdf'); showToast('📥 Lista de Precios descargada');
}

function downloadCatalogPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p','mm','a4');
    const pw = doc.internal.pageSize.getWidth();
    const ph = doc.internal.pageSize.getHeight();
    const available = products.filter(p => p.stock > 0);
    if (!available.length) { showToast('⚠️ No hay productos disponibles para el catálogo'); return; }

    // Group products by category
    const groups = {};
    available.forEach(p => {
        let cat = 'Otros';
        if (p.name.includes('DUENDES ALQUIMISTAS')) cat = 'Duendes Alquimistas';
        else if (p.name.includes('INDIA HEXAGONAL LINEA BLANCA')) cat = 'India Hexagonal Línea Blanca';
        else if (p.name.includes('INDIA HEXAGONAL') && p.name.includes('PROMO')) cat = 'India Hexagonal Promo';
        else if (p.name.includes('INDIA ILUMINARTE') && p.name.includes('NUEVO')) cat = 'India Iluminarte (Nuevo)';
        else if (p.name.includes('INDIA ILUMINARTE') && p.name.includes('PROMO')) cat = 'India Iluminarte Promo';
        else if (p.name.includes('7 CHAKRAS')) cat = '7 Chakras Iluminarte';
        else if (p.name.includes('BOMBAY TRIPLE')) cat = 'Bombay Triple Empaste';
        else if (p.name.includes('INDIA PAQUETE')) cat = 'India Paquete x15';
        else if (p.name.includes('PALO SANTO BUENA ONDA CAJA')) cat = 'Palo Santo Buena Onda (Caja)';
        else if (p.name.includes('MINI PALO SANTO')) cat = 'Mini Palo Santo Buena Onda';
        else if (p.name.includes('MINI TIBETANO')) cat = 'Mini Tibetano Aromanza';
        else if (p.name.includes('BOMBITA SAGRADA MADRE')) cat = 'Bombitas Sagrada Madre';
        else if (p.name.includes('SAGRADA MADRE')) cat = 'Sagrada Madre Premium Slim';
        else if (p.name.includes('VISHNU')) cat = 'Vishnu Hexagonal x20';
        else if (p.name.includes('TUK TUK')) cat = 'Tuk Tuk Hindu';
        else if (p.name.includes('DARSHAN')) cat = 'Darshan';
        else if (p.name.includes('TEXTIL AMBAR')) cat = 'Textil Ambar 150ml';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(p);
    });

    // --- Cover page ---
    doc.setFillColor(74, 93, 78);
    doc.rect(0, 0, pw, ph, 'F');
    // Decorative lines
    doc.setDrawColor(140, 158, 141); doc.setLineWidth(0.5);
    doc.rect(15, 15, pw - 30, ph - 30);
    doc.rect(18, 18, pw - 36, ph - 36);
    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold'); doc.setFontSize(42);
    doc.text('DRAHAN', pw / 2, ph / 2 - 20, { align: 'center' });
    doc.text('SAHUMERIOS', pw / 2, ph / 2 + 5, { align: 'center' });
    // Subtitle
    doc.setFont('helvetica', 'normal'); doc.setFontSize(14);
    doc.text('Catálogo de Productos', pw / 2, ph / 2 + 25, { align: 'center' });
    // Decorative divider
    doc.setDrawColor(163, 184, 153); doc.setLineWidth(0.8);
    doc.line(pw / 2 - 30, ph / 2 + 35, pw / 2 + 30, ph / 2 + 35);
    // Date
    doc.setFontSize(10); doc.setTextColor(180, 200, 180);
    doc.text(new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' }), pw / 2, ph / 2 + 45, { align: 'center' });
    // Footer
    doc.setFontSize(9); doc.setTextColor(140, 158, 141);
    doc.text('Precios expresados en pesos argentinos. Sujetos a modificaciones.', pw / 2, ph - 25, { align: 'center' });

    // --- Product pages ---
    const catKeys = Object.keys(groups);
    catKeys.forEach((cat, catIdx) => {
        doc.addPage();
        let y = 20;

        // Category header bar
        doc.setFillColor(74, 93, 78);
        doc.roundedRect(12, y - 6, pw - 24, 14, 3, 3, 'F');
        doc.setTextColor(255); doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
        doc.text(cat.toUpperCase(), pw / 2, y + 3, { align: 'center' });
        y += 18;

        // Subtle line
        doc.setDrawColor(200, 210, 200); doc.setLineWidth(0.3);
        doc.line(12, y, pw - 12, y);
        y += 6;

        const items = groups[cat];
        items.forEach((p, i) => {
            // Check page overflow
            if (y > ph - 30) {
                // Footer on current page
                doc.setFontSize(8); doc.setTextColor(160, 170, 160);
                doc.text('DRAHAN SAHUMERIOS — Catálogo de Productos', pw / 2, ph - 10, { align: 'center' });
                doc.addPage();
                y = 20;
                // Repeat category header
                doc.setFillColor(74, 93, 78);
                doc.roundedRect(12, y - 6, pw - 24, 14, 3, 3, 'F');
                doc.setTextColor(255); doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
                doc.text(cat.toUpperCase() + ' (cont.)', pw / 2, y + 3, { align: 'center' });
                y += 18;
                doc.setDrawColor(200, 210, 200); doc.setLineWidth(0.3);
                doc.line(12, y, pw - 12, y);
                y += 6;
            }

            // Extract variant name (after the dash)
            let variant = '';
            const dashIdx = p.name.lastIndexOf(' - ');
            if (dashIdx > -1) variant = p.name.substring(dashIdx + 3).trim();

            // Product row
            // Alternating background
            if (i % 2 === 0) {
                doc.setFillColor(247, 245, 240);
                doc.rect(12, y - 4, pw - 24, 15, 'F');
            }

            // Thumbnail
            if (p.image && typeof thumbnails !== 'undefined' && thumbnails[p.image]) {
                doc.addImage(thumbnails[p.image], 'JPEG', 14, y - 3, 11, 11);
            }

            // Variant or full name
            doc.setTextColor(74, 93, 78); doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
            const displayName = variant ? prettify(variant) : prettify(p.name);
            doc.text(displayName, 28, y + 3);

            // Price
            doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
            doc.setTextColor(107, 143, 113);
            doc.text(`$ ${formatARS(p.publicPrice)}`, pw - 18, y + 3, { align: 'right' });

            // Dots between name and price
            doc.setTextColor(200, 210, 200); doc.setFont('helvetica', 'normal'); doc.setFontSize(8);
            const nameWidth = doc.getTextWidth(displayName) * (10/8);
            const priceText = `$ ${formatARS(p.publicPrice)}`;
            const priceWidth = doc.getTextWidth(priceText) * (11/8);
            const dotsStart = 28 + nameWidth + 5;
            const dotsEnd = pw - 18 - priceWidth - 5;
            if (dotsEnd > dotsStart) {
                const dots = '.'.repeat(Math.floor((dotsEnd - dotsStart) / 1.5));
                doc.text(dots, dotsStart, y + 3);
            }

            y += 16;
        });

        // Page footer
        doc.setFontSize(8); doc.setTextColor(160, 170, 160);
        doc.text('Armonía Natural — Catálogo de Productos', pw / 2, ph - 10, { align: 'center' });
    });

    doc.save('catalogo_armonia_natural.pdf');
    showToast('📥 Catálogo descargado');
}

// ===== IMPORT =====
function handleFileUpload(e) {
    const f = e.target.files[0]; if(!f) return;
    if(f.name.endsWith('.pdf')) parsePDF(f);
    else { const r=new FileReader(); r.onload=ev=>processImportText(ev.target.result); r.readAsText(f); }
}
async function parsePDF(file) {
    try {
        pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        const data=await file.arrayBuffer(); const pdf=await pdfjsLib.getDocument({data}).promise;
        let text='';
        for(let i=1;i<=pdf.numPages;i++){const pg=await pdf.getPage(i);const c=await pg.getTextContent();text+=c.items.map(it=>it.str).join('\t')+'\n';}
        processImportText(text);
    } catch(err) { showToast('❌ Error al leer el PDF: '+err.message); }
}
function processImportText(text) {
    pendingImport = [];
    text.split('\n').forEach(line => {
        if(!line.trim()) return;
        products.forEach(p => {
            const n = p.name.toLowerCase().replace(/\s+/g,' ').trim();
            const l = line.toLowerCase().replace(/\s+/g,' ').trim();
            if(l.includes(n.substring(0,Math.min(30,n.length)))) {
                const qm = line.match(/\t(\d+)\t/);
                const qty = qm ? parseInt(qm[1]) : 1;
                if(!pendingImport.find(x=>x.name===p.name)) pendingImport.push({name:p.name, qty});
            }
        });
    });
    showImportResults();
}
function processManualImport() {
    const text = document.getElementById('manual-import').value;
    if(!text.trim()){ showToast('⚠️ Pegá el contenido del pedido primero'); return; }
    pendingImport = [];
    text.split('\n').forEach(line => {
        if(!line.trim()) return;
        const parts = line.split('\t');
        if(parts.length>=4) {
            const name = parts[1]?.trim();
            const qty = parseInt(parts[3])||1;
            if(name) {
                const match = products.find(p=>p.name.toLowerCase()===name.toLowerCase());
                if(match) pendingImport.push({name:match.name, qty});
                else pendingImport.push({name, qty, isNew:true});
            }
        }
    });
    showImportResults();
}
function showImportResults() {
    const div=document.getElementById('import-results'), items=document.getElementById('import-items');
    if(!pendingImport.length){ showToast('⚠️ No se encontraron productos'); return; }
    div.style.display='block';
    items.innerHTML = pendingImport.map(p=>`<div class="import-item"><span>${prettify(p.name)} ${p.isNew?'<span style="color:var(--warning);font-size:0.8rem">(NUEVO)</span>':''}</span><span class="qty">+${p.qty} unidades</span></div>`).join('');
    showToast(`📦 Se encontraron ${pendingImport.length} productos para importar`);
}
function applyImport() {
    pendingImport.forEach(imp => {
        const idx = products.findIndex(p=>p.name===imp.name);
        if(idx>=0) products[idx].stock += imp.qty;
        else if(imp.isNew) products.push({name:imp.name, cost:0, publicPrice:0, stock:imp.qty, image:'imagen.png'});
    });
    saveStock(); renderCatalog(); renderStockTable();
    document.getElementById('import-results').style.display='none';
    pendingImport = []; showToast('✅ Stock actualizado');
}
function cancelImport() { document.getElementById('import-results').style.display='none'; pendingImport=[]; }

// ===== UI =====
function switchTab(tab) {
    if ((tab==='stock'||tab==='importar') && !isAdmin) { toggleAdmin(); return; }
    document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
    document.getElementById('sec-'+tab).classList.add('active');
    document.querySelector(`.nav-tab[data-tab="${tab}"]`).classList.add('active');
    if(tab==='stock') renderStockTable();
}
function showToast(msg) { const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),3000); }

// Drag & drop
const zone = document.getElementById('import-zone');
if(zone){
    zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('dragover');});
    zone.addEventListener('dragleave',()=>zone.classList.remove('dragover'));
    zone.addEventListener('drop',e=>{e.preventDefault();zone.classList.remove('dragover');
        const f=e.dataTransfer.files[0];
        if(f){if(f.name.endsWith('.pdf'))parsePDF(f);else{const r=new FileReader();r.onload=ev=>processImportText(ev.target.result);r.readAsText(f);}}
    });
}

// Init
initProducts();
renderCatalog();
