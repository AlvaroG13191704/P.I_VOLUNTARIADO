import { Document, Image, Page, View, StyleSheet } from "@react-pdf/renderer"

const COL_ANCHO_1 = 7.1;
const COL_ANCHO_2 = 15;

const styles = StyleSheet.create({
    tabla: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginTop: 10
    },
    tablaFila: {
        margin: 'auto',
        flexDirection: 'row',
    },
    tablaColumna1: {
        width: COL_ANCHO_1 + "%",
        borderStyle: 'solid',
        borderColor: '#000',
        borderBottomColor: '#000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tablaColumna2: {
        width: COL_ANCHO_2 + "%",
        borderStyle: 'solid',
        borderColor: '#000',
        borderBottomColor: '#000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tablaCeldaHeader: {
        margin: 2,
        fontSize: 9,

    },
    anchoColumna1: {
        width: COL_ANCHO_1 + "%",
        borderStyle: 'solid',
        borderColor: '#000',
        borderBottomColor: '#000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    anchoColumna2: {
        width: COL_ANCHO_2 + "%",
        borderStyle: 'solid',
        borderColor: '#000',
        borderBottomColor: '#000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tablaCelda: {
        margin: 2,
        fontSize: 10,
    },

});
export const DocumentPDF = () => {
    return (
        <Document>
            <Page size='A4'>
                <View style={{ padding: '15px' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ width: '100px' }}
                                src="/escudo.jpg"
                            />
                        </View>
                        <View style={{ flex: 2 }}>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Text style={{ textAlign: 'left', fontSize: '11px' }}>
                                    ESCUELA OFICIAL URBANA MIXTA "ELENA MORALES ORANTES" J.M
                                </Text>
                                <Text style={{ textAlign: 'left', fontSize: '11px' }}>
                                    QUINTO PRIMARIA SECCIÓN: D
                                </Text>
                                <Text style={{ textAlign: 'left', fontSize: '11px' }}>
                                    MAESTRA ENCARGADA: ROCSANA ZAMORA
                                </Text>
                                <Text style={{ textAlign: 'left', fontSize: '11px' }}>
                                    CICLO ESCOLAR: 2022                CUADRO DE ZONA
                                </Text>
                                <Text style={{ textAlign: 'left', fontSize: '11px' }}>
                                    MATERIA: MATEMÁTICAS
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tabla}>
                        <View style={styles.tablaFila}>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>NO</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>CODIGO</Text>
                            </View>
                            <View style={styles.tablaColumna2}>
                                <Text style={styles.tablaCeldaHeader}>NOMBRE COMPLETO</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>1</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>2</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>3</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>4</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>5</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>6</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>7</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>Zona</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>Ev</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>Total</Text>
                            </View>
                        </View>
                        <View style={styles.tablaFila}>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>1</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>J142YJI</Text>
                            </View>
                            <View style={styles.tablaColumna2}>
                                <Text style={styles.tablaCeldaHeader}>SCARLET ESTEFANIA ALFARO PERALTA</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>10</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>10</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>10</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>10</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>10</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>10</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>10</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>70</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>30</Text>
                            </View>
                            <View style={styles.tablaColumna1}>
                                <Text style={styles.tablaCeldaHeader}>100</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
