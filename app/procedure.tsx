import React from 'react';
import { ScrollView, Text, View, StyleSheet, Linking } from 'react-native';

const PaymentProcedurePage = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.content}>
                <Text style={styles.title}>Куда обращаться для получения выплат?</Text>
                <Text style={styles.subtitle}>Порядок подачи и рассмотрения заявления на выплату</Text>

                <Text style={styles.paragraph}>
                    Если военнослужащий проходил службу в ВСУ, заявление подается в <Text style={styles.bold}>любой территориальный центр комплектования и социальной поддержки (ТЦК и СП)</Text>. Срок обращения - <Text style={styles.bold}>3 года</Text> с момента смерти.
                </Text>

                <View style={styles.stepContainer}>
                    <Text style={styles.stepTitle}>Шаг 1: Подача заявления</Text>
                    <Text style={styles.stepText}>
                        - Простая письменная форма{'\n'}
                        - Сотрудник ТЦК и СП заверяет копии документов{'\n'}
                        - При отправке почтой требуются нотариальные копии
                    </Text>
                </View>

                <View style={styles.stepContainer}>
                    <Text style={styles.stepTitle}>Шаг 2: Проверка документов</Text>
                    <Text style={styles.stepText}>
                        - Военкомат проверяет комплектность{'\n'}
                        - Может запрашивать недостающие документы
                    </Text>
                </View>

                <View style={styles.stepContainer}>
                    <Text style={styles.stepTitle}>Шаг 3: Передача в областной военкомат</Text>
                    <Text style={styles.stepText}>
                        - Срок по закону: 7 рабочих дней{'\n'}
                        - На практике: до 1 месяца
                    </Text>
                </View>

                <View style={styles.stepContainer}>
                    <Text style={styles.stepTitle}>Шаг 4: Передача в Минобороны</Text>
                    <Text style={styles.stepText}>
                        - Областной военкомат составляет заключение{'\n'}
                        - Проверяет юридические и формальные основания
                    </Text>
                </View>

                <View style={styles.stepContainer}>
                    <Text style={styles.stepTitle}>Шаг 5: Рассмотрение комиссией МОУ</Text>
                    <Text style={styles.stepText}>
                        - Документы передаются в Департамент соцобеспечения{'\n'}
                        - Проводится коллегиальное рассмотрение
                    </Text>
                </View>

                <View style={styles.stepContainer}>
                    <Text style={styles.stepTitle}>Шаг 6: Уведомление заявителя</Text>
                    <Text style={styles.stepText}>
                        - Решение о выплате, отказе или доработке{'\n'}
                        - Оформляется выписка из протокола{'\n'}
                        - Уведомление через районные военкоматы
                    </Text>
                </View>

                <View style={styles.stepContainer}>
                    <Text style={styles.stepTitle}>Шаг 7: Выплата средств</Text>
                    <Text style={styles.stepText}>
                        - В течение 5 дней после поступления ассигнований{'\n'}
                        - На специальные условия выплаты
                    </Text>
                </View>

                <View style={styles.noteContainer}>
                    <Text style={styles.noteTitle}>Для других структур (Нацгвардия, СБУ, ГПСУ):</Text>
                    <Text style={styles.noteText}>
                        - Обращаться в воинские части{'\n'}
                        - Сроки рассмотрения отличаются:{'\n'}
                        • Нацгвардия: 3 месяца{'\n'}
                        • ГПСУ: 15 дней + 1 месяц на решение
                    </Text>
                </View>

                <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('https://example.com/payment-details')}>
                    Подробнее о специальных условиях выплаты
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    content: {
        paddingBottom: 40, // Добавляем отступ снизу
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1a365d',
    },
    subtitle: {
        fontSize: 16,
        color: '#4a5568',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 20,
        color: '#2d3748',
    },
    bold: {
        fontWeight: '600',
    },
    stepContainer: {
        backgroundColor: '#f7fafc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#3182ce',
    },
    stepTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#2b6cb0',
    },
    stepText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#4a5568',
    },
    noteContainer: {
        backgroundColor: '#fffaf0',
        borderRadius: 8,
        padding: 16,
        marginTop: 8,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#dd6b20',
    },
    noteTitle: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 8,
        color: '#c05621',
    },
    noteText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#744210',
    },
    link: {
        color: '#3182ce',
        textDecorationLine: 'underline',
        fontSize: 15,
        marginTop: 10,
    },
});

export default PaymentProcedurePage;