import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, TouchableOpacity, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {useRouter} from "expo-router";

export default function HomeScreen() {
    const [relationship, setRelationship] = useState('Выберите степень родства');
    const [ageGroup, setAgeGroup] = useState('Выберите возрастную группу');
    const [isLoading, setIsLoading] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const router = useRouter();
    // Первоначальная загрузка
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // Проверка заполнения полей
    useEffect(() => {
        if (relationship !== 'Выберите степень родства' &&
            ageGroup !== 'Выберите возрастную группу') {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [relationship, ageGroup]);

    // Эффект для имитации проверки после нажатия кнопки
    useEffect(() => {
        if (isChecking) {
            const timer = setTimeout(() => {
                setIsChecking(false);
                setShowResult(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isChecking]);

    const relationships = [
        'Выберите степень родства',
        'Сын',
        'Дочь',
        'Супруга, в официальном браке',
        'Супруга, в неофициальном браке',
        'Отец',
        'Мать',
        'Иждивенец'
    ];

    const ageGroups = [
        'Выберите возрастную группу',
        'До 18 лет',
        'От 18 до 30 лет',
        'От 30 до 40 лет',
        'От 40 до 50 лет',
        'Старше 50 лет'
    ];

    const handleSubmit = () => {
        setIsChecking(true);
        setShowResult(false);
    };

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <Image
                    source={require('@/assets/images/gerb_ukr.png')}
                    style={styles.loaderImage}
                />
                <ActivityIndicator size="large" color="#3498db" style={styles.activityIndicator} />
                <Text style={styles.loadingText}>Загрузка данных...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Социальные гарантии</Text>
            <Text style={styles.welcome}>Добро пожаловать!</Text>
            <Text style={styles.description}>
                Узнайте о положенных вам выплатах, в случае гибели военнослужащего
            </Text>

            {/* Селектор степени родства */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={relationship}
                    onValueChange={setRelationship}
                    style={styles.picker}
                    dropdownIconColor="#3498db"
                >
                    {relationships.map((item, index) => (
                        <Picker.Item
                            key={index}
                            label={item}
                            value={item}
                            style={index === 0 ? styles.firstPickerItem : styles.pickerItem}
                        />
                    ))}
                </Picker>
            </View>

            {/* Селектор возрастной группы */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={ageGroup}
                    onValueChange={setAgeGroup}
                    style={styles.picker}
                    dropdownIconColor="#3498db"
                >
                    {ageGroups.map((item, index) => (
                        <Picker.Item
                            key={index}
                            label={item}
                            value={item}
                            style={index === 0 ? styles.firstPickerItem : styles.pickerItem}
                        />
                    ))}
                </Picker>
            </View>

            {/* Кнопка Отправить */}
            <TouchableOpacity
                style={[styles.submitButton, isButtonDisabled && styles.disabledButton]}
                onPress={handleSubmit}
                disabled={isButtonDisabled}
            >
                <Text style={styles.submitButtonText}>Отправить</Text>
            </TouchableOpacity>

            {isChecking && (
                <View style={styles.loaderContainerSmall}>
                    <ActivityIndicator size="large" color="#3498db" />
                    <Text style={styles.loadingText}>Поиск информации...</Text>
                </View>
            )}

            {showResult && (
                <View style={styles.infoCard}>
                    <Text style={styles.infoTitle}>Готово!</Text>
                    <Pressable
                        style={[styles.submitButton, isButtonDisabled && styles.disabledButton]}
                        disabled={isButtonDisabled}
                        onPress={() => router.push("/compensation")}
                    >
                        <Text style={styles.submitButtonText}>Ознакомиться</Text>
                    </Pressable>
                </View>
            )}

            <Text style={styles.sectionHeader}>Также читают</Text>

            <Pressable
                onPress={() => router.push('/documents')}
            >
            <View style={styles.newsSection}>
                <Text style={styles.sectionTitle}>Необходимые документы</Text>
                <Text style={styles.newsItem}>• Подготовили для вас список документов, необходимых для оформления выплаты</Text>
            </View>
            </Pressable>

            <Pressable
                onPress={() => router.push('/deadlines')}
            >
            <View style={styles.newsSection}>
                <Text style={styles.sectionTitle}>Сроки получения выплат и возможные задержки</Text>
                <Text style={styles.newsItem}>• Читайте, чтобы ускорить получение выплаты</Text>
            </View>
            </Pressable>

            <Pressable
                onPress={() => router.push('/refusal')}
            >
            <View style={styles.newsSection}>
                <Text style={styles.sectionTitle}>Отказали в выплате?</Text>
                <Text style={styles.newsItem}>• Узнайте ваши действия в случае отказа в выплате</Text>
            </View>
            </Pressable>

            <Pressable
                onPress={() => router.push('/procedure')}
            >
                <View style={styles.newsSection}>
                    <Text style={styles.sectionTitle}>Куда обращаться для получения выплат?</Text>
                    <Text style={styles.newsItem}>• Расскажем порядок подачи и рассмотрения заявления на выплату</Text>
                </View>
            </Pressable>

            <Pressable
                onPress={() => router.push('/faq')}
            >
                <View style={styles.newsSection}>
                    <Text style={styles.sectionTitle}>FAQ</Text>
                    <Text style={styles.newsItem}>• Частые вопросы о выплатах за смерть военнослужащего</Text>
                </View>
            </Pressable>

            <View style={styles.newsSection}>
                <Text style={styles.sectionTitle}>Юридическая помощь</Text>
                <Text style={styles.newsItem}>• Обратитесь к нашим специалистам в случае проблем с получением выплаты</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 70,
        backgroundColor: '#f5f5f5',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loaderContainerSmall: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        marginVertical: 10,
    },
    loaderImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    activityIndicator: {
        marginVertical: 10,
    },
    loadingText: {
        fontSize: 16,
        color: '#3498db',
        marginTop: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
        textAlign: 'center',
    },
    welcome: {
        fontSize: 18,
        fontWeight: '600',
        color: '#3498db',
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 25,
        textAlign: 'center',
        lineHeight: 20,
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#3498db',
    },
    picker: {
        width: '100%',
    },
    pickerItem: {
        fontSize: 14,
    },
    firstPickerItem: {
        fontSize: 14,
        color: '#7f8c8d',
    },
    submitButton: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 15,
    },
    disabledButton: {
        backgroundColor: '#bdc3c7',
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoCard: {
        backgroundColor: '#e3f2fd',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    infoText: {
        fontSize: 14,
        color: '#34495e',
        marginBottom: 10,
    },
    sectionHeader: {
        marginTop: 20,
        paddingVertical: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    newsSection: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    newsItem: {
        fontSize: 13,
        color: '#7f8c8d',
        marginBottom: 5,
    },
});