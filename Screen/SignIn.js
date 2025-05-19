import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemembered, setIsRemembered] = useState(false);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#2A4BA0" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Sign In</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Logo và tiêu đề */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/jack.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.welcomeText}>Welcome Back!</Text>
                <Text style={styles.subText}>
                    Sign in to continue enjoying our amazing shopping services.
                </Text>
            </View>

            {/* Form */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>EMAIL ADDRESS</Text>
                <TextInput
                    style={styles.input}
                    placeholder="john.smith@example.com"
                    placeholderTextColor="#8891A5"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>PASSWORD</Text>
                <TextInput
                    style={styles.input}
                    placeholder="********"
                    placeholderTextColor="#8891A5"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {/* Remember Me */}
                <View style={styles.rememberContainer}>
                    <Switch
                        value={isRemembered}
                        onValueChange={setIsRemembered}
                        trackColor={{ false: '#D3D3D3', true: '#2A4BA0' }}
                        thumbColor={isRemembered ? '#FFFFFF' : '#F8F9FB'}
                    />
                    <Text style={styles.rememberText}>Remember Me</Text>
                </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity
                style={styles.signInButton}
                onPress={() => navigation.navigate('MainScreen')}
            >
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.footerLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#2A4BA0',
        marginTop: 15,
        paddingBottom: 15,
    },
    subText: {
        fontSize: 14,
        color: '#616A7D',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    header: {
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2A4BA0',
    },
    formContainer: {
        padding: 20,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1A2530',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        color: '#1A2530',
        marginBottom: 15,
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    rememberText: {
        fontSize: 14,
        color: '#1A2530',
        marginLeft: 10,
    },
    forgotPassword: {
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#2A4BA0',
        fontWeight: '600',
    },
    signInButton: {
        backgroundColor: '#2A4BA0',
        borderRadius: 16,
        paddingVertical: 15,
        alignItems: 'center',
        margin: 20,
    },
    signInButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#616A7D',
    },
    footerLink: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2A4BA0',
    },
});