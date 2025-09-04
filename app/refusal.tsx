import React from 'react';
import { ScrollView, Text, View, StyleSheet, Linking } from 'react-native';

const Refusal = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Как действовать в случае отказа в выплате?</Text>
            <Text style={styles.paragraph}>
                15 миллионов семьям погибших назначают не всем заявителям из-за отказа в выплате.
            </Text>

            <Text style={styles.paragraph}>
                Для защиты своего права на получение выплаты ЕДП в случае отказа стоит проанализировать суть, содержание отказа, аргументы, которые стали основанием для отказа. Если по анализу такого решения окажется, что оно является незаконным, то свое право на получение ЕДП Вы можете защитить в судебном порядке.
            </Text>

            <Text style={styles.sectionTitle}>Рассмотрим самые распространенные причины отказа в выплате:</Text>

            {/* Ситуация 1 */}
            <View style={styles.situationContainer}>
                <Text style={styles.situationTitle}>Ситуация 1: Отказ в выплате ЕДП из-за спирта в моче или крови военного</Text>
                <Text style={styles.paragraph}>
                    После смерти военного в обязательном порядке проводится токсикологическое исследование. Если в крови или моче обнаружен спирт — в выплате отказывают.
                </Text>
                <Text style={styles.important}>
                    Такой отказ является НЕЗАКОННЫМ, если несмотря на состояние опьянения военный умер от действий не связанных с употреблением алкоголя (например от воспаления легких, инсульта, инфаркта, минно-взрывной травмы).
                </Text>
                <Text style={styles.paragraph}>
                    Способ защиты прав в случае отказа — судебный. Выплаты осуществляются по судебному решению.
                </Text>
            </View>

            {/* Ситуация 2 */}
            <View style={styles.situationContainer}>
                <Text style={styles.situationTitle}>Ситуация 2: Отказ если военный умер от болезни (инфаркт, инсульт, пневмония)</Text>
                <Text style={styles.paragraph}>
                    Если заболевание возникло на боевых действиях, оно связано с защитой Родины и выплата должна составлять 15 млн грн.
                </Text>
                <Text style={styles.paragraph}>
                    Юридическая компания «Черниковы и партнеры» успешно завоевала клиентке доплату до 15 млн грн — дело №500/6892/24.
                </Text>
                <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('https://example.com/court-decision')}>
                    С полным текстом судебного решения
                </Text>
            </View>

            {/* Ситуация 3 */}
            <View style={styles.situationContainer}>
                <Text style={styles.situationTitle}>Ситуация 3: Отказ если военный умер в больнице или дома</Text>
                <Text style={styles.paragraph}>
                    Если военный не был уволен или с момента увольнения прошло менее года — выплата положена. Размер зависит от связи смерти со службой.
                </Text>
                <Text style={styles.paragraph}>
                    Если прошло более года — выплату можно отсудить, если смерть вызвана службой.
                </Text>
            </View>

            {/* Ситуация 4 */}
            <View style={styles.situationContainer}>
                <Text style={styles.situationTitle}>Ситуация 4: Отказ совершеннолетним детям военного</Text>
                <Text style={styles.paragraph}>
                    Совершеннолетние дети имеют право на выплату с 29.03.2024, включая ретроспективные случаи.
                </Text>
                <Text style={styles.important}>
                    Не нужно доказывать факт содержания! Отказ можно обжаловать в суде.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        paddingVertical: 50
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 16,
        color: '#444',
    },
    situationContainer: {
        marginBottom: 24,
        borderLeftWidth: 3,
        borderLeftColor: '#1e88e5',
        paddingLeft: 12,
    },
    situationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1e88e5',
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 12,
        color: '#555',
    },
    important: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 12,
        color: '#d32f2f',
        fontStyle: 'italic',
    },
    link: {
        color: '#1e88e5',
        textDecorationLine: 'underline',
        marginBottom: 12,
    },
});

export default Refusal;