import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const PaymentTimeline = () => {
    const handleContactPress = () => {
        Linking.openURL('tel:+380442255717');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Сроки получения выплат</Text>

            <View style={styles.card}>
                <Text style={styles.subheader}>Основные выплаты</Text>
                <Text style={styles.text}>
                    Выплаты в размере 500 и 750 прожиточных минимумов осуществляются единовременно всей суммой.
                </Text>
                <Text style={styles.note}>
                    На практике срок обработки заявления: 4-6 месяцев
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subheader}>Выплата 15 000 000 грн</Text>
                <Text style={styles.text}>
                    Производится поэтапно в течение 40 месяцев
                </Text>
            </View>

            <View style={styles.stepsCard}>
                <Text style={styles.subheader}>Порядок выплаты 15 млн:</Text>

                {[
                    "Первая выплата - 1/5 от суммы (3 000 000 грн)",
                    "Последующие выплаты - равными частями",
                    "Общий срок выплат - 40 месяцев",
                    "Частота выплат - ежемесячно"
                ].map((step, index) => (
                    <View key={index} style={styles.step}>
                        <View style={styles.stepIndicator}>
                            <Text style={styles.stepNumber}>{index + 1}</Text>
                        </View>
                        <Text style={styles.stepText}>{step}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.card}>
                <Text style={styles.subheader}>Возможные задержки</Text>
                <View style={styles.timeline}>
                    <Text style={styles.timelineItem}>• Проверка документов</Text>
                    <Text style={styles.timelineItem}>• Очередь на рассмотрение</Text>
                    <Text style={styles.timelineItem}>• Технические вопросы</Text>
                </View>
            </View>

        </ScrollView>
    );
};

// Используем те же стили, что и в предыдущем компоненте для единообразия
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
        paddingTop: 40,
    },
    header: {
        fontSize: 22,
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    stepsCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    subheader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 12,
    },
    text: {
        fontSize: 15,
        lineHeight: 22,
        color: '#34495e',
        marginBottom: 8,
    },
    note: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#7f8c8d',
        marginTop: 8,
    },
    step: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    stepIndicator: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    stepNumber: {
        color: 'white',
        fontWeight: 'bold',
    },
    stepText: {
        flex: 1,
        fontSize: 14,
        color: '#34495e',
    },
    timeline: {
        marginTop: 10,
        marginLeft: 10,
    },
    timelineItem: {
        fontSize: 14,
        color: '#34495e',
        marginBottom: 5,
    },
    contactButton: {
        flexDirection: 'row',
        backgroundColor: '#e74c3c',
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    contactButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 10,
    },
});

export default PaymentTimeline;