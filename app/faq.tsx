import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const CompensationInfoPage = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.content}>
                <Text style={styles.header}>Компенсации семьям погибших военных</Text>

                {/* Блок о размерах выплат */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Размеры выплат в 2024 году</Text>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Максимальная выплата: <Text style={styles.highlight}>15 000 000 грн</Text></Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Средняя выплата: <Text style={styles.highlight}>2 271 000 грн</Text> (750 прожиточных минимумов)</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Минимальная выплата: <Text style={styles.highlight}>1 514 000 грн</Text></Text>
                    </View>
                </View>

                {/* Блок о получателях */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Кто имеет право на выплаты?</Text>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Супруг(а) погибшего</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Дети (включая совершеннолетних)</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Родители/усыновители</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Внуки (если их родители умерли)</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Фактические сожители</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Иждивенцы военного</Text>
                    </View>
                </View>

                {/* Блок о порядке выплат */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Как выплачиваются 15 миллионов?</Text>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Первая выплата: <Text style={styles.highlight}>3 000 000 грн</Text> (1/5 часть)</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Последующие выплаты: <Text style={styles.highlight}>300 000 грн</Text> ежемесячно в течение 40 месяцев</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Делятся поровну между всеми получателями</Text>
                    </View>
                </View>

                {/* Блок о дополнительных выплатах */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Дополнительные выплаты</Text>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Компенсация на погребение</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Невыплаченное денежное довольствие</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Компенсация за неиспользованный отпуск</Text>
                    </View>
                </View>

                {/* Блок о сроках */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Сроки оформления и выплат</Text>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Срок обращения: <Text style={styles.highlight}>3 года</Text> с момента смерти</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Срок рассмотрения: от <Text style={styles.highlight}>6 месяцев</Text></Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.infoText}>Полная выплата: <Text style={styles.highlight}>41 месяц</Text></Text>
                    </View>
                </View>

                <Text style={styles.note}>
                    Важно: Размер выплаты зависит от обстоятельств смерти военного и подтверждающих документов.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    content: {
        paddingBottom: 32,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1a365d',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#3182ce',
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 12,
        color: '#2c5282',
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    bullet: {
        marginRight: 8,
        fontSize: 16,
        color: '#4a5568',
    },
    infoText: {
        fontSize: 15,
        lineHeight: 22,
        color: '#2d3748',
        flex: 1,
    },
    highlight: {
        fontWeight: '600',
        color: '#2b6cb0',
    },
    note: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#718096',
        marginTop: 8,
        textAlign: 'center',
    },
});

export default CompensationInfoPage;