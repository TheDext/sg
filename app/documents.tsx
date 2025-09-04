import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const RequiredDocumentsPage = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.content}>
                <Text style={styles.title}>Необходимые документы для оформления выплаты</Text>

                <View style={styles.documentCategory}>
                    <Text style={styles.categoryTitle}>1. Документы, удостоверяющие личность заявителя:</Text>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Паспорт</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Идентификационный номер</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Сведения о зарегистрированном месте жительства</Text>
                    </View>
                </View>

                <View style={styles.documentCategory}>
                    <Text style={styles.categoryTitle}>2. Документы, подтверждающие родственные связи:</Text>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Свидетельство о браке</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Свидетельства о рождении</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Выписки из реестров ЗАГС</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Решение суда (при наличии)</Text>
                    </View>
                </View>

                <View style={styles.documentCategory}>
                    <Text style={styles.categoryTitle}>3. Документы о смерти военного:</Text>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Свидетельство о смерти (из ЗАГСа)</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Врачебное свидетельство о смерти</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Выписка из приказа об исключении из списков</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Материалы служебного расследования</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Заключение судмедэксперта</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Извещение семьи</Text>
                    </View>
                </View>

                <View style={styles.documentCategory}>
                    <Text style={styles.categoryTitle}>4. Документы о других близких лицах:</Text>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Свидетельства о смерти других родственников</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Свидетельства о расторжении брака</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Выписки из системы органов ЗАГС</Text>
                    </View>
                </View>

                <View style={styles.documentCategory}>
                    <Text style={styles.categoryTitle}>5. Прочие документы:</Text>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Справка о банковских реквизитах заявителя</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Согласие на обработку персональных данных</Text>
                    </View>
                    <View style={styles.documentItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.documentText}>Справка о несудимости заявителя</Text>
                    </View>
                </View>

                <Text style={styles.note}>
                    Примечание: Все копии документов должны быть заверены нотариально или сотрудником ТЦК и СП.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    content: {
        paddingBottom: 40,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1a365d',
        textAlign: 'center',
    },
    documentCategory: {
        marginBottom: 20,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 15,
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#2c5282',
    },
    documentItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 5,
    },
    bullet: {
        marginRight: 8,
        fontSize: 16,
        color: '#4a5568',
    },
    documentText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#4a5568',
        flex: 1,
    },
    note: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#718096',
        marginTop: 15,
        textAlign: 'center',
    },
});

export default RequiredDocumentsPage;