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
import {SafeAreaView} from "react-native-safe-area-context";

const Ticket = () => {
    const handleContactPress = () => {
        Linking.openURL('tel:+380442255717');
    };

    return (
        <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Порядок получения выплат</Text>

            <View style={styles.card}>
                <Text style={styles.subheader}>Куда обращаться?</Text>
                <Text style={styles.text}>
                    Если военнослужащий проходил службу в ВСУ, заявление подается в любой ТЦК и СП (военкомат).
                </Text>
                <Text style={styles.note}>
                    Для Нацгвардии, ГПСУ, СБУ - обращаться непосредственно в воинское формирование.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subheader}>Срок обращения</Text>
                <Text style={styles.text}>3 года с момента смерти</Text>
            </View>

            <View style={styles.stepsCard}>
                <Text style={styles.subheader}>Процедура оформления (ВСУ):</Text>

                {[
                    "Подача заявления в ТЦК и СП",
                    "Проверка комплектности документов",
                    "Передача в областной военкомат (до 7 дней)",
                    "Передача в Министерство обороны",
                    "Рассмотрение комиссией МОУ",
                    "Принятие решения",
                    "Выплата средств (до 5 дней после поступления)"
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
                <Text style={styles.subheader}>Важно!</Text>
                <Text style={styles.text}>
                    Для других структур (Нацгвардия, ГПСУ) сроки рассмотрения отличаются:
                </Text>
                <View style={styles.timeline}>
                    <Text style={styles.timelineItem}>• Нацгвардия: до 3 месяцев</Text>
                    <Text style={styles.timelineItem}>• ГПСУ: 15 дней + 1 месяц</Text>
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
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

export default Ticket;