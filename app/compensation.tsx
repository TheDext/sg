import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, StyleSheet, Alert, ActivityIndicator } from 'react-native';

const Compensation = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        birthDate: '',
        address: '',
        relation: '',
        soldierFullName: '',
        soldierBirthDate: '',
        personalNumber: '',
        militaryUnit: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        // Убираем ошибку при изменении поля
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Обязательное поле';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Некорректный email';
        }

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Обязательное поле';
        }

        if (!formData.relation.trim()) {
            newErrors.relation = 'Обязательное поле';
        }

        if (!formData.soldierFullName.trim()) {
            newErrors.soldierFullName = 'Обязательное поле';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) {
            Alert.alert('Ошибка', 'Пожалуйста, заполните все обязательные поля');
            return;
        }

        setIsLoading(true);

        // Имитация отправки данных
        setTimeout(() => {
            console.log('Form data:', formData);
            setIsLoading(false);
            setModalVisible(false);
            setFormData({
                email: '',
                fullName: '',
                birthDate: '',
                address: '',
                relation: '',
                soldierFullName: '',
                soldierBirthDate: '',
                personalNumber: '',
                militaryUnit: ''
            });
            setErrors({});
            Alert.alert('Успешно', 'Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        }, 2000);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Компенсационные выплаты родственникам погибшего военного</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Что положено родственникам:</Text>
                <Text style={styles.text}>
                    • Единовременная денежная помощь (ЕДП) - компенсационная выплата за смерть военного
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Размеры выплат:</Text>
                <Text style={styles.subtitle}>15 000 000 гривен (750 прожиточных минимумов) - если смерть:</Text>
                <Text style={styles.text}>- наступила при исполнении обязанностей военной службы</Text>
                <Text style={styles.text}>- связана с заболеванием от исполнения служебных обязанностей</Text>
                <Text style={styles.text}>- наступила в течение года после увольнения из-за травмы/заболевания, связанных со службой</Text>
                <Text style={styles.text}>- связана с защитой Родины (боевые действия, ранения, травмы)</Text>

                <Text style={styles.subtitle}>500 прожиточных минимумов - если смерть:</Text>
                <Text style={styles.text}>- наступила при прохождении службы (не связана с боевыми действиями)</Text>
                <Text style={styles.text}>- вызвана заболеванием, возникшим в связи с прохождением службы</Text>
                <Text style={styles.text}>- наступила в течение года после увольнения из-за травмы/заболевания, приобретенных на службе</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Как выплачиваются средства:</Text>
                <Text style={styles.text}>• Выплата 15 миллионов гривен происходит поэтапно:</Text>
                <Text style={styles.text}>  - Первая выплата: 1/5 от суммы (3 000 000 грн)</Text>
                <Text style={styles.text}>  - Остаток: в течение 40 месяцев равными частями</Text>
                <Text style={styles.text}>• Другие выплаты осуществляются единовременно</Text>
            </View>

            <View style={styles.note}>
                <Text style={styles.noteText}>
                    Важно: Выплаты распределяются поровну между всеми получателями.
                    Военный мог оставить личное распоряжение о распределении средств.

                    Вы можете узнать о наличии такого распоряжения оставив заявку.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Оставить заявку</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => !isLoading && setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {isLoading ? (
                            <View style={styles.loaderContainer}>
                                <ActivityIndicator size="large" color="#3498db" />
                                <Text style={styles.loaderText}>Отправка заявки...</Text>
                            </View>
                        ) : (
                            <>
                                <Text style={styles.modalTitle}>Форма заявки</Text>

                                <ScrollView style={styles.formContainer}>
                                    {/* Ваши данные */}
                                    <Text style={styles.sectionLabel}>Ваши данные</Text>

                                    <TextInput
                                        style={[styles.input, errors.email && styles.inputError]}
                                        placeholder="Электронная почта *"
                                        value={formData.email}
                                        onChangeText={(text) => handleInputChange('email', text)}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                    />
                                    {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                                    <TextInput
                                        style={[styles.input, errors.fullName && styles.inputError]}
                                        placeholder="ФИО *"
                                        value={formData.fullName}
                                        onChangeText={(text) => handleInputChange('fullName', text)}
                                    />
                                    {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Дата рождения (ДД.ММ.ГГГГ)"
                                        value={formData.birthDate}
                                        onChangeText={(text) => handleInputChange('birthDate', text)}
                                    />

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Адрес проживания"
                                        value={formData.address}
                                        onChangeText={(text) => handleInputChange('address', text)}
                                    />

                                    {/* Данные о военнослужащем */}
                                    <Text style={[styles.sectionLabel, styles.marginTop]}>Данные о военнослужащем</Text>

                                    <TextInput
                                        style={[styles.input, errors.relation && styles.inputError]}
                                        placeholder="Кем приходится военнослужащий *"
                                        value={formData.relation}
                                        onChangeText={(text) => handleInputChange('relation', text)}
                                    />
                                    {errors.relation && <Text style={styles.errorText}>{errors.relation}</Text>}

                                    <TextInput
                                        style={[styles.input, errors.soldierFullName && styles.inputError]}
                                        placeholder="ФИО военнослужащего *"
                                        value={formData.soldierFullName}
                                        onChangeText={(text) => handleInputChange('soldierFullName', text)}
                                    />
                                    {errors.soldierFullName && <Text style={styles.errorText}>{errors.soldierFullName}</Text>}

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Дата рождения военнослужащего (ДД.ММ.ГГГГ)"
                                        value={formData.soldierBirthDate}
                                        onChangeText={(text) => handleInputChange('soldierBirthDate', text)}
                                    />

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Личный номер (если знаете)"
                                        value={formData.personalNumber}
                                        onChangeText={(text) => handleInputChange('personalNumber', text)}
                                    />

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Номер в/ч"
                                        value={formData.militaryUnit}
                                        onChangeText={(text) => handleInputChange('militaryUnit', text)}
                                    />
                                </ScrollView>

                                <View style={styles.modalButtons}>
                                    <TouchableOpacity
                                        style={[styles.modalButton, styles.cancelButton]}
                                        onPress={() => setModalVisible(false)}
                                        disabled={isLoading}
                                    >
                                        <Text style={styles.modalButtonText}>Отмена</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.modalButton, styles.submitButton, isLoading && styles.buttonDisabled]}
                                        onPress={handleSubmit}
                                        disabled={isLoading}
                                    >
                                        <Text style={styles.modalButtonText}>Отправить</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#2c3e50',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#34495e',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5,
        color: '#2c3e50',
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
        lineHeight: 20,
        color: '#2c3e50',
    },
    note: {
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#e74c3c',
        marginTop: 20,
    },
    noteText: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#7f8c8d',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        width: '90%',
        maxHeight: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#2c3e50',
    },
    formContainer: {
        maxHeight: 400,
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 15,
        marginTop: 10,
    },
    marginTop: {
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        fontSize: 14,
    },
    inputError: {
        borderColor: '#e74c3c',
    },
    errorText: {
        color: '#e74c3c',
        fontSize: 12,
        marginBottom: 12,
        marginTop: -4,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#e74c3c',
    },
    submitButton: {
        backgroundColor: '#27ae60',
    },
    buttonDisabled: {
        backgroundColor: '#95a5a6',
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    loaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    loaderText: {
        marginTop: 16,
        fontSize: 16,
        color: '#7f8c8d',
    },
});

export default Compensation;